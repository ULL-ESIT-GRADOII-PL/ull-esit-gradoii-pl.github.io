---
title: "Egg. Accesing JS Methods"
categories: ["practicas"] 
permalink: "/practicas/egg-js-methods"
---

## Accediendo a los Métodos JS de los Objetos 

Modifique la gramática de Egg para que las `String` y los `Number` puedan acceder a los métodos de los objetos con una sintáxis similar a la de las  *applications* pero usando corchetes:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat examples/string-apply.egg
```
```js
do {
  print("hello"["length"]),
  print(4["toFixed"](2))
}
```

Que cuando se ejecuta debería dar una salida como esta:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ bin/egg.js examples/string-apply.egg
5
4.00
```

La idea es que dado un `String` o un `Number` o en general cualquier objeto `x`, quizá  resultante de alguna llamada `=(x, f(a))` podremos acceder a sus propiedades y métodos mediante la notación `x[e]`  donde 
* `e` es una expression que se evalúa a  una string `p` que es el nombre de una propiedad JS del objeto y 
* `x[e]` se evalúa al valor `x.p` de esa propiedad de `x`.

Se sigue que, en particular, si el objeto JavaScript  `obj` resultado de la llamada a una función tiene una propiedad con nombre `"meth"` que es el nombre de un método, este  podrá ser llamado usando la sintáxis: 

```js 
  obj["meth"](args)
```

Por ejemplo:

```
.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat examples/array-properties.egg
```
```js
do(
  def(x, array(1, 4, array(5, 3))),
  print(x[0]),   # 1
  print(x[2]),   # [5, 3]
  print(x[2][1]) # 3
)
```

Este es el resultado de la ejecución:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ bin/egg.js  examples/array-properties.egg
1
[ 5, 3 ]
3
```

Este ejemplo funciona en parte porque en JS los índices son propiedades del array.

Otro ejemplo:

```
.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat examples/method.egg
```
```js
print(array(1,4,5)["join"]("-"))
```

que cuando se ejecuta da:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ bin/egg.js examples/method.egg 
1-4-5
```

Otro ejemplo:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat examples/method2.egg
```
```js
do(
    def(x, "hello"),
    print(x["toUpperCase"]())
)
```

que cuando se ejecuta da:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ bin/egg.js examples/method2.egg 
HELLO
```

Se debería poder concatenar las llamadas de métodos:

```
.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat examples/method3.egg
```
```js
do{
  def(x, array("a", "b", "c")),
  print(x["join"]("-")["toUpperCase"]())
}
```

que cuando se ejecuta da:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ bin/egg.js examples/method3.egg 
A-B-C
```

la concatenación puede ser larga

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat examples/method-concatenation.egg
```  
```js
do(
  print(array(1,4,5)["join"]("-")["substring"](0,2)["concat"]("hello egg"))
)
```
cuya ejecución resulta en:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ bin/egg.js examples/method-concatenation.egg
1-hello egg
```

Esto nos permite disponer del `map`de JS para los arrays:

```
.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat examples/map-js-chain.egg 
```
```js
do(
    define(x, array(1,2,3,4)),
    define(inc, fun(x,i,g, +(x,1))),
    print(x["map"](inc))
)
```

cuya ejecución resulta en:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ bin/egg.js examples/map-js-chain.egg 
[ 2, 3, 4, 5 ]
```

## Monkey Patching Objetos JS

Utilizando las extensiones anteriores y haciendo Monkey patching de las clases principales de JS, podemos añadir propiedades y métodos a los objetos JavaScript, de manera que programas como este funcionen:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(master)]$ cat examples/multi-sub-array.egg
```
```ruby
do{
  define(x, arr(1, arr(3, 4))),
  print(x["sub"](1, 1)),
  print(element(x, 1, 1))
}
```
```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(master)]$ bin/egg.js examples/multi-sub-array.egg
4
4
```

Aquí se ha extendido la clase JS Object con un método `sub` que permite la indexación del objeto.

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(master)]$ cat examples/set-multiarray.egg
```
```ruby

do{
  :=(w, array(array(1,2), array(3,4))),
  w["="](5, 0, 1),
  print(w)
}
```

En este ejemplo hemos añadido el método `=` a la clase JS `Object` que asigna el primer argumento al elemento del array indexado por los subsiguientes argumentos. 


Cuando se ejecuta da:

```
[.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(master)]$ bin/egg.js examples/set-multiarray.egg
[ [ 1, 5 ], [ 3, 4 ] ]
```

**A monkey patch** is a way for a program to extend or modify supporting system software locally (affecting only the running instance of the program).

```js
.../p6-t3-egg-1-04-16-2020-03-13-25/davafons(casiano)]$ cat lib/monkey-patching.js //  SUB
Object.prototype["="] = function(value, ...indices) {
  ...
};

...
```

## Gramática y Descripción de los AST

En su informe describa formalmente 

1. La gramática resultante de incorporar la llamada con corchetes, 
2. Las modificaciones introducidas en el AST y 
3. Comente los cambios realizados en el código (análisis sintáctico, evaluación del árbol)

## Recursos del Profesor

### Debugging Simple Examples

{% include debugging-simple-egg-examples.md %}
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
