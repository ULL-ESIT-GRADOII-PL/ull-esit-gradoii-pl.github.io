---
title: "Improving Egg: Brackets and Tests"
categories: ["practicas"] 
permalink: /practicas/egg-brackets-and-tests
---

## Brackets


Modifique la versión actual del lenguaje egg para que acepte como entrada este programa en [`examples/reto.egg`](https://github.com/ULL-ESIT-PL-1617/egg/blob/reto/examples/reto.egg):

  ```js
  do {
    def(sum,  ; function
      -> { nums, 
        do {
           := (i, 0), # Creates a local variable i and sets to 0
           := (s, 0), # Creates local var s and sets to 0
           while { <(i, length(nums)),
             do { =(s, +(s, <-(nums, i))),
                =(i, +(i, 1))
             }
           },
           s
        }
     )
   },
   print(+("sum(array(1, 2, 3)) := ", sum(array(1, 2, 3))))
  }
  ```

1. Las llaves `{}` pueden ser usados como sinónimos de 
los correspondientes paréntesis `()`.  No use los brackets/corchetes como sinónimo de los paréntesis. 
2. Además de eso se han introducido algunas alias para `define` (`:=`), `fun` (`->`), `set` (`=`), `element` (`<-`) etc. 
3. Se permiten comentarios de una línea (`# ...`) y multilínea `/* ... */`

## Tests

1. Introduzca una prueba en `test/test.js` que demuestre que una entrada como la de [`examples/scope-err.egg`](https://github.com/ULL-ESIT-PL-1617/egg/blob/reto/examples/scope-err.egg):

  ```lisp
  do( 
    set(x,9),
    print(x) # ReferenceError: Tried setting an undefined variable: x
  )
  ```

  produce una excepción.
  
  Estudie [la API de Should.js](https://shouldjs.github.io/#should-throws)

3. Introduzca una prueba en `test/test.js` que demuestre que una entrada como la de `examples/number-as-fun-err.egg`: 
  ```lisp
  4(5) ; Calling a number as a function
  ```
  produce una excepción

## Stubbing

Introduzca una prueba en `test/test.js` que demuestre que una entrada como la de `examples/one.egg`: 

  ```js
  do(
    define(x, 4),
    define(setx, fun(val, 
        set(x, val)
      )
    ),
    setx(50),
    print(x)
  )
  ```

produce una salida en `stdout` de 50. 

* Utilice la técnica de stubbing (test stubs are software components that simulate the behaviors of other software components (or modules) that a module undergoing tests depends on). Haga stubbing sobre `console.log` 
* Algo como esto le puede ayudar:

```js
describe("run", function() {
  let originalLog;
  let output = [];
  beforeEach(function() {
    originalLog = console.log;
    console.log = function (...args) { 
      originalLog(...args); 
      output.push(...args);
      return args; 
    };
  });
  // test code here
  afterEach(function() {
    console.log = originalLog;
    output = [];
  });

  it("testing one.egg with mocking of console.log", function() {
    let program = fs.readFileSync('examples/one.egg', 'utf8');
    let r = eggvm.run(program);
    output[0].should.eql(50);
  }

}
```

* [Mocha: Hooks](https://mochajs.org/#hooks)
* Si quiere saber mas sobre stubbing estudie la librería [sinon](http://sinonjs.org/)
* [Jest: Setup and Teardown](https://jestjs.io/docs/setup-teardown#one-time-setup)

## Módulo npm

Publique la nueva versión del Módulo en el GitHub Registry

## Recursos

<!--
* [Rama `reto` del repo ULL-ESIT-PL-1819/egg](https://github.com/ULL-ESIT-PL-1819/egg/tree/reto)
Ahora mismo Abril 2020 igual que la 1617. No pienso tocarla. No me atrevo a borrarla
-->

* [Rama `reto` del repo ULL-ESIT-PL-1617/egg](https://github.com/ULL-ESIT-PL-1617/egg/tree/reto)
* Aquí esta el [repo](https://github.com/ULL-ESIT-PL-1617/egg) con la versión pública de nuestra versión del lenguaje `egg`
* [Eloquent JS: Chapter 11. Project: A Programming Language](http://eloquentjavascript.net/11_language.html)
* [NodeJS Readline gist](https://gist.github.com/crguezl/430642e29a2b9293317320d0d1759387)
* En el repo [ULL-ESIT-PL-1617/interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg) se muestra como hacer un bucle REPL
* [XRegExp](http://xregexp.com/)
* Egg [as an npm module](https://www.npmjs.com/package/@crguezl/eloquentjsegg)

<!--
* [gist to check the npm module](https://gist.github.com/crguezl/8dfcaa01a0377dead374bc35c462c29d)
--->

## Notas para el profesor

Locally at branch `private2019` at `/Users/casiano/local/src/javascript/PLgrado/eloquentjsegg`:

* [Redefining parenthesis to use `{`and `}`](https://github.com/ULL-ESIT-PL-1819/private-egg/blob/private2019/lib/parse.js#L55-L65) branch `private2019` at `/Users/casiano/local/src/javascript/PLgrado/eloquentjsegg`
* [Aliasing 'fun'](https://github.com/ULL-ESIT-PL-1819/private-egg/blob/private2019/lib/eggvm.js#L91-L94)
* [Non declared variables test](https://github.com/ULL-ESIT-PL-1718/egg/blob/private/test/test-run.js#L56-L59) branch `private` at `/Users/casiano/local/src/javascript/PLgrado/eloquentjsegg` repo https://github.com/ULL-ESIT-PL-1718/egg
* [Stubbing console.log example](https://github.com/ULL-ESIT-PL-1819/private-egg/blob/private2019/test/test.js#L65-L134) branch `private2019` at `/Users/casiano/local/src/javascript/PLgrado/eloquentjsegg`