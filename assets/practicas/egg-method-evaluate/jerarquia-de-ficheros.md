---
title: "Posibles Organizaciones del Proyecto"
---

Las jerarquías de ficheros presentadas son orientativas.

Resultar conveniente aislar en clases y en módulos 
el analizador léxico, el sintáctico, el runner, etc.

## Ejemplo 1

```
➜  egg-4-alu0100966589 git:(master) ✗ tree -I 'node_modules|docs'
.
├── README.md
├── bin
│   └── egg.js
├── examples
│   ├── a.egg
│   ├── array.egg
│   ├── bad-function.egg
│   ├── curlyBrackets.egg
│   ├── differentParenthesis.egg
│   ├── error.egg
│   ├── greater-x-5.egg
│   ├── if.egg
│   ├── main.js
│   ├── main2.js
│   ├── map.egg
│   ├── obj.egg
│   ├── objects.egg
│   ├── one-err-2.egg
│   ├── one-err.egg
│   ├── one.egg
│   ├── require.egg
│   ├── rest.egg
│   ├── scope.egg
│   ├── spread.egg
│   ├── string.egg
│   ├── stringRegexp.egg
│   ├── sum.egg
│   └── two.egg
├── gulpfile.js
├── lib
│   ├── ast_nodes.js
│   ├── egg_repl.js
│   ├── eggvm.js
│   ├── lexer
│   │   └── token
│   │       ├── Token.js
│   │       ├── token_info.js
│   │       └── token_types.js
│   ├── parse.js
│   ├── public.js
│   ├── repl_plugins.js
│   ├── specialForms.js
│   ├── topEnv.js
│   └── utils
│       └── getSetElement.js
├── package-lock.json
├── package.json
├── plugins
│   ├── loops.js
│   ├── object.js
│   └── require.js
└── test
    ├── eggvm.test.js
    ├── lexer.test.js
    ├── program.test.js
    └── test.js

8 directories, 48 files
```


### Scripts

Scripts:

```
➜  egg-4-alu0100966589 git:(master) ✗ npm run
Lifecycle scripts included in @alu0100966589/egg:
  test
    mocha

available via `npm run-script`:
  watch
    mocha --watch
  compile
    ./bin/egg.js -c
  interpret
    ./bin/egg.js -i
  run
    ./bin/egg.js -r
  repl
    ./bin/egg.js
  compile-example
    ./bin/egg.js -c examples/a.egg
  interpret-example
    ./bin/egg.js -i examples/a.egg.evm
  run-example
    ./bin/egg.js -r examples/a.egg
```

Ejemplo de uso. Dados los ficheros:

```
➜  egg-4-alu0100966589 git:(master) ✗ cat examples/require.egg 
do(
    def(str, require("examples/a.egg")),
    print(str)
)

➜  egg-4-alu0100966589 git:(master) ✗ cat examples/a.egg      
print("\thello\nworld\u2764")
```

Podemos ejecutarlo de esta forma:

```
➜  egg-4-alu0100966589 git:(master) ✗ bin/egg.js -p ../plugins/require.js -r examples/require.egg 
        hello
world❤
        hello
world❤
```

## Ejemplo 2

Este es un ejemplo de como organizar su jerarquía de ficheros de una forma escalable:

