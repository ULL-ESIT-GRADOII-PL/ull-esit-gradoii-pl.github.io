(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{552:function(e,t,r){"use strict";r.r(t);r(21);var n={props:["id"],data:function(){return{}},computed:{src:function(){var e=this.id;e||(e=this.$page&&this.$page.frontmatter&&this.$page.frontmatter.video);var t=/https:.*\.be\/(.+)$/.exec(e);return t&&t[1]&&(e=t[1]),"https://www.youtube-nocookie.com/embed/"+e}}},s=r(5),o=Object(s.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"responsive-video-container"},[t("iframe",{attrs:{src:this.src,frameborder:"0",webkitAllowFullScreen:"",mozallowfullscreen:"",allowfullscreen:""}})])}),[],!1,null,null,null);t.default=o.exports}}]);