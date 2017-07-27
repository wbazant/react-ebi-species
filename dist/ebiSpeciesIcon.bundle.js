var ebiSpeciesIcon=webpackJsonp_name_([1],{30:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={mammals:{a:["alpaca","vicugna pacos"],A:["cat","felis catus"],C:["cow","bos taurus"],d:["dog","canis lupus","canis lupus familiaris"],D:["dolphin"],e:["elephant","loxodonta africana","loxodonta cyclotis","elephas maximus"],g:["guinea pig","cavia porcellus"],G:["gorilla","gorilla gorilla"],h:["horse","equus caballus"],H:["human","homo sapiens"],i:["chimpanzee","pan paniscus","pan troglodytes"],I:["squirrel"],l:["armadillo"],m:["goat"],M:["mouse","mus musculus"],N:["mouse lemur"],o:["hedgehog","erinaceus europaeus"],p:["pig","sus scrofa"],Q:["shrew"],r:["monkey","macaca mulatta"],R:["rat","rattus norvegicus"],t:["rabbit","oryctolagus cuniculus"],U:["platypus","ornithorhynchus anatinus"],w:["wallaby"],x:["sheep","ovis aries"],3:["kangaroo rat"],8:["papio anubis"],9:["monodelphis domestica"],"!":["ferret","mustela putorius furo"],"(":["bat"],"*":["orangutan","pongo abelii","pongo pygmaeus"]},plants:{B:["arabidopsis thaliana","arabidopsis lyrata","brassica oleracea","brassica rapa"],c:["corn","zea mays"],O:["grapes","vitis vinifera"],P:["plant","physcomitrella patens","sorghum bicolor","triticum aestivum"],5:["barley","hordeum vulgare","hordeum vulgare subsp. vulgare"],6:["oryza sativa","oryza sativa japonica group"],"%":["brachypodium distachyon"],")":["tomatoes","solanum lycopersicum","solanum tuberosum"],"^":["glycine max"]},other:{b:["bug"],E:["pufferfish","tetraodon nigroviridis"],f:["frog","xenopus (silurana) tropicalis","xenopus tropicalis"],F:["fly","drosophila melanogaster"],k:["chicken","gallus gallus"],L:["escherichia coli"],n:["finch","pyrrhula pyrrhula"],s:["scorpion"],S:["spider"],u:["fungus"],v:["virus"],W:["caenorhabditis elegans","schistosoma mansoni"],Y:["yeast","saccharomyces cerevisiae","schizosaccharomyces pombe"],Z:["zebrafish","danio rerio"],0:["amoeba"],1:["mosquito"],2:["diatom"],4:["louse"],7:["anolis carolinensis"],"£":["aspergillus fumigatus"],"+":["ray"],"'":["snail"],$:["bee"],"&":["tick"],"@":["plasmodium"]}},o=function(e,t){return Object.keys(n[e]).find(function(r){return n[e][r].includes(t.toLowerCase())})},i=function(e){for(var t in n){var r=o(t,e);if(r)return[t,r]}return["",""]},s=function(){var e=[];return Object.keys(n).forEach(function(t){Object.keys(n[t]).forEach(function(r){n[t][r].forEach(function(t){return e.push(t)})})}),e};t.default=i,t.getAllSpecies=s},31:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.default=void 0;var o=r(12),i=n(o),s=r(24),a=n(s),u=r(50),c=n(u),l=function(e,t){a.default.render(i.default.createElement(c.default,e),document.getElementById(t))};t.default=c.default,t.render=l},50:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(12),i=n(o),s=r(51),a=n(s);r(53);var u=r(30),c=n(u),l=function(e){var t=(0,c.default)(e.species);return i.default.createElement("span",{className:"react-ebi-species-icon","data-icon":t[1],style:{color:e.colourOverride||e.groupColours[t[0]]},title:e.species})};l.propTypes={species:a.default.string.isRequired,colourOverride:a.default.string,groupColours:a.default.shape({mammals:a.default.string.isRequired,plants:a.default.string.isRequired,other:a.default.string.isRequired}).isRequired},l.defaultProps={species:"oryctolagus cuniculus",groupColours:{mammals:"red",plants:"green",other:"blue"}},t.default=l},51:function(e,t,r){e.exports=r(52)()},52:function(e,t,r){"use strict";var n=r(6),o=r(0),i=r(32);e.exports=function(){function e(e,t,r,n,s,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},53:function(e,t,r){var n=r(54);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r(56)(n,o);n.locals&&(e.exports=n.locals)},54:function(e,t,r){t=e.exports=r(55)(void 0),t.push([e.i,'@font-face{font-family:EBI-Species;src:url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.eot");src:url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.eot?#iefix") format("embedded-opentype"),url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.woff") format("woff"),url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.svg#EBI-Species") format("svg"),url("https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.ttf") format("truetype");font-weight:400;font-style:normal}.react-ebi-species-icon:before{font-family:EBI-Species;color:inherit;content:attr(data-icon)}.react-ebi-species-icon{text-decoration:none;font-style:normal}',""])},55:function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},56:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=h[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(l(n.parts[i],t))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(l(n.parts[i],t));h[n.id]={id:n.id,refs:1,parts:s}}}}function o(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a=i[1],u=i[2],c=i[3],l={css:a,media:u,sourceMap:c};n[s]?n[s].parts.push(l):r.push(n[s]={id:s,parts:[l]})}return r}function i(e,t){var r=v(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function l(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=g++;r=b||(b=a(t)),n=f.bind(null,r,c,!1),o=f.bind(null,r,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=d.bind(null,r,t),o=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(t),n=p.bind(null,r),o=function(){s(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function f(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function d(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=w(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e.call(this,r)),t[r]}}(function(e){return document.querySelector(e)}),b=null,g=0,y=[],w=r(57);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=o(e,t);return n(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s],u=h[a.id];u.refs--,i.push(u)}if(e){n(o(e,t),t)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var E=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},57:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}},[31]);