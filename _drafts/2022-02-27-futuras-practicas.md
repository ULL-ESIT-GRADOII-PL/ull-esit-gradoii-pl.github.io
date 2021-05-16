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