```
[.../TFA-04-16-2020-03-22-00/davafons(master)]$ tree -I 'node_modules|docs'
.
├── LICENSE
├── README.md   // Documentación del paquete y del proyecto
├── bin
│   └── egg.js  // usando opciones en línea de comandos: -c compilar, -i interpretar, etc
├── esdoc.json  // documentación: vea https://esdoc.org/
├── docs
│   └── ...     // Documentación generada. Configurar GitHub Pages 
├── examples    // Ejemplos: son reutilizados en las pruebas
│   ├── array-index.egg
|   ├── ... 
│   ├── trycatch.egg.evm
│   ├── two.egg
│   └── two.egg.evm
├── index.js // Entry point: exporta todo lo que necesita el ejecutable
├── lib
│   ├── interp
│   │   ├── arithm.js      // Extensiones aritméticas: ++, --, +=, ...
│   │   ├── ast.js         // Las clases del AST: Value, Word, Apply, Regex, ...
│   │   ├── eggvm.js       // Clase con los runners: runFromFile, runFromEVM, run, ...
│   │   ├── environment.js // main del environment. Exporta  SpecialForms y TopEnv. Usa registry
│   │   ├── exceptions.js  // Extiende Egg con try, throw, ...
│   │   ├── index.js       // main: exporta todas las clases del intérprete: Eggvm, Value, Word, Apply, Regex, TopEnv, SpecialForms, ...
│   │   ├── monkey-patching.js // Manipulacion de las clases de JS (Object, Array, etc.)
│   │   ├── registry.js   // Exporta los mapas para exensión SpecialForms,  TopEnv, ...  
│   │   └── require.js    // Soporte para módulos en Egg
│   ├── parser
│   │   ├── index.js      // main de Parser: exporta todas las clases públicas: Eggvm,Value, Word, Apply, Regex, TopEnv, SpecialForms ...
│   │   ├── json2AST.js   //  Desde el JSON construimos el AST con clases
│   │   ├── lexer.js      // Exporta Clase Analizador Léxico. Usa tokenRe
│   │   ├── optimizer.js  // Optimizaciones (constant folding)
│   │   ├── parse.js      // Análisis Sintáctico
│   │   ├── semantic.js   // Análisis Semántico
│   │   └── tokenRegex.js //Exporta la clase para los objetos Token 
│   ├── repl              // soporte para Repeat Evaluate Print Loop
│   │   ├── colors.js     // Colorines usando ansi-colors 
│   │   ├── extensions.js // Extensiones: help() info() clear() ...
│   │   └── repl.js       // El bucle
│   └── utils.js // Helpers comunes
├── package-lock.json  // bajo control de versiones
├── package.json // configurado para publicar como módulo en GitHub registry
└── test
    ├── examples-test.js // Ejecución de ejemplos contra salida esperada
    ├── ...   
    └── tokenRegex-test.js 
```

### Scripts

Es conveniente tener algunos scripts preparados en el `package.json` 
como:

```
.../TFA-04-16-2020-03-22-00/davafons(master)]$ npm run
Lifecycle scripts included in eggtended-js:
  test
    nyc mocha

available via `npm run-script`:
  coverage
    nyc report --reporter=text-lcov | coveralls
  docs
    esdoc -c esdoc.json
```

