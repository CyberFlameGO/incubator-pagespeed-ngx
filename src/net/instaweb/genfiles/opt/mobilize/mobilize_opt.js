(function(){var m,n=this;function p(a,b){var c=a.split("."),d=n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function r(a){return"string"==typeof a}function s(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var t=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(a,b){return a<b?-1:a>b?1:0};var w;a:{var x=n.navigator;if(x){var y=x.userAgent;if(y){w=y;break a}}w=""};var z=Array.prototype,ba=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ca=z.filter?function(a,b,c){return z.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var h=g[k];b.call(c,h,k,a)&&(e[f++]=h)}return e};function da(a){return z.concat.apply(z,arguments)}
function A(a){return z.concat.apply(z,arguments)}function B(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function ea(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}function C(a,b){var c;a.classList?c=a.classList.contains(b):(c=ea(a),c=0<=ba(c,b));return c}function D(a,b){a.classList?a.classList.add(b):C(a,b)||(a.className+=0<a.className.length?" "+b:b)}function fa(a,b){a.classList?a.classList.remove(b):C(a,b)&&(a.className=ca(ea(a),function(a){return a!=b}).join(" "))}function E(a,b){C(a,b)?fa(a,b):D(a,b)};var ga=-1!=w.indexOf("Opera")||-1!=w.indexOf("OPR"),F=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),G=-1!=w.indexOf("Gecko")&&-1==w.toLowerCase().indexOf("webkit")&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE")),ha=-1!=w.toLowerCase().indexOf("webkit");function ia(){var a=n.document;return a?a.documentMode:void 0}
var ja=function(){var a="",b;if(ga&&n.opera)return a=n.opera.version,"function"==aa(a)?a():a;G?b=/rv\:([^\);]+)(\)|;)/:F?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:ha&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(w))?a[1]:"");return F&&(b=ia(),b>parseFloat(a))?String(b):a}(),ka={};
function la(a){if(!ka[a]){for(var b=0,c=t(String(ja)).split("."),d=t(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",h=RegExp("(\\d*)(\\D*)","g"),q=RegExp("(\\d*)(\\D*)","g");do{var l=h.exec(g)||["","",""],v=q.exec(k)||["","",""];if(0==l[0].length&&0==v[0].length)break;b=u(0==l[1].length?0:parseInt(l[1],10),0==v[1].length?0:parseInt(v[1],10))||u(0==l[2].length,0==v[2].length)||u(l[2],v[2])}while(0==b)}ka[a]=0<=b}}
var ma=n.document,na=ma&&F?ia()||("CSS1Compat"==ma.compatMode?parseInt(ja,10):5):void 0;var H;if(!(H=!G&&!F)){var I;if(I=F)I=F&&9<=na;H=I}H||G&&la("1.9.1");F&&la("9");function J(a){var b=null;a&&(b=a.indexOf("px"),-1!=b&&(a=a.substring(0,b)),b=parseInt(a,10),isNaN(b)&&(b=null));return b}function K(a,b){var c=null;a&&(c=J(a.getPropertyValue(b)));return c}function L(a,b){a.style&&a.style.removeProperty(b);a.removeAttribute(b)}function pa(a,b){var c=null;a.style&&(c=J(a.style.getPropertyValue(b)));null==c&&(c=J(a.getAttribute(b)));return c}function M(a,b,c){a.style.setProperty(b,c,"important")}
function N(a,b){if(b&&0!=b.length){var c=a.getAttribute("style")||"";0<c.length&&";"!=c[c.length-1]&&(c+=";");a.setAttribute("style",c+b)}}function O(a){var b=null;"SCRIPT"!=a.tagName&&"STYLE"!=a.tagName&&a.style&&(a=window.getComputedStyle(a))&&(b=a.getPropertyValue("background-image"),"none"==b&&(b=null),b&&5<b.length&&0==b.indexOf("url(")&&")"==b[b.length-1]&&(b=b.substring(4,b.length-1)));return b}
function P(){if(null!=window.parent&&window!=window.parent)try{if(window.parent.document.domain==document.domain)return!0}catch(a){}return!1}function qa(a){var b=1;for(a=a.firstChild;a;a=a.nextSibling)b+=qa(a);return b};function Q(a){this.k=a;this.p={};if(a=document.documentElement.clientWidth)for(var b=window.getComputedStyle(document.body),c=["padding-left","padding-right"],d=0;d<c.length;++d){var e=K(b,c[d]);e&&(a-=e)}else a=400;this.b=a;console.log("window.pagespeed.MobLayout.maxWidth="+this.b)}
var ra="padding-left padding-bottom padding-right padding-top margin-left margin-bottom margin-right margin-top border-left-width border-bottom-width border-right-width border-top-width left top".split(" "),sa={A:!0,DIV:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,P:!0,SPAN:!0,TBODY:!0,TD:!0,TFOOT:!0,TH:!0,THEAD:!0,TR:!0},ta=["left","width"];function R(a){return s(a)&&1==a.nodeType?a:null}
function ua(a,b){if(!b)return!0;var c=b.tagName.toUpperCase();return"SCRIPT"==c||"STYLE"==c||"IFRAME"==c||b.id&&a.p[b.id]||b.classList.contains("psmob-nav-panel")||b.classList.contains("psmob-header-bar")||b.classList.contains("psmob-header-spacer-div")||b.classList.contains("psmob-logo-span")}function S(a,b){var c=R(b);return ua(a,c)?null:c}function T(a){var b=[];for(a=a.firstChild;a;a=a.nextSibling)null!=R(a)&&b.push(a);return b}
function U(a,b,c){for(b=b.firstChild;b;b=b.nextSibling)null!=S(a,b)&&c.call(a,b)}m=Q.prototype;
m.u=function(a){var b=window.getComputedStyle(a),c=O(a);if(c&&(c=this.k.e[c])&&c.width&&c.height){var d=c.height;b.getPropertyValue("background-repeat");if(c.width>this.b){var d=Math.round(this.b/c.width*c.height),e="background-size:"+this.b+"px "+d+"px;background-repeat:no-repeat;",f=K(b,"height");c.height==f&&(e+="height:"+d+"px;");N(a,e)}M(a,"min-height",""+d+"px")}if("PRE"==a.tagName.toUpperCase()||"pre"==b.getPropertyValue("white-space")&&a.offsetWidth>this.b)a.style.overflowX="scroll";U(this,
a,this.u)};function va(a){M(a,"overflow-x","auto");M(a,"width","auto");M(a,"display","block")}m.G=function(a){wa(this,a,0)};
function wa(a,b,c){var d;d=b.getBoundingClientRect();var e=document.body,f=document.documentElement||e.parentNode||e,e="pageXOffset"in window?window.pageXOffset:f.scrollLeft,f="pageYOffset"in window?window.pageYOffset:f.scrollTop;d.top+=f;d.bottom+=f;d.left+=e;d.right+=e;if(d)c=d.top,d=d.bottom;else{if(b.offsetParent==b.parentNode)c+=b.offsetTop;else if(b.offsetParent!=b.parentNode.parentNode)return null;d=c+b.offsetHeight-1}if(ua(a,b))return d;d=c-1;var g=window.getComputedStyle(b);if(!g)return null;
e=K(g,"min-height");null!=e&&(d+=e);for(var e=c+b.offsetHeight-1,k=f=!1,h,q=b.firstChild;q;q=q.nextSibling)if(h=R(q)){var l=window.getComputedStyle(h);l&&"absolute"==l.position&&"0px"!=l.getPropertyValue("height")&&(k=!0);h=wa(a,h,c);null!=h&&(f=!0,d=Math.max(d,h))}if("fixed"==g.getPropertyValue("position")&&f)return null;a=b.tagName.toUpperCase();"BODY"!=a&&(g=e-c+1,f?d!=e&&(k?M(b,"height",""+(d-c+1)+"px"):M(b,"height","auto")):("IMG"!=a&&0<g&&""==b.style.backgroundSize&&(L(b,"height"),M(b,"height",
"auto"),b.offsetHeight&&(e=c+b.offsetHeight)),d=e));return d}
m.t=function(a){for(var b=T(a),c=0;c<b.length;++c)this.t(b[c]);if(!(a.offsetWidth<=this.b))if(b=a.tagName.toUpperCase(),"TABLE"==b){a:{b=0;for(c=a.firstChild;c;c=c.nextSibling)for(var d=c.firstChild;d;d=d.nextSibling){var e=c.tagName.toUpperCase();if("THEAD"==e||"TFOOT"==e){b=!0;break a}for(e=d.firstChild;e;e=e.nextSibling){if(e.tagName&&"TH"==e.tagName.toUpperCase()){b=!0;break a}++b}}b=3*xa(this,a)>b?!1:!0}if(b)va(a);else if("CSS1Compat"!==document.compatMode){var f,g,k,h=document.createElement("DIV");
h.style.display="inline-block";for(var q=T(a),b=0;b<q.length;++b)for(var l=T(q[b]),c=0;c<l.length;++c)for(var v=T(l[c]),d=0;d<v.length;++d)if(g=v[d],1==g.childNodes.length)f=g.childNodes[0],g.removeChild(f),h.appendChild(f);else if(1<g.childNodes.length){k=document.createElement("DIV");k.style.display="inline-block";for(var oa=T(g),e=0;e<oa.length;++e)f=oa[e],g.removeChild(f),k.appendChild(f);h.appendChild(k)}a.parentNode.replaceChild(h,a)}else for(L(a,"width"),M(a,"max-width","100%"),a=a.firstChild;a;a=
a.nextSibling)if(b=R(a),null!=b)for(L(b,"width"),M(b,"max-width","100%"),b=b.firstChild;b;b=b.nextSibling)if(c=R(b),null!=c&&"TR"==c.tagName.toUpperCase())for(L(c,"width"),M(c,"max-width","100%"),c=c.firstChild;c;c=c.nextSibling)d=R(c),null!=d&&"TD"==d.tagName.toUpperCase()&&(M(d,"max-width","100%"),M(d,"display","inline-block"))}else{c=null;d=a.offsetWidth;e=a.offsetHeight;f="img";if("IMG"==b)c=a.getAttribute("src");else if(f="background-image",c=O(a),g=null==c?null:this.k.e[c])d=g.width,e=g.height;
null!=c?(g=d/this.b,1<g&&(g=e/g,console.log("Shrinking "+f+" "+c+" from "+d+"x"+e+" to "+this.b+"x"+g),"IMG"==b?(M(a,"width",""+this.b+"px"),M(a,"height",""+g+"px")):M(a,"background-size",""+this.b+"px "+g+"px"))):"CODE"==b||"PRE"==b||"UL"==b?va(a):sa[b]?(M(a,"max-width","100%"),L(a,"width")):console.log("Punting on resize of "+b+" which wants to be "+a.offsetWidth+" but this.maxWidth_="+this.b)}};
function xa(a,b){var c=0,d=b.tagName.toUpperCase();"DIV"!=d&&"TABLE"!=d&&"UL"!=d||++c;for(d=b.firstChild;d;d=d.nextSibling){var e=R(d);null!=e&&(c+=xa(a,e))}return c}m.D=function(a){var b=document.body.style.display;document.body.style.display="none";this.n(a);document.body.style.display=b};
m.n=function(a){var b=window.getComputedStyle(a);"nowrap"==b.getPropertyValue("white-space")&&M(a,"white-space","normal");U(this,a,this.n);var b=window.getComputedStyle(a),c,d,e;for(c=0;c<ta.length;++c)d=ta[c],(e=b.getPropertyValue(d))&&"100%"!=e&&"auto"!=e&&0<e.length&&"%"==e[e.length-1]&&M(a,d,"auto");c=a.tagName.toUpperCase();var f="UL"==c||"OL"==c,g="BODY"==c,k="";for(c=0;c<ra.length;++c){d=ra[c];if(e=f)e=d.length-5,e=0<=e&&d.indexOf("-left",e)==e;e||g&&0==d.lastIndexOf("margin-",0)||(e=K(b,d),
null!=e&&(4<e?k+=d+":4px !important;":0>e&&(k+=d+":0px !important;")))}N(a,k)};
m.s=function(a){U(this,a,this.s);if("IMG"==a.tagName.toUpperCase()){var b=window.getComputedStyle(a),c=pa(a,"width"),d=pa(a,"height");if(c&&d&&b){var e=K(b,"width"),b=K(b,"height");if(e&&b&&(e/=c,b/=d,.95<(e>b?b/e:e/b)||(console.log("aspect ratio problem for "+a.getAttribute("src")),1==a.naturalHeight&&1==a.naturalWidth?(b=Math.min(e,b),L(a,"width"),L(a,"height"),a.style.width=c*b,a.style.height=d*b):e>b?L(a,"height"):(L(a,"width"),L(a,"height"),a.style.maxHeight=d)),.25>e)){for(console.log("overshrinkage for "+
a.getAttribute("src"));a&&"TD"!=a.tagName.toUpperCase();)a=a.parentNode;if(a&&(c=a.parentNode)){d=0;for(a=c.firstChild;a;a=a.nextSibling)a.tagName&&"TD"==a.tagName.toUpperCase()&&++d;if(1<d)for(d="width:"+Math.round(100/d)+"%;",c=c.firstChild;c;c=c.nextSibling)a=R(c),null!=a&&"TD"==a.tagName.toUpperCase()&&N(a,d)}}}}};
m.v=function(a){var b=window.getComputedStyle(a).getPropertyValue("position");if("fixed"==b)return"fixed";var c,d,e,f=[],g=[];for(d=a.firstChild;d;d=d.nextSibling)if(c=S(this,d),null!=c&&(e=this.v(c),"fixed"!=e&&null!=S(this,c)))if("absolute"==e)g.push(c);else{var k=window.getComputedStyle(c);e=k.getPropertyValue("float");var h="right"==e;if(h||"left"==e)M(c,"float","none"),"none"!=k.getPropertyValue("display")&&M(c,"display","inline-block");h&&f.push(c)}for(c=f.length-1;0<=c;--c)d=f[c],a.removeChild(d);
for(c=f.length-1;0<=c;--c)d=f[c],a.appendChild(d);return b};
m.q=function(a){if("fixed"!=window.getComputedStyle(a).getPropertyValue("position")){var b,c,d=[],e=[];for(c=a.firstChild;c;c=c.nextSibling)if(a=S(this,c),null!=a){var f=window.getComputedStyle(a);b=f.getPropertyValue("position");"fixed"!=b&&"absolute"!=b&&0!=c.offsetWidth&&(d.push(a),e.push(f))}var g=null;for(c=0;c<d.length;++c)a=d[c],b=c<d.length-1?d[c+1]:null,f=a.offsetLeft+a.offsetWidth,(null==g||a.offsetLeft<g)&&(null==b||b.offsetLeft<f)&&(b=a,g=b.tagName.toUpperCase(),"INPUT"!=g&&"SELECT"!=
g&&(""==b.style.backgroundSize&&"auto"!=e[c].getPropertyValue("width")&&M(b,"width","auto"),"IMG"!=g&&b.removeAttribute("width"),L(b,"border-left"),L(b,"border-right"),L(b,"margin-left"),L(b,"margin-right"),L(b,"padding-left"),L(b,"padding-right"),b.className=""!=b.className?b.className+" psSingleColumn":"psSingleColumn"),this.q(a)),g=f}};
var V=[Q.prototype.u,"shrink wide elements",Q.prototype.v,"string floats",Q.prototype.D,"cleanup styles",Q.prototype.s,"repair distored images",Q.prototype.t,"resize if too wide",Q.prototype.q,"expand columns",Q.prototype.G,"resize vertically"];function ya(){this.i=[];this.w=!0}ya.prototype.B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAQAAABNTyozAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAATdJREFUeNrt0klOBTEQREHfDI7FTEn/4M2GBULQo22wK+ICKT1lKQAAAAAAAAAAAAAAAAAA/Jm7rmv3o+W5laU8d1uLspQYLc/SLVF8rsVoefokii9rMVqe9oni21qMlqdtovhhLUbL0y5R/LIWo+VZylKeuuX5t4nW8tRPFBtrMV6gmolic+t9xA/VSjRonl6JBs7TI9HgeVonmiDPvkSPmfO0SjRRnhaJJstTO9GEeWom2s7zVgZVI9HEeWokmjzPvkQPmfNcSZQkz9lEifKcSZQsz9FECfMcSZQ0z95E23ley8S2E6XOcz3R9HmuJUqR53yiNHnOJUqV53iidHmOJUqZZ3+itHn2JXopyd3kOZ9IntVE8qwmkmc1kTyrieRZTSTPaiJ5AAAAAAAAAAAAAAAAAGjgA62rM0XB6dNxAAAAAElFTkSuQmCC";
function W(a,b,c){var d=[];for(b=b.firstChild;b;b=b.nextSibling)"UL"==b.tagName?d=A(d,W(a,b,c+1)):("A"==b.tagName&&(b.setAttribute("data-mobilize-nav-level",c),d.push(b)),d=A(d,W(a,b,c)));return d}function za(){var a=document.querySelector(".psmob-nav-panel"),b=document.querySelector(".psmob-header-bar");E(b,"open");E(a,"open");E(document.body,"noscroll")}
function Aa(a){var b=document.querySelector(".psmob-menu-button");document.body.addEventListener("click",function(a){if(b.contains(a.target))za();else{var d=document.querySelector(".psmob-nav-panel");C(d,"open")&&!d.contains(a.target)&&(za(),a.stopPropagation(),a.preventDefault())}}.bind(a),!0)}
function Ba(){document.querySelector("nav.psmob-nav-panel > ul").addEventListener("click",function(a){var b=a.target;a=s(b)&&1==b.nodeType&&C(a.target,"psmob-menu-expand-icon")?a.target.parentNode:a.target;"DIV"==a.tagName&&(E(a.nextSibling,"open"),E(a.firstChild,"open"))})};function X(){this.f=0;this.e={};this.H=Date.now();this.o=!1;this.d=this.l=this.r=this.a=this.c=0;this.h=!1;this.m=this.j=0;this.g=new Q(this);this.g.p["ps-progress-scrim"]=!0}function Ca(a){if(0==a.d){console.log("mobilizing site");var b=window.extractTheme;b&&!P()?(++a.j,b(a.e,a.F.bind(a))):Y(a)}else a.h=!0}
X.prototype.F=function(){--this.j;Z(this,this.c,"extract theme");if(window.psNavMode){var a=new ya;console.log("Starting nav resynthesis.");a.i=da(B(document.querySelectorAll('[data-mobile-role="navigational"]')),B(document.querySelectorAll(".topNavList")));for(var b=document.getElementsByTagName("*"),c=0,d;d=b[c];c++){var e=window.getComputedStyle(d);if("fixed"==e.getPropertyValue("position")){var f=d.getBoundingClientRect().top;d.style.top=String(60+f)+"px"}999999<=e.getPropertyValue("z-index")&&
(console.log("Element z-index exceeded 999999, setting to 999998."),d.style.zIndex=999998)}c=document.createElement("div");document.body.insertBefore(c,document.body.childNodes[0]);D(c,"psmob-header-spacer-div");b=document.createElement("header");document.body.insertBefore(b,c);D(b,"psmob-header-bar");b.innerHTML=psHeaderBarHtml;b.style.borderBottom="thin solid "+psMenuFrontColor;(c=document.getElementsByClassName("psmob-logo-span")[0])&&b.appendChild(c);if(c=document.querySelector('[data-mobile-role="logo"]'))b.style.backgroundColor=
c.style.backgroundColor;b=a.w&&psMenuBackColor?psMenuBackColor:"#3c78d8";b=".psmob-header-bar { background-color: "+b+" }\n.psmob-nav-panel { background-color: "+(a.w&&psMenuFrontColor?psMenuFrontColor:"white")+" }\n.psmob-nav-panel > ul li { color: "+b+" }\n.psmob-nav-panel > ul li a { color: "+b+" }\n";c=document.createElement("style");c.type="text/css";c.appendChild(document.createTextNode(b));document.head.appendChild(c);if(0!=a.i.length&&!P()){b=document.getElementsByClassName("psmob-header-bar")[0];
b=document.body.insertBefore(document.createElement("nav"),b.nextSibling);D(b,"psmob-nav-panel");b=b.appendChild(document.createElement("ul"));D(b,"open");for(c=0;d=a.i[c];c++){d.setAttribute("data-mobilize-nav-section",c);e=W(a,d,0);f=[];f.push(b);for(var g=0,k=e.length;g<k;g++){var h=e[g].getAttribute("data-mobilize-nav-level"),q=g+1==k?h:e[g+1].getAttribute("data-mobilize-nav-level");if(h<q){var l=document.createElement("li"),h=l.appendChild(document.createElement("div")),q=h.appendChild(document.createElement("img"));
q.setAttribute("src",a.B);D(q,"psmob-menu-expand-icon");h.appendChild(document.createTextNode(e[g].textContent||e[g].innerText));f[f.length-1].appendChild(l);h=document.createElement("ul");l.appendChild(h);f.push(h)}else for(l=document.createElement("li"),f[f.length-1].appendChild(l),l.appendChild(e[g].cloneNode(!0)),l=h-q;0<l&&1<f.length;)f.pop(),l--}d.parentNode.removeChild(d)}d=document.querySelector(".psmob-nav-panel > ul a");e={};b=[];for(c=0;f=d[c];c++)f.href in e?(g=f.innerHTML.toLowerCase(),
-1==e[f.href].indexOf(g)?e[f.href].push(g):"LI"==f.parentNode.tagName&&b.push(f.parentNode)):(e[f.href]=[],e[f.href].push(f.innerHTML.toLowerCase()));for(c=0;d=b[c];c++)d.parentNode.removeChild(d);c=document.querySelectorAll(".psmob-nav-panel *");for(b=0;d=c[b];b++)d.removeAttribute("style"),d.removeAttribute("width"),d.removeAttribute("height"),"A"==d.tagName&&""==d.innerText&&d.hasAttribute("title")&&d.appendChild(document.createTextNode(d.getAttribute("title")));c=document.querySelectorAll(".psmob-nav-panel img:not(.psmob-menu-expand-icon)");
for(b=0;d=c[b];++b)e=Math.min(2*d.naturalHeight,40),d.setAttribute("height",e);Aa(a);Ba()}Z(this,this.c,"navigation")}Y(this)};X.prototype.C=function(){--this.d;Z(this,1E3,"background image");0==this.d&&this.h&&(Ca(this),this.h=!1)};function Da(a,b){var c=S(a.g,b);if(null!=c){var d=O(c);if(d&&(0==d.lastIndexOf("http://",0)||0==d.lastIndexOf("https://",0))&&!a.e[d]){var e=new Image;++a.d;e.onload=a.C.bind(a);e.onerror=e.onload;e.src=d;a.e[d]=e}for(c=c.firstChild;c;c=c.nextSibling)Da(a,c)}}
X.prototype.xhrSendHook=function(){++this.f};X.prototype.xhrResponseHook=function(){--this.f;this.a+=this.m;Y(this)};function Y(a){if(0==a.f&&0==a.j&&0==a.d){var b=a.g;if(null!=document.body)for(var c=0;c<V.length;++c){V[c].call(b,document.body);++c;var d=b.k;Z(d,d.c,V[c])}if(a.o){if(a=document.getElementById("ps-progress-remove"))a.textContent="Remove Progress Bar and show mobilized site"}else Ea()}}
function Fa(a){$.o=a;var b=document.getElementById("ps-progress-log");b&&(b.style.color=a?"#333":"white");a&&(a=document.getElementById("ps-progress-show-log"))&&(a.style.display="none")}function Z(a,b,c){a.l+=b;b=100;0<a.a&&(b=Math.round(100*a.l/a.a),100<b&&(b=100));if(b!=a.r){var d=document.getElementById("ps-progress-span");d&&(d.style.width=b+"%");a.r=b}a=""+b+"% "+(Date.now()-a.H)+"ms: "+c;console.log(a);if(c=document.getElementById("ps-progress-log"))c.textContent+=a+"\n"}
function Ea(){var a=document.getElementById("ps-progress-scrim");a&&(a.style.display="none",a.parentNode.removeChild(a))}var $=new X;Fa(window.psDebugMode);$.c=qa(document.body);$.m=V.length/2*$.c;$.a+=$.m;window.extractTheme&&P()&&($.a+=$.c,window.psNavMode&&($.a+=$.c));null!=document.body&&Da($,document.body);$.a+=1E3*$.d;window.pagespeedXhrHijackSetListener($);Ca($);p("psGetVisiblity",function(a){a.getAttribute("ps-save-visibility")||(a=window.getComputedStyle(a))&&a.getPropertyValue("visibility")});
p("psSetDebugMode",function(){Fa(!0)});p("psRemoveProgressBar",function(){Ea()});})();