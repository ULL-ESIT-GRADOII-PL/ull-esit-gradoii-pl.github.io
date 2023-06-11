(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{591:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v(t._s(t.$frontmatter.summary))]),t._v(" "),a("h2",{attrs:{id:"arith2js-next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arith2js-next-steps"}},[t._v("#")]),t._v(" arith2js: next steps")]),t._v(" "),a("ol",[a("li",[t._v("Unary minus.")])]),t._v(" "),a("ul",[a("li",[t._v("What is the right precedence?")]),t._v(" "),a("li",[t._v("The use of "),a("code",[t._v("%prec")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Factorial translation")]),t._v(" "),a("li",[t._v("The list of expressions")])]),t._v(" "),a("h3",{attrs:{id:"unary-minus-and-exponentiation-in-escodegen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unary-minus-and-exponentiation-in-escodegen"}},[t._v("#")]),t._v(" Unary minus and exponentiation in escodegen")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Exponentiation is ECMAScript 2016")]),t._v(" "),a("p",[t._v("New Features in ECMAScript 2016:  JavaScript Exponentiation (**)\nSee for instance: "),a("a",{attrs:{href:"https://www.w3schools.com/js/js_2016.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.w3schools.com/js/js_2016.asp"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://262.ecma-international.org/7.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://262.ecma-international.org/7.0/"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("...   This specification also includes support for "),a("strong",[t._v("a new exponentiation operator")]),t._v(" and adds a new method to Array.prototype called "),a("strong",[t._v("includes")])])]),t._v(" "),a("p",[t._v("Since escodegen does not support this Feature the combination of unary minus and exponentiation currently does not work.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("➜  arith2js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("parallel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("computing"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("parallel git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("essay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("miercoles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ node\nWelcome to Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js v18"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".help"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" more information"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v("  espree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'espree'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" espree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(-2)**2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gives an error since the default compiler is ecma 5")]),t._v("\nUncaught "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SyntaxError"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Unexpected token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ast3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" espree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(-2)**2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ecmaVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no errors. Right AST")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" escodegen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'escodegen'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" escodegen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// escodegen does not support this feature")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2 ** 2;'")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the code generated is wrong")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" gc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" escodegen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gc\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2 ** 2;'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the evaluation of the code produces errors")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Uncaught")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("SyntaxError")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Unary operator used immediately before exponentiation expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Parenthesis must be used to disambiguate operator precedence\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v(" does not accept "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" expression\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Uncaught")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("SyntaxError")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Unary operator used immediately before exponentiation expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Parenthesis must be used to disambiguate operator precedence\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  # "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" But "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" code works \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])])]),t._v(" "),a("p",[t._v("Therefore, the following  continuation of the former node session suggest the correct translation:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Use Math.pow")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ast5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" espree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Math.pow(-2,2)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" escodegen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Math.pow(-2, 2);'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"related-labs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-labs"}},[t._v("#")]),t._v(" Related labs")]),t._v(" "),a("p",[t._v("Prácticas en curso:")]),t._v(" "),a("p",[a("relatedLabs")],1),t._v(" "),a("h2",{attrs:{id:"temas-relacionados"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#temas-relacionados"}},[t._v("#")]),t._v(" Temas relacionados")]),t._v(" "),a("p",[a("relatedThemes")],1),t._v(" "),a("h2",{attrs:{id:"video"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),a("p",[a("youtube")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);