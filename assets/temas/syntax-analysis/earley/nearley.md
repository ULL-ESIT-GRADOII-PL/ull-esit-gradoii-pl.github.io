---
layout: tema
title: Parsing with Nearley.js
clases: [ '2021/05/10', '2021/05/05', '2021/05/04', '2021/05/03', '2021/04/28' ]
---


## Introduction to Nearley.js

* [Nearley.JS Home Page](https://nearley.js.org/)
* [Nearley.JS GitHub repo](https://github.com/kach/nearley) is a JS parser generator using the Early algorithm
  * [Nearley.js Grammar in Nearley.js](https://github.com/kach/nearley/blob/master/lib/nearley-language-bootstrapped.ne)
* [Repo ULL-ESIT-PL/learning-nearley](https://github.com/ULL-ESIT-PL/learning-nearley/)

## Tokenizers for nearley.js

* [Tokenizers for nearley.js](https://nearley.js.org/docs/tokenizers)
* [moo](https://www.npmjs.com/package/moo/)
* [nearley-moo](https://github.com/nanaian/nearley-moo)

## Toby Ho Course on How to Make a Parser with Nearley.JS

### Part One

In this drive by code session we’ll show you what a context-free grammar is and how to use it and Nearley to build parsers. JSON is used as the example language we’ll build the parser for.

{% include video provider="youtube" id="51XwG1W2ysU" %}

### Part Two

In this drive by code session we continue making a JSON parser. After having make a working parser for a subset of the functionality in JSON, we’ll introduce the ability to embed JavaScript code in the grammar to customize the result of a parse. Again, Waikit wrote the code, and I’ll replay them and explain what he did. Enjoy!

{% include video provider="youtube" id="BpAcf4X5rco" %}

### Part Three

In this drive by code session we’ll demonstrate how to handle whitespaces in a grammar using Nearley.js. The convention used in the video is based on the recommendations by Kartik Chandra - the creator of Nearley.js. As usual, Waikit drove the code before hand, and I’ll replay his code session and explain what he did.

### Part Four

In this episode we’ll demonstrate how to parse a string literal in JSON properly, continuing our series on building parsers using Nearley.js.

{% include video provider="youtube" id="a2mZTBI1ZxU" %}

### Part Five

Continuing in the series on making parsers, this time, we build a calculator that can add, subtract, multiply and divide. In particular, we tackle the issue of operator precedence.

{% include video provider="youtube" id="fsXp3Oh7JUU" %}

## Performance of NearleyJS

The study shows a case in which NearleyJS is 200 times solwer than a Recursive Descendant Functional parser :disappointed:.

{% include video id="njWmVljrhEE" provider="youtube" %}

## References

* [fun-lang in Nearley.js](git@github.com:airportyh/fun-lang.git) GitHub Repo by Toby Ho
  * [scripts](https://github.com/airportyh/fun-lang/tree/master/scripts) folder: How to run the compiler
  * Toby Ho has published a more advanced version of the language as a npm package:  [play-lang](https://www.npmjs.com/package/play-lang)
* [Parsing in JavaScript: Tools and Libraries](https://tomassetti.me/parsing-in-javascript/)
* Where:

  ```
  /Users/casianorodriguezleon/campus-virtual/2021/learning/nearley-learning
  ```
