---
title: "Egg. Make *evaluate* a method of nodes"
categories: ["practicas"] 
permalink: "/practicas/egg-method-evaluate"
rubrica:
  - Metodología de trabajo y Jerarquía de ficheros
  - Se han añadido clases para los distintos tipos de nodos siguiendo el Strategy Pattern
  - Se dispone de un mecanismo para convertir los JSON en objetos de las clases del AST y el intérprete evm funciona
  - "Alias de las palabras reservadas como `set/= define/def/:=` etc."
  - 
    - Analizador Léxico
    - "**Las llaves `{}` funcionan como alias de los paréntesis**"
    - Sticky
    - Comentarios
    - Localización
  -
    - Pruebas
    - "**Se usa mocking**"
    - Se provee una carpeta `examples`  con ejemplos de programas `egg``
    - Se ha automatizado el proceso de pasar del "*ejemplo que funciona*" a "*test unitario que prueba que funciona*"
    - Se hace integración contínua
  - 
    - Documentación
    - Ejecutables, Lenguaje, ASTs, etc.
    - Documentación del módulo npm (API) y ejecutables como se usan
    - "Opcional: Documentación de la API de los módulos (parser, eggvm), informe de cubrimiento, etc."
  - set (asignación y manejo de ámbitos)
  - Librerías separadas (Parser, Intérprete, etc.)
  - 
    - Ejecutables (uno con opciones o varios ejecutables)
  - 
    - Se ha publicado en GitHub Registry 
    - La publicación cumple los estándares de publicación de un módulo (CI, versionado, documentación, etc.)
  - 
    - El bucle REPL 
    - Evalúa correctamente y no se despista
    - Detecta expresiones incompletas
    - Colores 
---

## Metodologia

{% include metodologia-egg.md %}  

## Design: Smells, The Switch Smell, The Open Closed Principle and the Strategy Pattern

Lea esta sección:

* [Design: Smells, The Switch Smell, The Open Closed Principle and the Strategy Pattern]({{site.baseurl}}/assets/temas/introduccion-a-javascript/design)

procurando entender los principios SOLID, el problema del Switch Smell y el  *Strategy Pattern*. Vea el vídeo de Elijah Manor.

## Ejemplos de Jerarquía de Ficheros y Organización

* [Jerarquía de Ficheros y Organización]({{site.baseurl}}/assets/practicas/egg-method-evaluate/jerarquia-de-ficheros#ejemplo-1) Ejemplo-1
* [Jerarquía de Ficheros y Organización]({{site.baseurl}}/assets/practicas/egg-method-evaluate/jerarquia-de-ficheros#ejemplo-2) Ejemplo-2
* [Jerarquía de Ficheros y Organización]({{site.baseurl}}/assets/practicas/egg-method-evaluate/jerarquia-de-ficheros#ejemplo-3) Ejemplo-3


## Strategy Pattern en Egg

El diseño de Marijn Haverbeke sigue el strategy pattern y evita el switch smell mediante el uso de los hashes `specialForms`, `topEnv`, etc.

Para dar soporte a la idea, en nuestro módulo  existirá algún módulo, llamémoslo `public.js` que exporte los hashes `specialForms`,  `topEnv`, etc. que faciliten la escritura de plugins que extiendan el lenguaje. Algo así:

```
➜  egg-4-alu0100966589 git:(master) ✗ cat lib/public.js 
```
```js
const egg = require('./eggvm');
const specialForms = require('./specialForms');
const astNodes = require('./ast_nodes');

module.exports = {
    egg,
    specialForms,
    astNodes
};
```

Así un desarrollador externo que quiera extender nuestro Egg con un módulo `egg-plugin-XXX` podría hacerlo. Para ello importará `registry.js` del módulo principal e insertará en `specialForms` y `topEnv` sus extensiones.

Este sería un ejemplo de un plugin externo:

```
➜  egg-4-alu0100966589 git:(master) ✗ cat plugins/require.js 
```

```js
const fs = require('fs');
const { egg, specialForms } = require('../lib/public');
```

Primero obtiene `egg` y `specialForms` del módulo principal los (en este caso está en `'../lib/public'`) y luego extiende `topEnv`:

```js
const requireResults = new Map();

egg.topEnv["require"] = (path) => {
    if (typeof path !== 'string') {
        throw new Error('invalid argument for require, expected a string');
    }
    if (requireResults.has(path)) {
        return requireResults.get(path);
    } 
    else {
        const result = egg.runFromFile(path);
        requireResults.set(path, result);
        return result;
    }
}
```

Esto permitiría que el futuro el intérprete cargara dinámicamente plugins 
que están en módulos separados. Algo así:

```
➜  egg-4-alu0100966589 git:(master) ✗ cat examples/require.egg 
do(
    def(str, require("examples/a.egg")),
    print(str)
)

➜  egg-4-alu0100966589 git:(master) ✗ cat examples/a.egg      
print("\thello\nworld\u2764")
```

Ahora podríamos ejecutar el intérprete dotándolo con una opción `-p` que permita cargar plugins instalados:

```
➜  egg-4-alu0100966589 git:(master) ✗ bin/egg.js -p ../plugins/require.js -r examples/require.egg 
        hello
world❤
        hello