- `coverage`: tests y cubrimiento usando [Istanbul command line interface](https://github.com/istanbuljs/nyc)
- `docs`: [esdoc usage](https://esdoc.org/manual/usage.html)

## Ejemplo 3

```
➜  cristo-daniel-luciana-tfa-1920-egg git:(master) ✗ tree -I 'docs|node_modules'
.
├── README.md
├── bin
│   ├── egg.js
│   ├── eggRun.js
│   ├── eggc.js
│   └── evm.js
├── examples
│   ├── arithm.egg
│   ├── array-properties.egg
│   ├── calling-function-err.egg
│   ├── compile-to-js # Traducción a JavaScript. Comprobaciones
│   │   ├── casiano-spread.egg
│   │   ├── casiano-spread.egg.js
│   │   ├── empty-funcion.egg
│   │   ├── empty-funcion.egg.js
│   │   ├── for-each.egg
│   │   ├── for-each.egg.js
│   │   ├── for.egg
│   │   ├── for.egg.js
│   │   ├── fun-default-value.egg
│   │   ├── fun-default-value.egg.js
│   │   ├── fun.egg
│   │   ├── fun.egg.js
│   │   ├── if.egg
│   │   ├── if.egg.js
│   │   ├── map.egg
│   │   ├── map.egg.js
│   │   ├── object.egg
│   │   ├── object.egg.js
│   │   ├── prueba.egg
│   │   ├── prueba.egg.js
│   │   ├── regex-2.egg
│   │   ├── regex-2.egg.js
│   │   ├── while.egg
│   │   ├── while.egg.evm
│   │   └── while.egg.js
│   ├── constant-folding # Plegado de Constantes. Transformación  Árbol
│   │   ├── advanced-folding.egg
│   │   ├── advanced-folding.egg.evm
│   │   ├── basic-folding.egg
│   │   └── basic-folding.egg.evm
│   ├── constant-propagation
│   │   ├── basic-propagation.egg
│   │   └── basic-propagation.egg.evm
│   ├── define-err.egg
│   ├── define.egg
│   ├── if-example-err.egg
│   ├── if-example.egg
│   ├── looping-invariance
│   │   ├── function-invariance.egg
│   │   ├── function-invariance.egg.evm
│   │   ├── while-invariance.egg
│   │   └── while-invariance.egg.evm
│   ├── map-js-chain.egg
│   ├── method-concatenation.egg
│   ├── method.egg
│   ├── method.egg.js
│   ├── method2.egg
│   ├── method3.egg
│   ├── multi-sub-array.egg
│   ├── number-as-fun-err.egg
│   ├── one.egg
│   ├── one.egg.evm
│   ├── probando.egg
│   ├── require
│   │   ├── client.egg
│   │   ├── client.egg.expected
│   │   └── module.egg
│   ├── reto.egg
│   ├── reto.egg.js
│   ├── scope-err.egg
│   ├── scope.egg
│   ├── set-multiarray.egg
│   ├── setting-undefined-err.egg
│   ├── string-apply.egg
│   ├── string-apply.egg.evm
│   ├── two.egg
│   ├── two.egg.evm
│   ├── while-err.egg
│   ├── while.egg
│   └── while.egg.evm
├── lib
│   ├── addon
│   │   ├── constant-folding.js
│   │   ├── looping-invariance.js
│   │   ├── require.js
│   │   └── scope-analysis.js
│   ├── compile-to-javascript
│   │   └── eggtojscompiler.js
│   ├── interp
│   │   ├── arithm.js
│   │   ├── ast.js
│   │   ├── eggvm.js
│   │   ├── monkey-patching.js
│   │   └── registry.js
│   ├── parser
│   │   ├── json2AST.js
│   │   └── parse.js
│   ├── repl
│   │   ├── colors.js
│   │   ├── egg-repl.js
│   │   └── extensions.js
│   └── utils.js
├── package-lock.json
├── package.json
└── test
    ├── examples
    │   ├── array-index.egg
    │   ├── array-index.egg.expected
    │   ├── array-neg.egg
    │   ├── array-neg.egg.expected
    │   ├── array-properties.egg
    │   ├── array-properties.egg.expected
    │   ├── array-set-index.egg
    │   ├── array-set-index.egg.expected
    │   ├── calling-function-err.egg
    │   ├── class
    │   │   ├── class-1-err.egg
    │   │   ├── class-1.egg
    │   │   ├── class-1.egg.evm
    │   │   ├── class-1.egg.expected
    │   │   ├── class-cons-err.egg
    │   │   ├── class-multiple-method.egg
    │   │   ├── class-multiple-method.egg.expected
    │   │   ├── method-invariance.egg
    │   │   ├── method-invariance.egg.evm
    │   │   ├── method-invariance.egg.expected
    │   │   ├── multiple-class-object.egg
    │   │   ├── multiple-class-object.egg.expected
    │   │   ├── multiple-objects.egg
    │   │   └── multiple-objects.egg.expected
    │   ├── compile-to-js
    │   │   ├── casiano-spread.egg
    │   │   ├── casiano-spread.egg.js
    │   │   ├── empty-funcion.egg
    │   │   ├── empty-funcion.egg.js
    │   │   ├── for-each.egg
    │   │   ├── for-each.egg.js
    │   │   ├── for.egg
    │   │   ├── for.egg.js
    │   │   ├── fun-default-value.egg
    │   │   ├── fun-default-value.egg.js
    │   │   ├── fun.egg
    │   │   ├── fun.egg.js
    │   │   ├── if.egg
    │   │   ├── if.egg.js
    │   │   ├── map.egg
    │   │   ├── map.egg.js
    │   │   ├── method-concatenation.egg
    │   │   ├── method-concatenation.egg.js
    │   │   ├── object.egg
    │   │   ├── object.egg.js
    │   │   ├── prueba.egg
    │   │   ├── prueba.egg.js
    │   │   ├── regex-2.egg
    │   │   ├── regex-2.egg.js
    │   │   ├── while.egg
    │   │   └── while.egg.js
    │   ├── const-definition-err.egg
    │   ├── constant-folding
    │   │   ├── advanced-folding.egg
    │   │   ├── advanced-folding.egg.evm
    │   │   ├── basic-folding.egg
    │   │   └── basic-folding.egg.evm
    │   ├── constant-propagation
    │   │   ├── advanced-propagation.egg
    │   │   ├── advanced-propagation.egg.evm
    │   │   ├── advanced-scope-error.egg
    │   │   ├── arithmetic-constant-folding.egg
    │   │   ├── arithmetic-constant-folding.egg.evm
    │   │   ├── basic-propagation.egg
    │   │   ├── basic-propagation.egg.evm
    │   │   ├── function-scope-error.egg
    │   │   └── scope-error.egg
    │   ├── child # Herencia a la JS
    │   │   ├── child-casiano.egg
    │   │   ├── child-casiano.egg.evm
    │   │   ├── child-casiano.egg.expected
    │   │   ├── child-modify.egg
    │   │   ├── child-modify.egg.expected
    │   │   ├── child-no-object.egg
    │   │   ├── multiple-child.egg
    │   │   └── multiple-child.egg.expected
    │   ├── default-values # Valores por defecto en los parámetros de una función
    │   │   ├── fun-default-error.egg
    │   │   ├── fun-default-value.egg
    │   │   ├── fun-default-value.egg.expected
    │   │   └── more-arguments.egg
    │   ├── define.egg
    │   ├── define.egg.expected
    │   ├── dot-num.egg
    │   ├── dot-num.egg.expected
    │   ├── dot-obj-2.egg
    │   ├── dot-obj-2.egg.expected
    │   ├── dot.egg
    │   ├── dot.egg.evm
    │   ├── dot.egg.expected
    │   ├── for.egg
    │   ├── for.egg.evm
    │   ├── for.egg.expected
    │   ├── foreach.egg
    │   ├── foreach.egg.expected
    │   ├── if-example-err.egg
    │   ├── if-example.egg
    │   ├── if-example.egg.expected
    │   ├── looping-invariance
    │   │   ├── 2-for-invariance.egg
    │   │   ├── 2-for-invariance.egg.evm
    │   │   ├── 2-whiles-invariance.egg
    │   │   ├── 2-whiles-invariance.egg.evm
    │   │   ├── 2-whiles-invariance.egg.expected
    │   │   ├── alone-function.egg
    │   │   ├── alone-function.egg.evm
    │   │   ├── for-invariance.egg
    │   │   ├── for-invariance.egg.evm
    │   │   ├── function-invariance.egg
    │   │   ├── function-invariance.egg.evm
    │   │   ├── if-invariance.egg
    │   │   ├── if-invariance.egg.evm
    │   │   ├── if-invariance.egg.expected
    │   │   ├── test.egg
    │   │   ├── test.egg.evm
    │   │   ├── while-invariance-2.egg
    │   │   ├── while-invariance-2.egg.evm
    │   │   ├── while-invariance.egg
    │   │   └── while-invariance.egg.evm
    │   ├── map-colon.egg
    │   ├── map-colon.egg.expected
    │   ├── map-js-chain.egg
    │   ├── map-js-chain.egg.expected
    │   ├── map-sub.egg
    │   ├── map-sub.egg.expected
    │   ├── map.egg
    │   ├── map.egg.evm
    │   ├── map.egg.expected
    │   ├── method-concatenation.egg
    │   ├── method-concatenation.egg.expected
    │   ├── method.egg
    │   ├── method.egg.expected
    │   ├── method2.egg
    │   ├── method2.egg.expected
    │   ├── method3.egg
    │   ├── method3.egg.expected
    │   ├── multi-sub-array.egg
    │   ├── multi-sub-array.egg.expected
    │   ├── objects.egg
    │   ├── objects.egg.evm
    │   ├── objects.egg.expected
    │   ├── one.egg
    │   ├── one.egg.expected
    │   ├── regex-2.egg
    │   ├── regex-2.egg.evm
    │   ├── regex-2.egg.expected
    │   ├── regex-simple.egg
    │   ├── regex-simple.egg.expected
    │   ├── require
    │   │   ├── client.egg
    │   │   ├── client.egg.expected
    │   │   └── module.egg
    │   ├── reto.egg
    │   ├── reto.egg.expected
    │   ├── scope-err.egg
    │   ├── scope-err.egg.expected
    │   ├── scope.egg
    │   ├── scope.egg.expected
    │   ├── set-error.egg
    │   ├── set-multiarray.egg
    │   ├── set-multiarray.egg.expected
    │   ├── setting-undefined-err.egg
    │   ├── spread-operator # Operator ... en Egg
    │   │   ├── casiano-spread.egg
    │   │   ├── casiano-spread.egg.evm
    │   │   ├── casiano-spread.egg.expected
    │   │   ├── default-spread.egg
    │   │   ├── default-spread.egg.expected
    │   │   ├── function-spread.egg
    │   │   ├── function-spread.egg.expected
    │   │   ├── spread-operator.egg
    │   │   └── spread-operator.egg.expected
    │   ├── string-apply.egg
    │   ├── string-apply.egg.evm
    │   ├── string-apply.egg.expected
    │   ├── while.egg
    │   └── while.egg.expected
    ├── extra-test.js
    ├── scopes.js
    └── test.js

24 directories, 263 files
```

### Opciones del ejecutable

```
➜  cristo-daniel-luciana-tfa-1920-egg git:(master) ✗ node bin/eggRun.js --help
Options:
  --version           Muestra número de versión                       [booleano]
  --compile, -c       Input egg File to compile           [cadena de caracteres]
  --run, -f           Run egg file from file              [cadena de caracteres]
  --repl, -r          executes egg repl                               [booleano]
  --evm, -e           Runs an egg program from its evm file
                                                          [cadena de caracteres]
  --addons, -a        Lets you use different addons, like require        [tabla]
  --optimization, -o  Optimizes the ast with constants folding        [booleano]
  --javascript, -j    Compiles to a new javascript file   [cadena de caracteres]
  --help, -h          Muestra ayuda                                   [booleano]
  ```

  ### Ejemplos de Ejecución

Dada el programa egg:

  ```
  ➜  cristo-daniel-luciana-tfa-1920-egg git:(master) ✗ cat examples/constant-folding/advanced-folding.egg 
do(
  print(*(+(4, 6), -(/(8, 4), 1)))
)%  
```
al compilarlo `-c`con la opción de optimización activada `-o`:

```
  ➜  cristo-daniel-luciana-tfa-1920-egg git:(master) ✗ node bin/eggRun.js -o -c examples/constant-folding/advanced-folding.egg
```

Nos produce como salida este AST:

```
➜  cristo-daniel-luciana-tfa-1920-egg git:(master) ✗ cat examples/constant-folding/advanced-folding.egg.evm 
{
  "_type": "apply",
  "_operator": {
    "_type": "word",
    "_value": "do"
  },
  "_args": [
    {
      "_type": "apply",
      "_operator": {
        "_type": "word",
        "_value": "print"
      },
      "_args": [
        {
          "_type": "value",
          "_value": 10
        }
      ]
    }
  ]
}%             
```