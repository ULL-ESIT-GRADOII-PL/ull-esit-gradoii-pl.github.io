(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{698:function(e,s,a){"use strict";a.r(s);var t=a(5),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-deploy-to-github-pages-a-vuepress-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deploy-to-github-pages-a-vuepress-report"}},[e._v("#")]),e._v(" How to Deploy to GitHub Pages a VuePress Report")]),e._v(" "),a("p",[e._v("Estando en la raíz de nuestra práctica emitimos el comando:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npx create-vuepress-site\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Respondemos a todas las preguntas con las respuestas por defecto")]),e._v(" "),a("p",[e._v("Instalamos:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd docs\nnpm install\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Editamos el fichero "),a("code",[e._v("docs/src/.vuepress/config.js")]),e._v(" y añadimos como valor de "),a("code",[e._v("base")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("➜  docs git"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" ✗ head "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("n "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("  src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("js\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" description "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'../../package'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("base")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/egg-parser-diego-perez-garcia-alu0101345918/report/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Sustituya "),a("code",[e._v("/egg-parser-diego-perez-garcia-alu0101345918")]),e._v(" por su correspondiente "),a("code",[e._v("assignmentName-team")])]),e._v(" "),a("p",[e._v("Nos vamos al "),a("code",[e._v("docs/package.json")]),e._v(" que "),a("code",[e._v("create-vuepress-site")]),e._v(" ha creado y modificamos el  script "),a("code",[e._v("build")]),e._v(" como sigue:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("➜  docs git"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("(master) ✗ jq '.scripts' package.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress dev src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress build src -d report"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Esto hará que los HTML generados por Vuepress queden en "),a("code",[e._v("docs/report")]),e._v(".")]),e._v(" "),a("p",[e._v("Ahora comprobemos en local nuestro despliegue. Estando en "),a("code",[e._v("docs/src")]),e._v(" escribimos:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm run dev\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("La url de despliegue que estamos viendo en el browser debería ser algo con el patrón")]),e._v(" "),a("p",[a("code",[e._v("http://localhost:8081/egg-parser-diego-perez-garcia-alu0101345918/report/")])]),e._v(" "),a("p",[e._v("esto es, debe seguir el patrón  "),a("code",[e._v("/nombre-del-repo/report/")])]),e._v(" "),a("p",[e._v("A continuación construimos el site:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm run build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Esto debería producir un directorio "),a("code",[e._v("docs/report")]),e._v(" con los ficheros generados:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("➜  docs git:(master) ✗ ls report\n404.html   assets     config     guide      index.html\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Añada "),a("code",[e._v("docs/report")]),e._v(" al control de versiones ("),a("code",[e._v("git add docs")]),e._v(", etc.).")]),e._v(" "),a("p",[e._v("Visite su repo en GitHub. Active las GitHub pages de su report desde la rama principal con directorio "),a("code",[e._v("docs")]),e._v(" como fuente y haga un "),a("code",[e._v("commit")]),e._v(" y un "),a("code",[e._v("push")]),e._v(".")]),e._v(" "),a("p",[e._v("Debería poder ver el informe en el subdirectorio "),a("code",[e._v("report")]),e._v(" de su despliegue.")]),e._v(" "),a("p",[e._v("Todo lo que escriba en "),a("code",[e._v("docs/src")]),e._v(" se verá reflejado en el informe.")]),e._v(" "),a("h2",{attrs:{id:"deploy-a-vuepress-site-to-cyclic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-vuepress-site-to-cyclic"}},[e._v("#")]),e._v(" Deploy a VuePress site to Cyclic")]),e._v(" "),a("p",[e._v("Chat GPT instructions to deploy a VuePress site to Cyclic.")]),e._v(" "),a("p",[e._v("You can follow these general steps:")]),e._v(" "),a("ol",[a("li",[e._v("Build your VuePress site locally by running the "),a("code",[e._v("vuepress build")]),e._v(" command in your terminal. This will generate a static version of your site in the "),a("code",[e._v("dist")]),e._v(" folder.")]),e._v(" "),a("li",[e._v("Log in to your Cyclic account and create a new project.")]),e._v(" "),a("li",[e._v("Connect your project to your Git repository where your VuePress site is hosted.")]),e._v(" "),a("li",[e._v("Set up a build command in Cyclic to build your site using the "),a("code",[e._v("vuepress build")]),e._v(" command. You can do this by adding a "),a("code",[e._v("cyclic.yml")]),e._v(" file to your repository with the following content:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("steps:\n  - name: build\n    command: vuepress build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("steps:\n  - name: build\n    command: vuepress build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Set up a deploy command in Cyclic to deploy your site to your chosen hosting service. For example, if you want to deploy to GitHub Pages, you can add the following to your "),a("code",[e._v("cyclic.yml")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('steps:\n  - name: build\n    command: vuepress build\n  - name: deploy\n    command: |\n      git config --global user.email "you@example.com"\n      git config --global user.name "Your Name"\n      cd dist\n      git init\n      git add -A\n      git commit -m "Deploy to GitHub Pages"\n      git push -f git@github.com:username/repo.git master:gh-pages\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('steps:\n  - name: build\n    command: vuepress build\n  - name: deploy\n    command: |\n      git config --global user.email "you@example.com"\n      git config --global user.name "Your Name"\n      cd dist\n      git init\n      git add -A\n      git commit -m "Deploy to GitHub Pages"\n      git push -f git@github.com:username/repo.git master:gh-pages\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("Replace "),a("code",[e._v("you@example.com")]),e._v(" and "),a("code",[e._v("Your Name")]),e._v(" with your own email address and name, and replace "),a("code",[e._v("username/repo.git")]),e._v(" with the URL of your own repository.")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Save your "),a("code",[e._v("cyclic.yml")]),e._v(" file and trigger a build on Cyclic. Your site should be built and deployed automatically.")])]),e._v(" "),a("p",[e._v("Note: These steps assume that you already have a basic understanding of VuePress and Git, and that you have already set up a Git repository for your VuePress site. If you need more information about any of these steps, please refer to the VuePress and Cyclic documentation.")])])}),[],!1,null,null,null);s.default=n.exports}}]);