world❤
```

## AST con Clases: *evaluate* como método

Desafortunadamente es mucho mas difícil  hacer un analizador sintáctico que cumpla el principio *Open Closed* y mas aún usando un analizador PDR.  

Podemos sin embargo intentar mejorar un poco el código de la Egg virtual machine eliminando el `switch`que actualmente existe en `evaluate` en [eggvm.js](https://github.com/ULL-ESIT-PL-1617/egg/blob/master/lib/eggvm.js#L8-L32):

```js
function evaluate(expr, env) {
  switch(expr.type) {
    case 'value':
      return expr.value;

    case 'word':
      if (expr.name in env) {
        return env[expr.name];
      } else {
        throw new ReferenceError(`Undefined variable: ${expr.name}`);
      }

    case 'apply':
      if (expr.operator.type == 'word' && expr.operator.name in specialForms) {
        return specialForms[expr.operator.name](expr.args, env);
      }

      let op = evaluate(expr.operator, env);
      if (typeof op != "function") {
        throw new TypeError('Applying a non-function');
      }

      return op(...expr.args.map((arg) => evaluate(arg, env)));
  }
}
```

de manera que si en el futuro introducimos nuevos tipos de nodos en el AST la extensión para ese nuevo tipo de nodo (por ejemplo nodos `methodcall`) sea mas modular, añadiendo simplemente un módulo (`methodcall.js`) conteniendo una nueva clase (`MethodCall`) en la que se exporta el correspondiente método `evaluate` para ese tipo de nodos.

Modifique el AST para dar una solución OOP con clases: 

- una clase `Value`
- una clase `Word`
- una clase `Apply`
  
de manera que cada clase de objeto dispone de un método `evaluate`. 

```
[~/ull-pl1718-campus-virtual/tema3-analisis-sintactico/src/egg/crguezl-egg(private)]$ cat lib/ast.js
```
```js
  // The AST classes
  const {specialForms} = require("./registry.js");

  class  Value {
    constructor(token) {
      ...
    }
    evaluate() {
      ...
    }
  }

  class  Word {
    constructor(token) {
      ...
    }
    evaluate(env) {
      ...
    }
  }

  class  Apply {
    constructor(tree) {
      ...
    }
    evaluate(env) {
      ...
    }
  }

  module.exports = {Value, Word, Apply};
```

Por supuesto, ahora, cuando el parser detecta un nuevo nodo en su construcción  del árbol, crea un objeto de la clase correspondiente:

```js
  parseExpression() {
    let expr;
    if (this.lookahead.type === "STRING") {
      expr = new Value(this.lookahead);
    } else if (this.lookahead.type === "NUMBER") {
      ...
    } else if (this.lookahead.type === "WORD") {
      expr = new Word(this.lookahead);
    } else {
      throw ...
    }

    return this.parseApply(expr);
  }
```

Aisle estas clases en un fichero `lib/ast.js`. 
La función `evaluate` con el `switch` que estaba inicialmente en `lib/eggvm.js` desaparece en esta versión

**Una Solución**:

* [ULL-ESIT-PL-1920/TFA-davafons/lib/interp/ast.js](https://github.com/ULL-ESIT-PL-1920/TFA-davafons/blob/casiano/lib/interp/ast.js) 


## Actualice la máquina virtual `evm` para que pueda ejecutar los JSON

{% include json2ast.md %}

## Recursos

* [El lenguaje egg: repo en GitHub](https://github.com/ULL-ESIT-PL-1617/egg)
* [Repo interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg)
* [NodeJS Readline gist](https://gist.github.com/crguezl/430642e29a2b9293317320d0d1759387)
* En el repo [ULL-ESIT-PL-1617/interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg) se muestra como hacer un bucle REPL
* [XRegExp](http://xregexp.com/)
* El módulo [@ull-esit-pl/example2test](https://www.npmjs.com/package/@ull-esit-pl/example2test)


## Referencias

* [Eloquent JS: Chapter 11. Project: A Programming Language](http://eloquentjavascript.net/11_language.html)
* [Apuntes del curso 15/16: Code Smells/Código Hediondo](https://casianorodriguezleon.gitbooks.io/pl1516/content/apuntes/codesmell.html)
* [Apuntes del curso 16/17: Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
* [Apuntes del curso 15/16: Eliminando Switch Smell](https://casianorodriguezleon.gitbooks.io/pl1516/content/practicas/noswitchsmell.html)
* [Apuntes del curso 16/17: Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)
* [Apuntes del curso 16/17: Práctica: Evaluar Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaevaluastrategypattern.html)
* [Apuntes del curso 16/17: Práctica: Creación de Paquetes NPM y Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicamodulestrategypattern.html)
* [JSHint](http://jshint.com/)

## Recursos del Profesor

### Debugging Simple Examples

* Repo [ULL-ESIT-PL-1819/private-egg](https://github.com/ULL-ESIT-PL-1819/private-egg)
* Paths:

  ```
  [~/.../egg/crguezl-egg(json2ast)]$ pwd -P
  /Users/casiano/local/src/javascript/PLgrado/eloquentjsegg
  ```

* Remotes:

  ```
  [~/.../egg/crguezl-egg(json2ast)]$ git remote -v
  gist	git@gist.github.com:2ec9aeb4e3fa512eec26.git (fetch)

  pl1617	git@github.com:ULL-ESIT-PL-1617/egg.git (fetch)

  pl1819	git@github.com:ULL-ESIT-PL-1819/egg.git (fetch)

  private-egg	git@github.com:ULL-ESIT-PL-1718/egg.git (fetch)

  private-egg-1819	git@github.com:ULL-ESIT-PL-1819/private-egg.git (fetch)
  ```

* [Repo TFA-davafons](https://github.com/ULL-ESIT-PL-1920/TFA-davafons)
  * `/Volumes/2020/pl/pl1819/practicas/TFA-04-16-2020-03-22-00/davafons`
  * [json2AST.js](https://github.com/ULL-ESIT-PL-1920/TFA-davafons/blob/casiano/lib/parser/json2AST.js)
* [Repo p6-t3-egg-1-davafons](https://github.com/ULL-ESIT-PL-1920/p6-t3-egg-1-davafons)
  * `/Volumes/2020/pl/pl1819/practicas/p6-t3-egg-1-04-16-2020-03-13-25/davafons`
