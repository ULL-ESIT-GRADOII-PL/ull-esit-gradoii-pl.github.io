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

### moo: Simple Example

```js
const moo = require('moo')
const inspect = require('util').inspect;
const ins = (x) => console.log(inspect(x, {depth: null}));

let lexer = moo.compile({
    WS: /[ \t]+/,
    comment: /\/\/.*?$/,
    number: /0|[1-9][0-9]*/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    lparen: '(',
    rparen: ')',
    keyword: ['while', 'if', 'else', 'moo', 'cow'],
    NL: { match: /\n/, lineBreaks: true },
});

lexer.reset(
//123456789AB
 'while (10) cow\nmoo'
)

console.log(lexer.next()) // -> { type: 'keyword', value: 'while' }
console.log(lexer.next()) // -> { type: 'WS', value: ' ' }
console.log(lexer.next()) // -> { type: 'lparen', value: '(' }
console.log(lexer.next()) // -> { type: 'number', value: '10' }
console.log(lexer.next()) // )
console.log(lexer.next()) // cows
console.log(lexer.next()) // "\n"
console.log(lexer.next()) // moo
console.log('result='+ins(lexer.next())) // undefined
console.log('result='+ins(lexer.next())) // undefined
console.log('result='+ins(lexer.next())) // undefined
```

### Skipping White Spaces in Moo

A moo lexer object is an [Generator](https://javascript.info/generators), you can use `filter()` and `map()` which are built-in to JavaScript. 

See moo issue: <https://github.com/no-context/moo/issues/156>

```js 
const moo = require('moo')
const lex = moo.compile({
  // If one rule is /u then all must be
  ws: { match: /\p{White_Space}+/u, lineBreaks: true },
   word: /\p{XID_Start}\p{XID_Continue}*/u,
  op: moo.fallback,
});
```

`ID_Start` characters are derived from the Unicode General_Category of
uppercase letters, lowercase letters, titlecase letters, modifier letters, other letters,
letter numbers, plus Other_ID_Start, minus Pattern_Syntax and Pattern_White_Space
code points.

In set notation:

```js
/[\p{L}\p{Nl}\p{Other_ID_Start}-\p{Pattern_Syntax}-\p{Pattern_White_Space}]/u
```

ID_Continue characters include ID_Start characters, plus characters having the 
Unicode General_Category of nonspacing marks, spacing combining marks, 
decimal number, connector punctuation, plus Other_ID_Continue , 
minus Pattern_Syntax and Pattern_White_Space code points.

In set notation:

```js
/[\p{ID_Start}\p{Mn}\p{Mc}\p{Nd}\p{Pc}\p{Other_ID_Continue}-\p{Pattern_Syntax}-\p{Pattern_White_Space}]/
```

See <https://unicode.org/reports/tr31/>


The expression `moo.fallback` matches anything else. 
I believe is similar to: 
```js
{ match: /(?:.|\n)/u, lineBreaks: true}  
```

```js
console.log(moo.fallback);

const result = [...lex.reset('while ( a < 3 ) { a += 1; }')];
//console.log(result);
/*
[
  {
    type: 'word',
    value: 'while',
    text: 'while',
    toString: [Function: tokenToString],
    offset: 0,
    lineBreaks: 0,
    line: 1,
    col: 1
  },
  {
    type: 'ws',
    value: ' ',
    text: ' ',
    toString: [Function: tokenToString],
    offset: 5,
    lineBreaks: 0,
    line: 1,
    col: 6
  },
  ... etc.
]
*/

let filtered = result.filter(t => t.type !== 'ws');

console.log(filtered.map(function (t) { return { type: t.type, value: t.value } }) );

/* No longer white spaces: 
[
  { type: 'word', value: 'while' }, { type: 'op', value: '(' },
  { type: 'word', value: 'a' }, { type: 'op', value: '<' },
  { type: 'op', value: '3' }, { type: 'op', value: ')' },
  { type: 'op', value: '{' }, { type: 'word', value: 'a' },
  { type: 'op', value: '+=' }, { type: 'op', value: '1;' },
  { type: 'op', value: '}' }
]
*/
```

### References

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

* [fun-lang in Nearley.js](https://github.com/airportyh/fun-lang) GitHub Repo by Toby Ho
  * [scripts](https://github.com/airportyh/fun-lang/tree/master/scripts) folder: How to run the compiler
  * Toby Ho has published a more advanced version of the language as a npm package:  [play-lang](https://www.npmjs.com/package/play-lang)
* [Parsing in JavaScript: Tools and Libraries](https://tomassetti.me/parsing-in-javascript/)
* Where:

  ```
  /Users/casianorodriguezleon/campus-virtual/2021/learning/nearley-learning
  ```
