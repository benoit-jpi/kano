(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{368:function(t,e,o){"use strict";o.r(e);var n={name:"kano",props:{source:{type:String,default:"https://kano.dev.kalisio.xyz"},token:{type:String,default:""},cssStyle:{type:String,default:"width: 100%; height: 50vh"}},beforeMount:function(){var t=this;if("undefined"==typeof postRobot){var e=document.createElement("script");e.setAttribute("src","https://cdn.jsdelivr.net/npm/post-robot@10.0.10/dist/post-robot.min.js"),e.onload=function(){postRobot.on("kano-ready",(function(){var e=document.getElementById("kano").contentWindow;""!==t.jwt&&postRobot.send(e,"setLocalStorage",{"kano-jwt":t.token})}))},document.head.appendChild(e)}}},s=o(27),a=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("iframe",{style:this.cssStyle,attrs:{id:"kano",title:"Kano",allow:"geolocation *",allowfullscreen:"",frameBorder:"0",src:this.source}})])}),[],!1,null,null,null);e.default=a.exports}}]);