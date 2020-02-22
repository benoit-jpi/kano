(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{232:function(t,a,n){"use strict";n.r(a);var s=n(2),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"advanced-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[t._v("#")]),t._v(" Advanced usage")]),t._v(" "),n("h2",{attrs:{id:"integrating-kano"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#integrating-kano"}},[t._v("#")]),t._v(" Integrating Kano")]),t._v(" "),n("p",[t._v("To avoid the burden of developing a completely new application for every mapping needs you might have, "),n("strong",[t._v("Kano")]),t._v(" provides you with the capabilities to be integrated in your web application as an "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/HTML_element#Frames",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("<iframe/>")]),n("OutboundLink")],1),t._v(" like this:")]),t._v(" "),n("p",[n("kano",{attrs:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJkZXYua2FsaXNpby54eXoiLCJpc3MiOiJrYWxpc2lvIiwiZXhwIjoxNTg0MDE1Mjg0fQ.paxyC2weSLACd5k5IvuKnryFemP8UCS9cKUJDoma-xs"}})],1),t._v(" "),n("p",[t._v("The "),n("strong",[t._v("iframe")]),t._v(" API is a subset of the internal Kano components API exposing:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/kmap/mixins.html#map"}},[t._v("2D map mixins")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/kmap/mixins.html#globe"}},[t._v("3D globe mixins")])],1)]),t._v(" "),n("p",[t._v("It uses "),n("a",{attrs:{href:"https://github.com/krakenjs/post-robot",target:"_blank",rel:"noopener noreferrer"}},[t._v("post-robot"),n("OutboundLink")],1),t._v(" to")]),t._v(" "),n("ol",[n("li",[t._v("select which is the target component\n"),n("ul",[n("li",[t._v("event name = "),n("code",[t._v("map")]),t._v(" for 2D map and "),n("code",[t._v("globe")]),t._v(" for 3D globe")])])]),t._v(" "),n("li",[t._v("transform external method calls to internal calls using the following event payload\n"),n("ul",[n("li",[t._v("the "),n("code",[t._v("command")]),t._v(" property is the mixin method name")]),t._v(" "),n("li",[t._v("the "),n("code",[t._v("args")]),t._v(" property is the expected method arguments")])])]),t._v(" "),n("li",[t._v("retrieve internal method call result externally\n"),n("ul",[n("li",[t._v("event response data is the method result object")])])]),t._v(" "),n("li",[t._v("retrieve internal property externally\n"),n("ul",[n("li",[t._v("event response data is the property value")])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("Event messaging using "),n("strong",[t._v("post-robot")]),t._v(" is always async because it relies on the "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("postMessage API"),n("OutboundLink")],1),t._v(" under-the-hood.")])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v('In-memory data exchange is Json and more specifically GeoJson for map features. Do not try to inject functions or "complex" objects (e.g. class instances) in event payloads.')])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("You must use the same version of the "),n("strong",[t._v("post-robot")]),t._v(" library as the one used by "),n("strong",[t._v("Kano")]),t._v(". For now, "),n("strong",[t._v("Kano")]),t._v(" relies on the "),n("code",[t._v("10.0.10")]),t._v(" version of "),n("strong",[t._v("post-robot")]),t._v(".")])]),t._v(" "),n("p",[t._v("In addition to the events used to access mixin methods there are a couple of dedicated events:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("kano-ready")]),t._v(": to be listened by integrating application to know when the Kano application has been initialized in the iframe so that you can safely use the API")]),t._v(" "),n("li",[n("code",[t._v("setLocalStorage")]),t._v(": listened by Kano to set key/value pairs (provided as event data payload) in its local storage, typically useful to inject access tokens")]),t._v(" "),n("li",[n("code",[t._v("kano-login")]),t._v(": to be listened by integrating application to know when the user has been authenticated in the Kano application")]),t._v(" "),n("li",[n("code",[t._v("kano-logout")]),t._v(": to be listened by integrating application to know when the user has been unauthenticated in the Kano application")]),t._v(" "),n("li",[n("code",[t._v("map-ready")]),t._v(": to be listened by integrating application to know when the 2D map component has been initialized in the Kano application so that you can safely use the underlying API")]),t._v(" "),n("li",[n("code",[t._v("map-destroyed")]),t._v(": to be listened by integrating application to know when the 2D map component has been destroyed in the Kano application before switching to another route")]),t._v(" "),n("li",[n("code",[t._v("globe-ready")]),t._v(": to be listened by integrating application to know when the 3D globe component has been initialized in the Kano application so that you can safely use the underlying API")]),t._v(" "),n("li",[n("code",[t._v("globe-destroyed")]),t._v(": to be listened by integrating application to know when the 3D globe component has been destroyed in the Kano application before switching to another route")]),t._v(" "),n("li",[n("code",[t._v("layer-added")]),t._v(": to be listened by integrating application to know whenever a new layer has been added to the 2D/3D map (from the internal catalog or externally)")]),t._v(" "),n("li",[n("code",[t._v("layer-removed")]),t._v(": to be listened by integrating application to know whenever a layer has been removed from the 2D/3D map")]),t._v(" "),n("li",[n("code",[t._v("layer-shown")]),t._v(": to be listened by integrating application to know whenever a layer has been shown in the 2D/3D map")]),t._v(" "),n("li",[n("code",[t._v("layer-hidden")]),t._v(": to be listened by integrating application to know whenever a new layer has been hidden in the 2D/3D map")]),t._v(" "),n("li",[n("code",[t._v("click")]),t._v(": to be listened by integrating application to know whenever a feature has been clicked on a layer in the 2D/3D map, will provide the "),n("code",[t._v("feature")]),t._v(" and "),n("code",[t._v("layer")]),t._v(" (descriptor) as data payload properties")])]),t._v(" "),n("p",[t._v("Here is a simple code sample:")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/post-robot@10.0.10/dist/post-robot.min.js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("allow")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("geolocation *"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("kano.kalisio.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kano "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kano'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow\n\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait for Kano to be initialized")]),t._v("\n\t  postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kano-ready'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optionnaly overrides default setup of Kano")]),t._v("\n\t  \tpostRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setConfiguration'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appName'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optionnaly set a valid token to avoid authentication")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setLocalStorage'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kano-jwt'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show and zoom to a layer")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" command"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'showLayer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Layer name'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" command"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zoomToLayer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Layer name'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" property"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layers'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Layer list'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("A full sample exploring the different ways to interact with the API is provided "),n("a",{attrs:{href:"https://github.com/kalisio/kano/blob/master/src/statics/iframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(". When running the demo you can dynamically call API methods when toggling the different buttons on the left.")]),t._v(" "),n("h2",{attrs:{id:"developing-in-kano"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developing-in-kano"}},[t._v("#")]),t._v(" Developing in Kano")]),t._v(" "),n("p",[t._v("For the bravest who want to develop in "),n("strong",[t._v("Kano")]),t._v(", we recommend that you browse the documentation of our "),n("a",{attrs:{href:"https://kalisio.github.io/kdk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Development Kit"),n("OutboundLink")],1),t._v(". Indeed "),n("strong",[t._v("Kano")]),t._v(" is based on the "),n("strong",[t._v("KDK")]),t._v(" and makes the best use of all the features offered by the provided cartographic services.")])])}),[],!1,null,null,null);a.default=e.exports}}]);