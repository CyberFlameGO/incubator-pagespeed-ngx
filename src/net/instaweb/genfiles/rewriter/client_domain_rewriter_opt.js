(function(){var d=window;d.pagespeed=d.pagespeed||{};var e=d.pagespeed,h=function(a){this.a=a},k=function(a,b){b=b||d.event;if("keypress"!=b.type||13==b.keyCode)for(var c=b.target;null!=c;c=c.parentNode)if("A"==c.tagName){for(var g=a,c=c.href,l=b,f=0;f<g.a.length;f++)if(0==c.indexOf(g.a[f])){d.location=d.location.protocol+"//"+d.location.hostname+"/"+c.substr(g.a[f].length);l.preventDefault();break}break}},m=function(a){document.body.onclick=function(b){k(a,b)};document.body.onkeypress=function(b){k(a,b)}};
e.b=function(a){a=new h(a);e.clientDomainRewriter=a;m(a)};e.clientDomainRewriterInit=e.b;})();