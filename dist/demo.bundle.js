var demo=webpackJsonp_name_([0,1],{179:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.renderAll=void 0;var o=r(12),a=n(o),i=r(24),s=n(i),u=r(31),c=n(u),l=r(30),f=function(e){var t=(0,l.getAllSpecies)(),r=t.map(function(e){return a.default.createElement("tr",{key:e},a.default.createElement("td",null,e),a.default.createElement("td",null,a.default.createElement(c.default,{species:e})))});s.default.render(a.default.createElement("div",null,a.default.createElement("table",null,a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Name"),a.default.createElement("th",null,"Icon"))),a.default.createElement("tbody",null,r))),document.getElementById(e))};t.renderAll=f,t.render=u.render},30:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={mammals:{a:["alpaca","vicugna pacos"],A:["cat","felis catus"],C:["cow","bos taurus"],d:["dog","canis lupus","canis lupus familiaris"],D:["dolphin"],e:["elephant","loxodonta africana","loxodonta cyclotis","elephas maximus"],g:["guinea pig","cavia porcellus"],G:["gorilla","gorilla gorilla"],h:["horse","equus caballus"],H:["human","homo sapiens"],i:["chimpanzee","pan paniscus","pan troglodytes"],I:["squirrel"],l:["armadillo"],m:["goat"],M:["mouse","mus musculus"],N:["mouse lemur"],o:["hedgehog","erinaceus europaeus"],p:["pig","sus scrofa"],Q:["shrew"],r:["monkey","macaca mulatta"],R:["rat","rattus norvegicus"],t:["rabbit","oryctolagus cuniculus"],U:["platypus","ornithorhynchus anatinus"],w:["wallaby"],x:["sheep","ovis aries"],3:["kangaroo rat"],8:["papio anubis"],9:["monodelphis domestica"],"!":["ferret","mustela putorius furo"],"(":["bat"],"*":["orangutan","pongo abelii","pongo pygmaeus"]},plants:{B:["arabidopsis thaliana","arabidopsis lyrata","brassica oleracea","brassica rapa"],c:["corn","zea mays"],O:["grapes","vitis vinifera"],P:["plant","physcomitrella patens","sorghum bicolor","triticum aestivum"],5:["barley","hordeum vulgare","hordeum vulgare subsp. vulgare"],6:["oryza sativa","oryza sativa japonica group"],"%":["brachypodium distachyon"],")":["tomatoes","solanum lycopersicum","solanum tuberosum"],"^":["glycine max"]},other:{b:["bug"],E:["pufferfish","tetraodon nigroviridis"],f:["frog","xenopus (silurana) tropicalis","xenopus tropicalis"],F:["fly","drosophila melanogaster"],k:["chicken","gallus gallus"],L:["escherichia coli"],n:["finch","pyrrhula pyrrhula"],s:["scorpion"],S:["spider"],u:["fungus"],v:["virus"],W:["caenorhabditis elegans","schistosoma mansoni"],Y:["yeast","saccharomyces cerevisiae","schizosaccharomyces pombe"],Z:["zebrafish","danio rerio"],0:["amoeba"],1:["mosquito"],2:["diatom"],4:["louse"],7:["anolis carolinensis"],"£":["aspergillus fumigatus"],"+":["ray"],"'":["snail"],$:["bee"],"&":["tick"],"@":["plasmodium"]}},o=function(e,t){return Object.keys(n[e]).find(function(r){return n[e][r].includes(t.toLowerCase())})},a=function(e){for(var t in n){var r=o(t,e);if(r)return[t,r]}return["",""]},i=function(){var e=[];return Object.keys(n).forEach(function(t){Object.keys(n[t]).forEach(function(r){n[t][r].forEach(function(t){return e.push(t)})})}),e};t.default=a,t.getAllSpecies=i},31:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.default=void 0;var o=r(12),a=n(o),i=r(24),s=n(i),u=r(50),c=n(u),l=function(e,t){s.default.render(a.default.createElement(c.default,e),document.getElementById(t))};t.default=c.default,t.render=l},50:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(12),a=n(o),i=r(51),s=n(i);r(53);var u=r(30),c=n(u),l=function(e){var t=(0,c.default)(e.species);return a.default.createElement("span",{className:"react-ebi-species-icon","data-icon":t[1],style:{color:e.colourOverride||e.groupColours[t[0]]},title:e.species})};l.propTypes={species:s.default.string.isRequired,colourOverride:s.default.string,groupColours:s.default.shape({mammals:s.default.string.isRequired,plants:s.default.string.isRequired,other:s.default.string.isRequired}).isRequired},l.defaultProps={species:"oryctolagus cuniculus",groupColours:{mammals:"red",plants:"green",other:"blue"}},t.default=l},51:function(e,t,r){e.exports=r(52)()},52:function(e,t,r){"use strict";var n=r(6),o=r(0),a=r(32);e.exports=function(){function e(e,t,r,n,i,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},53:function(e,t,r){var n=r(54);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r(56)(n,o);n.locals&&(e.exports=n.locals)},54:function(e,t,r){t=e.exports=r(55)(void 0),t.push([e.i,'@font-face{font-family:EBI-Species;src:url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.eot");src:url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.eot?#iefix") format("embedded-opentype"),url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.woff") format("woff"),url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.svg#EBI-Species") format("svg"),url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.ttf") format("truetype");font-weight:400;font-style:normal}.react-ebi-species-icon:before{font-family:EBI-Species;color:inherit;content:attr(data-icon)}.react-ebi-species-icon{text-decoration:none;font-style:normal}',""])},55:function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var a=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},56:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=m[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(l(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(l(n.parts[a],t));m[n.id]={id:n.id,refs:1,parts:i}}}}function o(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s=a[1],u=a[2],c=a[3],l={css:s,media:u,sourceMap:c};n[i]?n[i].parts.push(l):r.push(n[i]={id:i,parts:[l]})}return r}function a(e,t){var r=v(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),a(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),a(e,t),t}function c(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function l(e,t){var r,n,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=y++;r=b||(b=s(t)),n=f.bind(null,r,c,!1),o=f.bind(null,r,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=d.bind(null,r,t),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=p.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function f(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function d(e,t,r){var n=r.css,o=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(n=w(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e.call(this,r)),t[r]}}(function(e){return document.querySelector(e)}),b=null,y=0,g=[],w=r(57);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=o(e,t);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],u=m[s.id];u.refs--,a.push(u)}if(e){n(o(e,t),t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete m[u.id]}}}};var E=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},57:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}}},[179]);