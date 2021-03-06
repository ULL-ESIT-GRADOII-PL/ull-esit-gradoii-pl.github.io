---
title: "Análisis Sintactico Descendente Recursivo Predictivo, Análisis de ámbito e Interpretación de Código"
---

## Los Analizadores Descendentes Recursivos Predictivos

### Introducción

[Introducción al Análisis Sintáctico Predictivo Recursivo]({{site.baseurl}}/assets/temas/syntax-analysis/analisis-descendente-predictivo-recursivo/pdr-teoria)

### Un poco de Teoría

[Un poco de teoría sore el análisis LL(1)](ll1)


<!--
### Práctica Egg-1

* [Descripción de la Práctica]({{site.baseurl}}/practicas/egg-1)

### Otros ejemplos de lenguajes con analizadores Predictivos Descendentes Recursivos

* [TinyC](https://github.com/ULL-ESIT-PL-1718/tiny-c) Repo con un ejemplo de PDR en C
* [A very simple JS based Lisp interpreter](https://youtu.be/VqIic9tshfg) YouTube video by Andrea Griffini
* [How to implement a programming language in JavaScript](http://lisperator.net/pltut/) (Un Intérprete Lisp)

### Práctica p8-t3-pdr-infix2egg

* [Descripción de la Práctica p8-t3-pdr-infix2egg](practicas/p8-t3-pdr-infix2egg)
-->

<!--
##  Referencias

### Otros Apuntes del Profesor de cursos Anteriores

* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node20.html) (JavaScript/CoffeeScript)
*   <a href="http://crguezl.github.io/pl-html/node21.html" target="_blank">Conceptos Básicos para el Análisis Sintáctico</a>
    *   <a href="http://crguezl.github.io/pl-html/node21.html#SECTION04211000000000000000" target="_blank">Ejercicio</a>  

*   <a href="http://crguezl.github.io/pl-html/node22.html" target="_blank">Análisis Sintáctico Predictivo Recursivo</a>
    *   <a href="http://crguezl.github.io/pl-html/node22.html#SECTION04221000000000000000" target="_blank">Introducción</a>
        *   <a href="http://crguezl.github.io/pl-html/node22.html#SECTION04221010000000000000" target="_blank">Ejemplo</a>
        *   <a href="http://crguezl.github.io/pl-html/node22.html#SECTION04221020000000000000" target="_blank">Caracterización de las Gramáticas Analizables</a>
    *   <a href="http://crguezl.github.io/pl-html/node22.html#SECTION04222000000000000000" target="_blank">Ejercicio: Recorrido del árbol en un ADPR</a>  

*   <a href="http://crguezl.github.io/pl-html/node23.html" target="_blank">Recursión por la Izquierda</a>
*   <a href="http://crguezl.github.io/pl-html/node24.html" target="_blank">Esquemas de Traducción</a>
*   <a href="http://crguezl.github.io/pl-html/node25.html" target="_blank">Eliminación de la Recursión por la Izquierda en un Esquema de Traducción</a>
*   <a href="http://crguezl.github.io/pl-html/node26.html" target="_blank">Práctica: Analizador Descendente Predictivo Recursivo</a>
  * <a href="https://github.com/ULL-ESIT-PL-1819/parser-pdr-example) (Node.js, Web app con ExpressJS, CoffeeScript" target="_blank">Repo con un ADRP</a>
    - <a href="https://github.com/ULL-ESIT-PL-1819/parser-pdr-example/blob/master/views/main.coffee" target="_blank">Fichero main.coffee conteniendo un ADPR</a>

###  Apuntes dela Asignatura Procesadores de Lenguajes de la licenciatura de Ingeniería Informática

* [Procesamiento de Lenguajes en Perl](https://campusvirtual.ull.es/ocw/pluginfile.php/2304/mod_resource/content/0/perlexamples/node1.html) (Open Course Ware ULL)

### Apuntes del curso 16/17

* [Apuntes de Analizadores Descendentes Recursivos](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/parsing/recursivodescendente/) GitBook 1617

### Repositorios Relacionados en Ruby y CoffeeScript

* [Repo con un ADRP](https://github.com/crguezl/prdcalc) (Ruby, Web app con Sinatra, CoffeeScript y JS en el cliente) (2014)
  - [Fichero main.js conteniendo un ADPR](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
-->

<!--
### Referencias de Otros Autores

* [Apuntes de Top Down parsing de David Martins de Matos](https://www.l2f.inesc-id.pt/~david/w/pt/Top-Down_Parsing) del Departamento de Engenharia Informática do Instituto Superior Técnico de Lisboa.  Laboratório de Sistemas de Língua Falada do INESC ID Lisboa .
  - [Eliminating Left Recursion](https://www.l2f.inesc-id.pt/~david/w3/pt/index.php/Top-Down_Parsing?rdfrom=https%3A%2F%2Fwww.l2f.inesc-id.pt%2F~david%2Fwiki%2Fpt%2Findex.php%3Ftitle%3DTop-Down_Parsing%26redirect%3Dno#Step_3:_Eliminating_Left_Recursion)
* [Project: A Programming Language](http://eloquentjavascript.net/11_language.html)   
   - [Writing a Lisp interpreter in JavaScript - Mary Rose Cook](https://youtu.be/hqnTvuvXPCc) 
   - [GITHUB REPO FOR The VIDEO](https://github.com/maryrosecook/littlelisp)
-->

<!--
* Análisis Top-Down
   * RDP
   * [Project: A Programming Language](http://eloquentjavascript.net/11_language.html)   
     - [Writing a Lisp interpreter in JavaScript - Mary Rose Cook](https://youtu.be/hqnTvuvXPCc) 
     - [GITHUB REPO FOR The VIDEO](https://github.com/maryrosecook/littlelisp)
   * LL 
   * PEGs
    * GLL
* Análisis Bottom-Up
    * Earley
    * LR
        * LALR
            * [Parser and Lexer — How to Create a Compiler part 1/6 — Converting text into an Abstract Syntax Tree](https://youtu.be/eF9qWbuQLuw) YouTube Video. Bison. C++
        * GLR
-->
