(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{394:function(t,s,e){},407:function(t,s,e){"use strict";e(394)},453:function(t,s,e){"use strict";e.r(s);e(21),e(52);var a=e(432),r=e.n(a),i={props:{username:{type:String,required:!0}},computed:{githubYear:function(){var t=this.user.created_at;return t?t.replace(/^(\d+).*/,"$1"):""}},data:function(){return{user:{}}},created:function(){var t=this;r()({url:"https://api.github.com/users/".concat(this.username),method:"GET"}).then((function(s){console.log(s),t.user=s.data}))}},n=(e(407),e(5)),c=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui card"},[e("a",{staticClass:"image",attrs:{href:"https://github.com/"+t.username}},[e("img",{attrs:{src:t.user.avatar_url}})]),t._v(" "),e("div",{staticClass:"content"},[e("a",{staticClass:"header",attrs:{href:"https://github.com/"+t.username}},[t._v(t._s(t.user.name))]),t._v(" "),e("div",{staticClass:"meta"},[e("span",{staticClass:"date"},[t._v("Joined in "+t._s(t.githubYear))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n      Bio: "+t._s(t.user.bio)+"\n    ")])]),t._v(" "),e("div",{staticClass:"extra content"},[e("a",{attrs:{href:"https://github.com/"+t.username+"?tab=followers"}},[e("i",{staticClass:"user icon"}),t._v("\n      "+t._s(t.user.followers)+" Followers\n    ")])])])}),[],!1,null,"28dcba99",null);s.default=c.exports}}]);