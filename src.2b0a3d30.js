parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/football-field.jpg":[["football-field.771c6721.jpg","RsJG"],"RsJG"]}],"oMJp":[function(require,module,exports) {
const e=document.querySelector("#board"),t=736;for(let c=0;c<736;c+=1){const t=document.createElement("div");t.classList.add("square","placeholder"),e.append(t)}
},{}],"SdiA":[function(require,module,exports) {
const e=document.querySelector(".item"),t=document.querySelectorAll(".placeholder");e.addEventListener("dragstart",d),e.addEventListener("dragend",n);for(const o of t)o.addEventListener("dragover",r),o.addEventListener("drop",a);function d(e){e.target.classList.add("hold"),setTimeout(()=>e.target.classList.add("hide"),0)}function n(e){e.target.classList.remove("hold","hide")}function r(e){e.preventDefault()}function a(t){t.target.append(e),t.currentTarget.append(e)}
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/board-creation.js"),require("./js/drag-n-drop.js");
},{"./sass/main.scss":"clu1","./js/board-creation.js":"oMJp","./js/drag-n-drop.js":"SdiA"}]},{},["Focm"], null)
//# sourceMappingURL=/tactical-board/src.2b0a3d30.js.map