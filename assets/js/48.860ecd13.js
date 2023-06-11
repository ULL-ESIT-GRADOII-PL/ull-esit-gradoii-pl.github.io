(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{561:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"curly-brackets-for-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curly-brackets-for-blocks"}},[t._v("#")]),t._v(" Curly Brackets for Blocks")]),t._v(" "),a("p",[t._v("Extend the Egg syntax so that "),a("code",[t._v("{ ... }")]),t._v(" is synonymous with a "),a("code",[t._v("do")]),t._v(" and produces exactly the same AST as a "),a("code",[t._v("do")]),t._v(".")]),t._v(" "),a("p",[t._v("A program like this:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("➜ prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lang git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("challenge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" cat examples"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("curly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("egg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("def")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("should once compiled lead to an execution like this:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("➜ prefix-lang git:(do-challenge) bin/eggc.js examples/curly-do.egg\n➜ prefix-lang git:(do-challenge) npx evm examples/curly-do.json\n-4\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("The idea is that the AST constructed for the "),a("code",[t._v("{ ... }")]),t._v(" code is exactly the same AST that is constructed for the "),a("code",[t._v("do( ... )")]),t._v(" code.")]),t._v(" "),a("p",[t._v("Remember that for consistency, we must make the keys no longer part of the legal characters of the WORD token definition.")])])}),[],!1,null,null,null);s.default=n.exports}}]);