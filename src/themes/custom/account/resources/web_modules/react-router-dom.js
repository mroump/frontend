import t from"./react.js";import{P as e}from"./common/index-e491ad49.js";var n=function(){};function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}function a(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var c="Invariant failed";function s(t,e){if(!t)throw new Error(c)}function u(t){return"/"===t.charAt(0)?t:"/"+t}function p(t){return"/"===t.charAt(0)?t.substr(1):t}function l(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function f(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function h(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function y(t,e,n,a){var c;"string"==typeof t?(c=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(c=r({},t)).pathname&&(c.pathname=""),c.search?"?"!==c.search.charAt(0)&&(c.search="?"+c.search):c.search="",c.hash?"#"!==c.hash.charAt(0)&&(c.hash="#"+c.hash):c.hash="",void 0!==e&&void 0===c.state&&(c.state=e));try{c.pathname=decodeURI(c.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(c.key=n),a?c.pathname?"/"!==c.pathname.charAt(0)&&(c.pathname=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],a=e&&e.split("/")||[],c=t&&o(t),s=e&&o(e),u=c||s;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var p=a[a.length-1];n="."===p||".."===p||""===p}else n=!1;for(var l=0,f=a.length;f>=0;f--){var h=a[f];"."===h?i(a,f):".."===h?(i(a,f),l++):l&&(i(a,f),l--)}if(!u)for(;l--;l)a.unshift("..");!u||""===a[0]||a[0]&&o(a[0])||a.unshift("");var y=a.join("/");return n&&"/"!==y.substr(-1)&&(y+="/"),y}(c.pathname,a.pathname)):c.pathname=a.pathname:c.pathname||(c.pathname="/"),c}function d(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"==typeof e||"object"==typeof n){var r=a(e),o=a(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1}(t.state,e.state)}function v(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var m=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(t,e){e(window.confirm(t))}function g(){try{return window.history.state||{}}catch(t){return{}}}function w(t){void 0===t&&(t={}),m||s(!1);var e,n=window.history,o=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=t,c=a.forceRefresh,p=void 0!==c&&c,d=a.getUserConfirmation,w=void 0===d?b:d,O=a.keyLength,x=void 0===O?6:O,P=t.basename?f(u(t.basename)):"";function j(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return P&&(i=l(i,P)),y(i,r,n)}function E(){return Math.random().toString(36).substr(2,x)}var R=v();function T(t){r(N,t),N.length=n.length,R.notifyListeners(N.location,N.action)}function C(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||S(j(t.state))}function k(){S(j(g()))}var A=!1;function S(t){if(A)A=!1,T();else{R.confirmTransitionTo(t,"POP",w,(function(e){e?T({action:"POP",location:t}):function(t){var e=N.location,n=L.indexOf(e.key);-1===n&&(n=0);var r=L.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(A=!0,q(o))}(t)}))}}var _=j(g()),L=[_.key];function M(t){return P+h(t)}function q(t){n.go(t)}var U=0;function W(t){1===(U+=t)&&1===t?(window.addEventListener("popstate",C),i&&window.addEventListener("hashchange",k)):0===U&&(window.removeEventListener("popstate",C),i&&window.removeEventListener("hashchange",k))}var H=!1;var N={length:n.length,action:"POP",location:_,createHref:M,push:function(t,e){var r=y(t,e,E(),N.location);R.confirmTransitionTo(r,"PUSH",w,(function(t){if(t){var e=M(r),i=r.key,a=r.state;if(o)if(n.pushState({key:i,state:a},null,e),p)window.location.href=e;else{var c=L.indexOf(N.location.key),s=L.slice(0,c+1);s.push(r.key),L=s,T({action:"PUSH",location:r})}else window.location.href=e}}))},replace:function(t,e){var r=y(t,e,E(),N.location);R.confirmTransitionTo(r,"REPLACE",w,(function(t){if(t){var e=M(r),i=r.key,a=r.state;if(o)if(n.replaceState({key:i,state:a},null,e),p)window.location.replace(e);else{var c=L.indexOf(N.location.key);-1!==c&&(L[c]=r.key),T({action:"REPLACE",location:r})}else window.location.replace(e)}}))},go:q,goBack:function(){q(-1)},goForward:function(){q(1)},block:function(t){void 0===t&&(t=!1);var e=R.setPrompt(t);return H||(W(1),H=!0),function(){return H&&(H=!1,W(-1)),e()}},listen:function(t){var e=R.appendListener(t);return W(1),function(){W(-1),e()}}};return N}var O={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+p(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:p,decodePath:u},slash:{encodePath:u,decodePath:u}};function x(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function P(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function j(t){window.location.replace(x(window.location.href)+"#"+t)}function E(t){void 0===t&&(t={}),m||s(!1);var e=window.history;window.navigator.userAgent.indexOf("Firefox");var n=t,o=n.getUserConfirmation,i=void 0===o?b:o,a=n.hashType,c=void 0===a?"slash":a,p=t.basename?f(u(t.basename)):"",d=O[c],g=d.encodePath,w=d.decodePath;function E(){var t=w(P());return p&&(t=l(t,p)),y(t)}var R=v();function T(t){r(N,t),N.length=e.length,R.notifyListeners(N.location,N.action)}var C=!1,k=null;function A(){var t,e,n=P(),r=g(n);if(n!==r)j(r);else{var o=E(),a=N.location;if(!C&&(e=o,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(k===h(o))return;k=null,function(t){if(C)C=!1,T();else{R.confirmTransitionTo(t,"POP",i,(function(e){e?T({action:"POP",location:t}):function(t){var e=N.location,n=M.lastIndexOf(h(e));-1===n&&(n=0);var r=M.lastIndexOf(h(t));-1===r&&(r=0);var o=n-r;o&&(C=!0,q(o))}(t)}))}}(o)}}var S=P(),_=g(S);S!==_&&j(_);var L=E(),M=[h(L)];function q(t){e.go(t)}var U=0;function W(t){1===(U+=t)&&1===t?window.addEventListener("hashchange",A):0===U&&window.removeEventListener("hashchange",A)}var H=!1;var N={length:e.length,action:"POP",location:L,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=x(window.location.href)),n+"#"+g(p+h(t))},push:function(t,e){var n=y(t,void 0,void 0,N.location);R.confirmTransitionTo(n,"PUSH",i,(function(t){if(t){var e=h(n),r=g(p+e);if(P()!==r){k=e,function(t){window.location.hash=t}(r);var o=M.lastIndexOf(h(N.location)),i=M.slice(0,o+1);i.push(e),M=i,T({action:"PUSH",location:n})}else T()}}))},replace:function(t,e){var n=y(t,void 0,void 0,N.location);R.confirmTransitionTo(n,"REPLACE",i,(function(t){if(t){var e=h(n),r=g(p+e);P()!==r&&(k=e,j(r));var o=M.indexOf(h(N.location));-1!==o&&(M[o]=e),T({action:"REPLACE",location:n})}}))},go:q,goBack:function(){q(-1)},goForward:function(){q(1)},block:function(t){void 0===t&&(t=!1);var e=R.setPrompt(t);return H||(W(1),H=!0),function(){return H&&(H=!1,W(-1)),e()}},listen:function(t){var e=R.appendListener(t);return W(1),function(){W(-1),e()}}};return N}function R(t,e,n){return Math.min(Math.max(t,e),n)}function T(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,o=e.initialEntries,i=void 0===o?["/"]:o,a=e.initialIndex,c=void 0===a?0:a,s=e.keyLength,u=void 0===s?6:s,p=v();function l(t){r(w,t),w.length=w.entries.length,p.notifyListeners(w.location,w.action)}function f(){return Math.random().toString(36).substr(2,u)}var d=R(c,0,i.length-1),m=i.map((function(t){return y(t,void 0,"string"==typeof t?f():t.key||f())})),b=h;function g(t){var e=R(w.index+t,0,w.entries.length-1),r=w.entries[e];p.confirmTransitionTo(r,"POP",n,(function(t){t?l({action:"POP",location:r,index:e}):l()}))}var w={length:m.length,action:"POP",location:m[d],index:d,entries:m,createHref:b,push:function(t,e){var r=y(t,e,f(),w.location);p.confirmTransitionTo(r,"PUSH",n,(function(t){if(t){var e=w.index+1,n=w.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),l({action:"PUSH",location:r,index:e,entries:n})}}))},replace:function(t,e){var r=y(t,e,f(),w.location);p.confirmTransitionTo(r,"REPLACE",n,(function(t){t&&(w.entries[w.index]=r,l({action:"REPLACE",location:r}))}))},go:g,goBack:function(){g(-1)},goForward:function(){g(1)},canGo:function(t){var e=w.index+t;return e>=0&&e<w.entries.length},block:function(t){return void 0===t&&(t=!1),p.setPrompt(t)},listen:function(t){return p.appendListener(t)}};return w}var C=function(t,e,n,r,o,i,a,c){if(!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],p=0;(s=new Error(e.replace(/%s/g,(function(){return u[p++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}},k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var _=function(e){function r(){var t,n;A(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=S(this,e.call.apply(e,[this].concat(i))),n.state={match:n.computeMatch(n.props.history.location.pathname)},S(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),r.prototype.getChildContext=function(){return{router:k({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},r.prototype.computeMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}},r.prototype.componentWillMount=function(){var e=this,n=this.props,r=n.children,o=n.history;C(null==r||1===t.Children.count(r),"A <Router> may have only one child element"),this.unlisten=o.listen((function(){e.setState({match:e.computeMatch(o.location.pathname)})}))},r.prototype.componentWillReceiveProps=function(t){n(this.props.history===t.history)},r.prototype.componentWillUnmount=function(){this.unlisten()},r.prototype.render=function(){var e=this.props.children;return e?t.Children.only(e):null},r}(t.Component);_.propTypes={history:e.object.isRequired,children:e.node},_.contextTypes={router:e.object},_.childContextTypes={router:e.object.isRequired};var L=_;function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var U=function(e){function r(){var t,n;M(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=q(this,e.call.apply(e,[this].concat(i))),n.history=w(n.props),q(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),r.prototype.componentWillMount=function(){n(!this.props.history)},r.prototype.render=function(){return t.createElement(L,{history:this.history,children:this.props.children})},r}(t.Component);U.propTypes={basename:e.string,forceRefresh:e.bool,getUserConfirmation:e.func,keyLength:e.number,children:e.node};var W=U;function H(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var I=function(e){function r(){var t,n;H(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=N(this,e.call.apply(e,[this].concat(i))),n.history=E(n.props),N(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),r.prototype.componentWillMount=function(){n(!this.props.history)},r.prototype.render=function(){return t.createElement(L,{history:this.history,children:this.props.children})},r}(t.Component);I.propTypes={basename:e.string,getUserConfirmation:e.func,hashType:e.oneOf(["hashbang","noslash","slash"]),children:e.node};var $=I,B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var D=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},K=function(e){function n(){var t,r;F(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=Y(this,e.call.apply(e,[this].concat(i))),r.handleClick=function(t){if(r.props.onClick&&r.props.onClick(t),!t.defaultPrevented&&0===t.button&&!r.props.target&&!D(t)){t.preventDefault();var e=r.context.router.history,n=r.props,o=n.replace,i=n.to;o?e.replace(i):e.push(i)}},Y(r,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n.prototype.render=function(){var e=this.props;e.replace;var n=e.to,r=e.innerRef,o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["replace","to","innerRef"]);C(this.context.router,"You should not use <Link> outside a <Router>"),C(void 0!==n,'You must specify the "to" property');var i=this.context.router.history,a="string"==typeof n?y(n,null,null,i.location):n,c=i.createHref(a);return t.createElement("a",B({},o,{onClick:this.handleClick,href:c,ref:r}))},n}(t.Component);K.propTypes={onClick:e.func,target:e.string,replace:e.bool,to:e.oneOfType([e.string,e.object]).isRequired,innerRef:e.oneOfType([e.string,e.func])},K.defaultProps={replace:!1},K.contextTypes={router:e.shape({history:e.shape({push:e.func.isRequired,replace:e.func.isRequired,createHref:e.func.isRequired}).isRequired}).isRequired};var J=K;function V(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var z=function(e){function r(){var t,n;V(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=G(this,e.call.apply(e,[this].concat(i))),n.history=T(n.props),G(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),r.prototype.componentWillMount=function(){n(!this.props.history)},r.prototype.render=function(){return t.createElement(L,{history:this.history,children:this.props.children})},r}(t.Component);z.propTypes={initialEntries:e.array,initialIndex:e.number,getUserConfirmation:e.func,keyLength:e.number,children:e.node};var Q=z,X=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Z=ht,tt=it,et=function(t,e){return ct(it(t,e),e)},nt=ct,rt=ft,ot=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function it(t,e){for(var n,r=[],o=0,i=0,a="",c=e&&e.delimiter||"/";null!=(n=ot.exec(t));){var s=n[0],u=n[1],p=n.index;if(a+=t.slice(i,p),i=p+s.length,u)a+=u[1];else{var l=t[i],f=n[2],h=n[3],y=n[4],d=n[5],v=n[6],m=n[7];a&&(r.push(a),a="");var b=null!=f&&null!=l&&l!==f,g="+"===v||"*"===v,w="?"===v||"*"===v,O=n[2]||c,x=y||d;r.push({name:h||o++,prefix:f||"",delimiter:O,optional:w,repeat:g,partial:b,asterisk:!!m,pattern:x?ut(x):m?".*":"[^"+st(O)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function at(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function ct(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",lt(e)));return function(e,r){for(var o="",i=e||{},a=(r||{}).pretty?at:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var u,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(X(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(u=a(p[l]),!n[c].test(u))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===l?s.prefix:s.delimiter)+u}}else{if(u=s.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!n[c].test(u))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+u+'"');o+=s.prefix+u}}else o+=s}return o}}function st(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function ut(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function pt(t,e){return t.keys=e,t}function lt(t){return t&&t.sensitive?"":"i"}function ft(t,e,n){X(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=st(c);else{var s=st(c.prefix),u="(?:"+c.pattern+")";e.push(c),c.repeat&&(u+="(?:"+s+u+")*"),i+=u=c.optional?c.partial?s+"("+u+")?":"(?:"+s+"("+u+"))?":s+"("+u+")"}}var p=st(n.delimiter||"/"),l=i.slice(-p.length)===p;return r||(i=(l?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&l?"":"(?="+p+"|$)",pt(new RegExp("^"+i,lt(n)),e)}function ht(t,e,n){return X(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return pt(t,e)}(t,e):X(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(ht(t[o],e,n).source);return pt(new RegExp("(?:"+r.join("|")+")",lt(n)),e)}(t,e,n):function(t,e,n){return ft(it(t,n),e,n)}(t,e,n)}Z.parse=tt,Z.compile=et,Z.tokensToFunction=nt,Z.tokensToRegExp=rt;var yt={},dt=0,vt=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=yt[n]||(yt[n]={});if(r[t])return r[t];var o=[],i={re:Z(t,o,e),keys:o};return dt<1e4&&(r[t]=i,dt++),i},mt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];"string"==typeof e&&(e={path:e});var r=e,o=r.path,i=r.exact,a=void 0!==i&&i,c=r.strict,s=void 0!==c&&c,u=r.sensitive,p=void 0!==u&&u;if(null==o)return n;var l=vt(o,{end:a,strict:s,sensitive:p}),f=l.re,h=l.keys,y=f.exec(t);if(!y)return null;var d=y[0],v=y.slice(1),m=t===d;return a&&!m?null:{path:o,url:"/"===o&&""===d?"/":d,isExact:m,params:h.reduce((function(t,e,n){return t[e.name]=v[n],t}),{})}},bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function gt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Ot=function(e){return 0===t.Children.count(e)},xt=function(e){function r(){var t,n;gt(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=wt(this,e.call.apply(e,[this].concat(i))),n.state={match:n.computeMatch(n.props,n.context.router)},wt(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),r.prototype.getChildContext=function(){return{router:bt({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},r.prototype.computeMatch=function(t,e){var n=t.computedMatch,r=t.location,o=t.path,i=t.strict,a=t.exact,c=t.sensitive;if(n)return n;C(e,"You should not use <Route> or withRouter() outside a <Router>");var s=e.route,u=(r||s.location).pathname;return mt(u,{path:o,strict:i,exact:a,sensitive:c},s.match)},r.prototype.componentWillMount=function(){n(!(this.props.component&&this.props.render)),n(!(this.props.component&&this.props.children&&!Ot(this.props.children))),n(!(this.props.render&&this.props.children&&!Ot(this.props.children)))},r.prototype.componentWillReceiveProps=function(t,e){n(!(t.location&&!this.props.location)),n(!(!t.location&&this.props.location)),this.setState({match:this.computeMatch(t,e.router)})},r.prototype.render=function(){var e=this.state.match,n=this.props,r=n.children,o=n.component,i=n.render,a=this.context.router,c=a.history,s=a.route,u=a.staticContext,p={match:e,location:this.props.location||s.location,history:c,staticContext:u};return o?e?t.createElement(o,p):null:i?e?i(p):null:"function"==typeof r?r(p):r&&!Ot(r)?t.Children.only(r):null},r}(t.Component);xt.propTypes={computedMatch:e.object,path:e.string,exact:e.bool,strict:e.bool,sensitive:e.bool,component:e.func,render:e.func,children:e.oneOfType([e.func,e.node]),location:e.object},xt.contextTypes={router:e.shape({history:e.object.isRequired,route:e.object.isRequired,staticContext:e.object})},xt.childContextTypes={router:e.object.isRequired};var Pt=xt,jt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var Rt=function(e){var n=e.to,r=e.exact,o=e.strict,i=e.location,a=e.activeClassName,c=e.className,s=e.activeStyle,u=e.style,p=e.isActive,l=e["aria-current"],f=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),h="object"===(void 0===n?"undefined":Et(n))?n.pathname:n,y=h&&h.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return t.createElement(Pt,{path:y,exact:r,strict:o,location:i,children:function(e){var r=e.location,o=e.match,i=!!(p?p(o,r):o);return t.createElement(J,jt({to:n,className:i?[c,a].filter((function(t){return t})).join(" "):c,style:i?jt({},u,s):u,"aria-current":i&&l||null},f))}})};Rt.propTypes={to:J.propTypes.to,exact:e.bool,strict:e.bool,location:e.object,activeClassName:e.string,className:e.string,activeStyle:e.object,style:e.object,isActive:e.func,"aria-current":e.oneOf(["page","step","location","date","time","true"])},Rt.defaultProps={activeClassName:"active","aria-current":"page"};var Tt=Rt;function Ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var At=function(t){function e(){return Ct(this,e),kt(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.enable=function(t){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(t)},e.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},e.prototype.componentWillMount=function(){C(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},e.prototype.componentWillReceiveProps=function(t){t.when?this.props.when&&this.props.message===t.message||this.enable(t.message):this.disable()},e.prototype.componentWillUnmount=function(){this.disable()},e.prototype.render=function(){return null},e}(t.Component);At.propTypes={when:e.bool,message:e.oneOfType([e.func,e.string]).isRequired},At.defaultProps={when:!0},At.contextTypes={router:e.shape({history:e.shape({block:e.func.isRequired}).isRequired}).isRequired};var St=At,_t={},Lt=0,Mt=function(t){var e=t,n=_t[e]||(_t[e]={});if(n[t])return n[t];var r=Z.compile(t);return Lt<1e4&&(n[t]=r,Lt++),r},qt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"===t)return t;var n=Mt(t);return n(e,{pretty:!0})},Ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function Wt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ht(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Nt=function(t){function e(){return Wt(this,e),Ht(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){C(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=y(t.to),r=y(this.props.to);d(e,r)?n(!1,"You tried to redirect to the same route you're currently on: \""+r.pathname+r.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,n=t.to;return e?"string"==typeof n?qt(n,e.params):Ut({},n,{pathname:qt(n.pathname,e.params)}):n},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,n=this.computeTo(this.props);e?t.push(n):t.replace(n)},e.prototype.render=function(){return null},e}(t.Component);Nt.propTypes={computedMatch:e.object,push:e.bool,from:e.string,to:e.oneOfType([e.string,e.object]).isRequired},Nt.defaultProps={push:!1},Nt.contextTypes={router:e.shape({history:e.shape({push:e.func.isRequired,replace:e.func.isRequired}).isRequired,staticContext:e.object}).isRequired};var It=Nt,$t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function Bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ft(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Yt=function(t){return"/"===t.charAt(0)?t:"/"+t},Dt=function(t,e){return t?$t({},e,{pathname:Yt(t)+e.pathname}):e},Kt=function(t,e){if(!t)return e;var n=Yt(t);return 0!==e.pathname.indexOf(n)?e:$t({},e,{pathname:e.pathname.substr(n.length)})},Jt=function(t){return"string"==typeof t?t:h(t)},Vt=function(t){return function(){C(!1,"You cannot %s with <StaticRouter>",t)}},Gt=function(){},zt=function(e){function r(){var t,n;Bt(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=Ft(this,e.call.apply(e,[this].concat(i))),n.createHref=function(t){return Yt(n.props.basename+Jt(t))},n.handlePush=function(t){var e=n.props,r=e.basename,o=e.context;o.action="PUSH",o.location=Dt(r,y(t)),o.url=Jt(o.location)},n.handleReplace=function(t){var e=n.props,r=e.basename,o=e.context;o.action="REPLACE",o.location=Dt(r,y(t)),o.url=Jt(o.location)},n.handleListen=function(){return Gt},n.handleBlock=function(){return Gt},Ft(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),r.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},r.prototype.componentWillMount=function(){n(!this.props.history)},r.prototype.render=function(){var e=this.props,n=e.basename;e.context;var r=e.location,o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["basename","context","location"]),i={createHref:this.createHref,action:"POP",location:Kt(n,y(r)),push:this.handlePush,replace:this.handleReplace,go:Vt("go"),goBack:Vt("goBack"),goForward:Vt("goForward"),listen:this.handleListen,block:this.handleBlock};return t.createElement(L,$t({},o,{history:i}))},r}(t.Component);zt.propTypes={basename:e.string,context:e.object.isRequired,location:e.oneOfType([e.string,e.object])},zt.defaultProps={basename:"",location:"/"},zt.childContextTypes={router:e.object.isRequired};var Qt=zt;function Xt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var te=function(e){function r(){return Xt(this,r),Zt(this,e.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),r.prototype.componentWillMount=function(){C(this.context.router,"You should not use <Switch> outside a <Router>")},r.prototype.componentWillReceiveProps=function(t){n(!(t.location&&!this.props.location)),n(!(!t.location&&this.props.location))},r.prototype.render=function(){var e=this.context.router.route,n=this.props.children,r=this.props.location||e.location,o=void 0,i=void 0;return t.Children.forEach(n,(function(n){if(null==o&&t.isValidElement(n)){var a=n.props,c=a.path,s=a.exact,u=a.strict,p=a.sensitive,l=a.from,f=c||l;i=n,o=mt(r.pathname,{path:f,exact:s,strict:u,sensitive:p},e.match)}})),o?t.cloneElement(i,{location:r,computedMatch:o}):null},r}(t.Component);te.contextTypes={router:e.shape({route:e.object.isRequired}).isRequired},te.propTypes={children:e.node,location:e.object};var ee=te,ne={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},re={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oe=Object.defineProperty,ie=Object.getOwnPropertyNames,ae=Object.getOwnPropertySymbols,ce=Object.getOwnPropertyDescriptor,se=Object.getPrototypeOf,ue=se&&se(Object);var pe=function t(e,n,r){if("string"!=typeof n){if(ue){var o=se(n);o&&o!==ue&&t(e,o,r)}var i=ie(n);ae&&(i=i.concat(ae(n)));for(var a=0;a<i.length;++a){var c=i[a];if(!(ne[c]||re[c]||r&&r[c])){var s=ce(n,c);try{oe(e,c,s)}catch(t){}}}return e}return e},le=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var fe=function(n){var r=function(e){var r=e.wrappedComponentRef,o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["wrappedComponentRef"]);return t.createElement(Pt,{children:function(e){return t.createElement(n,le({},o,e,{ref:r}))}})};return r.displayName="withRouter("+(n.displayName||n.name)+")",r.WrappedComponent=n,r.propTypes={wrappedComponentRef:e.func},pe(r,n)};export{W as BrowserRouter,$ as HashRouter,J as Link,Q as MemoryRouter,Tt as NavLink,St as Prompt,It as Redirect,Pt as Route,L as Router,Qt as StaticRouter,ee as Switch,qt as generatePath,mt as matchPath,fe as withRouter};
//# sourceMappingURL=react-router-dom.js.map
