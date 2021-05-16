---
title: "Ideas para Futuras Prácticas"
categories: ["practicas"] 
permalink: /practicas/futuras-practicas
---

## AST Egg

Add location info in the egg AST (as espree)

Traspase la información de localización de los tokens (línea, offset, punto de comienzo, etc.) en los nodos del árbol AST. Lo ideal es que para cada nodo se disponga de donde empieza el código asociado al nodo y de donde termina. Por ejemplo un node `APPLY[Op: if]` tendría asociado 
un atributo `loc` con información sobre la línea y columna de comienzo del `if` y su final. Aproveche dicha información para mejorar los errores en tiempo de ejecución.

## Nearley.JS

pull requests: gh actions, bug mac-os installation, calculator

## Lexer-Generator

- Make it Nearley.js compatible

## Lab: Write a Lexer for Lua 

Using Moo or our own Lexer Generator

## Egg-0

- The lexer for Egg must be generated using the lexer generator they built before 

## Hello GitHub Actions

They must write a github workflow `egg.yml` that install their egg package `npm i @aluXX/egg` and runs their egg interpreter against an example program specified in the command line  

```
gh workflow run egg.yml -f program=two.egg
```

## Nearley.js + Yacc DSL language for Solving Ambiguities

More a PhD Thesis.

Add to Earley Algorithm the Yacc DSL language.
Study the benefits in performance

## Lua Compiler 

Use a subset of Lua for the language of the infix lab.


### luaparse

* Lua Predictive Descendant Parser: <https://github.com/ULL-ESIT-GRADOII-PL/luaparse>. Looks old and not maintained. Forked from <https://github.com/fstirlitz/luaparse>
* <https://gist.github.com/kach/11024526>
* <https://oxyc.github.io/luaparse/>
* <https://www.npmjs.com/package/lua-interpreter>

Works.

### Lua to JS translator

* <https://github.com/ULL-ESIT-GRADOII-PL/lua.js>

Solo en el browser.

Written in Jison?:
No está claro que funcione. Conflictos.

* [/Users/casianorodriguezleon/campus-virtual/2021/learning/lua/lua.js/src/lua.jison](https://github.com/ULL-ESIT-GRADOII-PL/lua.js/blob/master/src/lua.jison)

### Lua in Nearley.js

* Lua grammar inside the Examples folder in nearley.js `/Users/casianorodriguezleon/campus-virtual/2021/learning/nearley-learning`
* Learning Lua: https://www.lua.org/pil/1.html
* Lua manual <https://www.lua.org/manual/5.1/es/manual.html>

###  Lua compiler in C++ and Bison

* <https://github.com/johan-bjareholt/lua-compiler>

`/Users/casianorodriguezleon/campus-virtual/2021/learning/lua/lua-compiler`

Works.

## TFA gh

Siguen unas cuantas tareas e ideas que creo te pueden ayudar a mejorar tu comprensión de que va el TFG y que podría ayudar con el vídeo:

Aprende a usar estos paquetes npm:

https://www.npmjs.com/package/commander
https://www.npmjs.com/package/shelljs 

La idea inicial es que el paquete que publiques expanda gh  mediante alias y API para que se pueda usar así:

gh help orgs -- da la ayuda sobre el comando orgs
gh org cd ULL-ESIT-PL-2021 # pone como rog por defecto ULL-ESIT-PL-2021. Futuros comandos 
se referirán a esta org

gh org people # lista información sobre los miembros de la "organización por defecto"
gh org people --outside-collaborators  # lista información sobre los outside-collaborators
...
gh org packages # lista información sobre los paquetes publicados en la organización
...

el subcomando 

gh orgs 

debería permitir subcomandos anidados
(ver en commander la sección https://www.npmjs.com/package/commander#stand-alone-executable-subcommands). 

Por ejemplo un comando como:

gh org people --outside-collaborators 

"people" es un subcomando de "org". 
Al final se ejecutaría un programa con nombre "gh-org-people" al que se le pasarían los parámetros (--outside-collaborators).


Una idea clave del TFG es que existirá un comando como este:

gh org create superrepo practica-handling-events --match 'handling-events.*'

que crearía en la organización por defecto un repo con nombre "practica-handling-events"
y que tendría como submódulos todos los repos de la organización que casen con la expresión regular 'handling-events.*'




