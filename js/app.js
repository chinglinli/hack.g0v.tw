(function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},a=function(e,t){var n,r,a=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var o=0,i=n.length;i>o;o++)r=n[o],".."===r?a.pop():"."!==r&&""!==r&&a.push(r);return a.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},i=function(t){return function(n){var r=o(t),i=a(r,n);return e.require(i)}},l=function(e,t){var r={id:e,exports:{}};t(r.exports,i(e),r);var a=n[e]=r.exports;return a},u=function(e){var o=a(e,".");if(r(n,o))return n[o];if(r(t,o))return l(o,t[o]);var i=a(o,"./index");if(r(n,i))return n[i];if(r(t,i))return l(i,t[i]);throw Error('Cannot find module "'+e+'"')},s=function(e,n){if("object"==typeof e)for(var a in e)r(e,a)&&(t[a]=e[a]);else t[e]=n};e.require=u,e.require.define=s,e.require.register=s,e.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","irc.g0v.tw","hub.g0v.tw","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("authz",{url:"/authz/{request}",templateUrl:"/partials/authz.html",controller:"AuthzCtrl"}).state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("irc",{url:"/irc",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("irc.log",{url:"/log"}).state("project",{url:"/project",templateUrl:"/partials/project.html",controller:"ProjectCtrl"}).state("project.detail",{url:"/{projectName}"}).state("people",{url:"/people",templateUrl:"/partials/people.html",controller:"PeopleCtrl"}).state("tag",{url:"/tag/{tag}",templateUrl:"/partials/tag.html",controller:"TagControl"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/g0v-hackath4n"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=window.global.config.BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window?"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0:void 0}),e.safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}}))}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;r>++n;)if(e===t[n]&&n in t)return!0;return!1}var n="".replace,r=[].slice;angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$state","$rootScope","$timeout"].concat(function(e,t,n,r){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","$cookies","HackFolder"].concat(function(t,n,r,a){var o;return e(t,{hasViewMode:function(e){return e.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:a.iframes,docs:a.docs,tree:a.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)[^/]*\//)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(e){return window.open(e.url,e.id),!1},activate:a.activate,saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,a){return t.saveModalOpen=e,a&&(t.saveBtn=$(a.target)),n&&(r.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==r.savebtn},HackFolder:a,iframeCallback:function(e){return function(r){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",r,e),n.current.title=e.title+" – hack.g0v.tw",e.noiframe="fail"===r?!0:!1,"unsure"===r?e.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return a.getIndex(e,!0,function(){})}}),t.$watch("hackId",function(e){return a.getIndex(e,!1,function(){var e,r;return t.$watch("docId",function(e){return e?a.activate(e):void 0}),!t.docId&&(e=null!=(r=a.docs[0])?r.id:void 0)?n.transitionTo("hack.doc",{docId:e,hackId:t.hackId}):void 0})}),t.hackId=(o=n.params.hackId)?o:"g0v-hackath4n",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0})})}).directive("resize",["$window"].concat(function(e){return function(t,n){var r;return r=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var a,o,i;return a=e(r.ngxIframe)(t),o=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),t&&$.browser.mozilla?a("unsure"):a(n?"ok":"fail")},$(n).load(function(){return clearTimeout(i),o(this.contentWindow,!0)}),i=setTimeout(function(){return o(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var a,o;return a=e(r.ngxClickMeta),o=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return o(e)&&!a(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t){var n;return n=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return t.$apply(n)}),t.$watch("docs",n),n()}})).factory({HackFolder:["$http"].concat(function(a){var o,i,l,u,s;return o={},i=[],l=[],s={iframes:o,docs:i,tree:l,activate:function(e,n){function r(e){return e.id}var a,u,s,c,p,d,f,h,g,m,v;for(null==n&&(n=!1),u=function(){var t,n,r,o=[];for(t=0,r=(n=i).length;r>t;++t)a=n[t],a.id===e&&o.push(a);return o}()[0],s=u.type,c=0,d=(p=l).length;d>c;++c)f=p[c],(h=null!=f?null!=(g=f.children)?g.map(r):void 0:void 0)&&t(e,h)&&(f.expand=!0);return m=n?"edit":"view",v=function(){var t;switch(t=[s],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+m;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+m;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=u.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),u.hashtag&&(v+=u.hashtag),(h=o[e])?(h.src=v,h.mode=m,h):o[e]={src:v,doc:u,mode:m}},getIndex:function(e,t,n){var r,o,l=this;return u!==e||t?(r=0,o=function(){return a.get("https://www.ethercalc.org/_/"+e+"/csv").error(function(){return++r>3?void 0:setTimeout(o,1e3)}).success(function(t){return u=e,i.length=0,l.loadCsv(t,n)})},o()):n(i)},loadCsv:function(t,a){function o(){try{return JSON.parse(null!=x?x:"{}")}catch(e){}}function u(){var e;switch(e=[w],!1){case void 0!==e[0]:return d||y&&(d=y,y=null),{title:y,type:"dummy",id:"dummy"};case!(j=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:j[1]};case!(j=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:j[1]};case!(j=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:j[1]};case!(j=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:j[1]};case!(j=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:j[1]};case!(j=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:j[1],id:j[2]};case!(j=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(w)),icon:"http://g.etfv.co/"+j[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",w):void 0}}function c(e){return e.length}function p(e){var t,n,a,o,i;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],a=t[1],o=t[2],i=r.call(t,3),{content:a,"class":null!=o?o:"warning"}}var d,f,h,g,m,v,b,$,w,y,x,k,C,E,_,S,P,j,D,T,M,F,A,O;for(t=n.call(t,/^\"?#.*\n/gm,""),h=[],g=0,v=(m=t.split(/\n/)).length;v>g;++g)b=m[g],b&&($=b.split(/,/),w=$[0],y=$[1],x=$[2],k=$[3],C=r.call($,4),y=n.call(y,/^"|"$/g,""),x&&(x=n.call(x,/^"|"$/g,"")),x&&(x=x.replace(/""/g,'"')),k&&(k=n.call(k,/^"|"$/g,"")),$=w.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),E=$[0],_=$[1],w=$[2],S=$[3],P=e({hashtag:S,url:w,title:y,indent:_.length,opts:o()},u()),"dummy"!==P.type||null!=($=P.title)&&$.length?h.push(e(e({icon:"/img/"+P.type+".png"},P),{tags:(null!=($=null!=(D=P.opts)?D.tags:void 0)?$:[]).concat((null!=($=null!=k?k.split(","):void 0)?$:[]).filter(c).map(p))})):h.push(null));for(f=h,i.splice.apply(i,[0,i.length].concat(r.call(f.filter(function(e){return null!=e})))),T=0,h=[],g=0,v=(m=i).length;v>g;++g)F=g,P=m[g],F>0&&P.indent?(A=i[T],O=null!=($=A.children)?$:A.children=[],O.push(P),h.push(null)):(T=F,h.push(P));return M=h,M=M.filter(function(e){return null!=e}),M=M.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:5>e.children.length),e}),l.splice.apply(l,[0,l.length].concat(r.call(M))),s.folderTitle=d,a(i)}}})})}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;r>++n;)if(e===t[n]&&n in t)return!0;return!1}function n(e,t,n){function r(e,t,o){var l,u,s,c,p,d,f,h;if(null==e||null==t)return e===t;if(e.__placeholder__||t.__placeholder__)return!0;if(e===t)return 0!==e||1/e==1/t;if(l=a.call(e),a.call(t)!=l)return!1;switch(l){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(u=o.length;u--;)if(o[u]==e)return!0;if(o.push(e),s=0,c=!0,"[object Array]"==l){if(p=e.length,d=t.length,first){switch(n){case"===":c=p===d;break;case"<==":c=d>=p;break;case"<<=":c=d>p}s=p,first=!1}else c=p===d,s=p;if(c)for(;s--&&(c=s in e==s in t&&r(e[s],t[s],o)););}else{if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return!1;for(f in e)if(i(e,f)&&(s++,!(c=i(t,f)&&r(e[f],t[f],o))))break;if(c){h=0;for(f in t)i(t,f)&&++h;first?c="<<="===n?h>s:"<=="===n?h>=s:s===h:(first=!1,c=s===h)}}return o.pop(),c}var a={}.toString,o={}.hasOwnProperty,i=function(e,t){return o.call(e,t)};return first=!0,r(e,t,[])}angular.module("hub.g0v.tw",["ui.state","firebase"]).config(["$httpProvider"].concat(function(e){var t,n;return e.defaults.useXDomain=!0,n=(t=e.defaults.headers.common)["X-Requested-With"],delete t["X-Requested-With"],n})).controller({AuthzCtrl:["$scope","$window","$state","Hub"].concat(function(e,t,n,r){return e.$on("event:auth-logout",function(){return e.safeApply(e,function(){return"function"==typeof e.cleanup?e.cleanup():void 0})}),e.$on("event:auth-login",function(a,o){var i;return i=o.user,e.$apply(function(){var e,a;return e=r.root.child("following/"+i.username),a=r.root.child("authz/"+n.params.request),e.once("value",function(e){var o;return o=e.val(),a.once("value",function(e){var l,u,s;return l=e.val(),u=null!=(s=r.authUser.email)?s:null!=(s=r.authUser.emails)?s[0]:void 0,a.update({avatar:i.avatar,username:i.username,following:o,email:u,displayName:null!=(s=i.displayName)?s:i.username},function(e){var r;return e?console.log(e):(r=l.uri)?t.location.href=r+"/"+n.params.request:void 0})})})})})})}).controller({TagControl:["$scope","$state","$location","Hub"].concat(function(t,n,r,a){return t.$watch("$state.params.tag",function(e){return t.tag=e,t.loadDisqus(e)}),e(t,{toggle_tag:function(e){var t;return t=angular.element(e.srcElement),"none"===t.parent().next().css("display")?t.parent().next().css("display","block"):t.parent().next().css("display","none")},gotag:function(e){return t.go("/tag/"+encodeURIComponent(e))},projects:a.projects,people:a.people,loadDisqus:function(e){var t;if("localhost"!==r.host())return window.disqus_shortname="g0vhub",window.disqus_identifier=encodeURIComponent("tag-"+e),window.disqus_url="http://hack.g0v.tw/tag/"+e,window.disqus_title="g0v.tw 》 tag  》"+e,"undefined"!=typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){var e;return e=this.page,e.disqus_title=window.disqus_title,e.disqus_identifier=window.disqus_identifier,e.disqus_url=window.disqus_url,e}}),t=document.getElementById("disqusCommentScript"),t&&(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).removeChild(t),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="http://angularjs.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}(),angular.element(document.getElementById("disqus_thread")).html("")}})})}).controller({ProjectCtrl:["$scope","$state","$location","$http","$timeout","Hub","angularFire"].concat(function(n,r,a,o,i,l,u){return n.$on("event:hub-ready",function(){return i(function(){return n.safeApply(n,function(){var e,t,r,a,o,i;for(t=[],r=0,o=(a=l.projects).length;o>r;++r)i=a[r],i.thumbnail&&t.push(i);return e=t,n.featured=e[Math.floor(Math.random()*e.length)]})})}),e(n,{avatarFor:function(e){var t,n;return null!=(t=null!=(n=l.people.getByName(e))?n.avatar:void 0)?t:"http://avatars.io/github/"+e},people:l.people,projects:l.projects,opts:{},remove_tag:function(e,t){var n;return e.keywords=function(){var r,a,o,i=[];for(r=0,o=(a=e.keywords).length;o>r;++r)n=a[r],n!==t&&i.push(n);return i}()},add_tag:function(e){return null==e.keywords&&(e.keywords=[]),t(n.opts.newtag,e.keywords)||e.keywords.push(n.opts.newtag),n.opts.newtag="",!1},addfromURL:function(t,r){var a;return t||(t=prompt("Enter github user/repo with g0v.json","")),a="https://api.github.com/repos/"+t+"/contents/g0v.json",o.get(a).error(function(e){return console.log(e)}).success(function(t){var a;return a=JSON.parse(Base64.decode(null!=t?t.content:void 0)),e(n.project,a),"function"==typeof r?r():void 0})},newProject:function(){return n.opts.isnew=!0,n.opts.editMode=!0,n.project&&("function"==typeof n.cleanup&&n.cleanup(),delete n.project,r.transitionTo("project",{})),n.project={}},checkProject:function(e,t){var r;return n.opts.warning=null,r=t.filter(function(t){return!e[t]}),r.length>0&&(n.opts.warning="g0v.json 無法符合格式，缺少了 "+r.join(", ")+" 關鍵字"),n.opts.warning},saveNew:function(e){var t,i,u,s;return e.github?angular.element(".github-url").val().match(/^https?:\/\/github.com\/.*[a-zA-Z\d]\/.*[a-zA-Z\d]/)?l.loginUser?(t=e.github.split("/"),i=t[0],i=t[1],i=t[2],u=t[3],s=t[4],o.get("https://api.github.com/repos/"+u+"/"+s+"/contents/").success(function(e){var t,a,o,i,c,p;for(t=!1,a=null,o=0,i=e.length;i>o;++o)c=e[o],p=c.name,p.toLowerCase().match("g0v.json")&&(t=!0,a=c);return t?n.addfromURL(u+"/"+s,function(){var e,t;return e=n.project,n.checkProject(e,["name","keywords","description","description_zh","homepage"]),(t=n.opts.warning)?t:(l.root.child("projects/"+e.name).set((e.created_by=l.loginUser.username,e)),r.transitionTo("project.detail",{projectName:e.name}))}):n.opts.warning="Github 專案底下請放入 g0v.json"})):(alert("請先進行登入動作"),a.path("/people")):n.opts.warning="Github 網址不符合格式":n.opts.warning="Github 網址不可為空"}}),n.$watch("$state.params.projectName",function(e){var t;if(e)return n.projectName=e,n.opts.editMode=!1,"function"==typeof n.cleanup&&n.cleanup(),t=u(l.root.child("projects/"+e),n,"project",{}),t.then(function(e){return n.cleanup=e})})})}).controller({PeopleCtrl:["$scope","$state","Hub","angularFire"].concat(function(r,a,o,i){return e(r,{gotag:function(e){return r.go("/tag/"+encodeURIComponent(e))},togglePerson:function(e){return r.showPerson=r.showPerson===e?null:e},remove_tag:function(e,t){var n;return e.tags=function(){var r,a,o,i=[];for(r=0,o=(a=e.tags).length;o>r;++r)n=a[r],n!==t&&i.push(n);return i}()},add_tag:function(e,n){var a;return null==e.tags&&(e.tags=[]),a=null!=n?n:r.newtag,t(a,e.tags)||e.tags.push(a),n||(r.newtag=""),!1},follow_person:function(e){return t(e,r.following)||r.following.push(e),r.followlist[e]=1},unfollow_person:function(e){var t,n,a,o,i,l;for(t=[],n=0,o=(a=r.following).length;o>n;++n)i=a[n],i!==e&&t.push(i);return r.following=t,l=(a=r.followlist)[e],delete a[e],l},projects:o.projects,filteredpeople:o.filteredpeople,people:o.people,auth:o.auth,hub:o,setUsername:o.setUsername,loginAndMerge:o.loginAndMerge,loginAndLink:o.loginAndLink}),r.$on("event:auth-login",function(e,t){var n;return n=t.user,r.safeApply(r,function(){var e,t;return r.toSetUsername=!1,e=i(o.root.child("people/"+n.username),r,"user",{}),t=i(o.root.child("following/"+n.username),r,"following",[]),r.$watch("following",function(e){var t;return r.followlist=function(){var n,r,a,o={};for(n=0,a=(r=null!=e?e:[]).length;a>n;++n)t=r[n],o[t]=!0;return o}()}),t.then(function(e){var t;return(t=r.cleanup)?r.cleanup=function(){return t(),e()}:void 0}),e.then(function(e){var t;return r.safeApply(r),(t=r.cleanup)?r.cleanup=function(){return t(),e()}:void 0})})}),r.$on("event:auth-logout",function(){return r.safeApply(r,function(){return"function"==typeof r.cleanup&&r.cleanup(),delete r.user,r.toSetUsername=!1})}),r.$on("event:auth-userNameRequired",function(e,t){var n,a;return n=t.existing,a=t.username,r.safeApply(r,function(){return r.toSetUsername=!0,r.usernameInUse=n,r.newUsername=a})}),r.$watch("hub.inited",function(e){var t;if(e)return t=function(e){var t,n,a,o,i,l,u,s;if(e){t={};for(n in e)if(a=e[n],o=a.tags)for(i=0,l=o.length;l>i;++i)u=o[i],null==t[u]&&(t[u]=0),t[u]++;return r.tagcloud=function(){var e,n=[];for(u in e=t)s=e[u],s>1&&n.push({tag:u,count:s});return n}().sort(function(e,t){return t.count-e.count})}},o.people.length&&t(r.people),setTimeout(function(){return r.$watch("people",r.safeApply(r,function(){return t}))},100)}),r.$watch("search",function(){n(r.search,void 0,"===")||(r.filteredpeople=r.people)}),o.loginUser?r.$emit("event:auth-login",{user:o.loginUser}):void 0})}).factory({Hub:["$http","angularFireCollection","$rootScope"].concat(function(t,n,r){var a,o,i,l,u,s,c,p;return a=window.global.config.FIREBASE,o={},i=new Firebase(a),l=function(){return r.$broadcast("event:hub-ready"),o.inited=!0},u=n(i.child("people").limit(50)),s=n(i.child("people")),c=n(i.child("projects"),l),p=function(e,t,n){return e=e.replace(/\./g,","),i.child("people/"+e).once("value",function(a){var o;return o=a.val(),(t||o)&&r.$broadcast("event:auth-userNameRequired",{existing:o,username:e}),o?void 0:"function"==typeof n?n():void 0})},o.setUsername=function(e){return o.authUser?p(e,!1,function(){var t,n,a,l,u,s,c;return t={tags:[],username:e},t.auth=(n={},n[o.authUser.provider+""]={id:(a=o.authUser).id,username:null!=(l=a.username)?l:""},n),o.authUser.displayName&&(t.displayName=o.authUser.displayName),t.avatar=function(){var e;switch(e=[o.authUser.provider],!1){case"github"!==e[0]:return e=o.authUser.avatar_url.match(/https:\/\/secure.gravatar.com\/avatar\/(\w+)/),u=e[0],s=e[1],"http://avatars.io/gravatar/"+s;case"twitter"!==e[0]:return"http://avatars.io/twitter/"+o.authUser.username;case"persona"!==e[0]:return"http://avatars.io/gravatar/"+o.authUser.hash;default:return"http://avatars.io/"+o.authUser.provider+"/"+o.authUser.id}}(),c=i,c.child("auth-map/"+o.authUser.provider+"/"+o.authUser.id).set({username:e}),c.child("people/"+e).set(t),i.child("people/"+e).once("value",function(e){return o.loginUser=e.val(),r.$broadcast("event:auth-login",{user:o.loginUser})})}):void 0},o.loginAndMerge=function(e){var t,n;return t=function(e){var t,n,a,l;return t=o.authUser,n=i.child("people/"+e+"/auth").update((a={},a[t.provider+""]={id:t.id,username:null!=(l=t.username)?l:""},a)),i.auth(t.firebaseAuthToken,function(){return i.child("auth-map/"+t.provider+"/"+t.id).set({username:e}),r.$broadcast("event:auth-login",{user:o.loginUser})})},n=new FirebaseSimpleLogin(i,function(e,n){return e&&console.log(e),n?i.child("auth-map/"+n.provider+"/"+n.id).once("value",function(e){var n,r;return null!=(n=e.val())&&(r=n.username,n)?t(r):void 0}):void 0}),n.login(e)},o.loginAndLink=function(e){return o.authLink=o.authUser,o.authLinkUser=o.loginUser,o.auth.login(e)},o.auth=new FirebaseSimpleLogin(i,function(e,t){return e?console.log(e):t?(o.authUser=t,i.child("auth-map/"+t.provider+"/"+t.id).once("value",function(e){var n,a,l,u,s;return!o.authLink&&null!=(n=e.val())&&(a=n.username,n)?(l=i.child("people/"+a),l.once("value",function(e){return o.loginUser=e.val(),o.loginUser?r.$broadcast("event:auth-login",{user:o.loginUser}):p(a,!0)})):(u=o.authLink)?(a=o.authLinkUser.username,i.child("auth-map/"+t.provider+"/"+t.id).set({username:a}),i.auth(u.firebaseAuthToken,function(){var e,n;return i.child("people/"+a+"/auth").update((e={},e[t.provider+""]={id:t.id,username:null!=(n=t.username)?n:""},e)),e=o.authLink,delete o.authLink,e})):(null==(n=o.authUser).username&&(n.username=null!=(n=o.authUser.email)?null!=(s=n.split("@"))?s[0]:void 0:void 0),p(o.authUser.username,!0))})):r.$broadcast("event:auth-logout")}),e(o,{root:i,people:s,projects:c,filteredpeople:u})})})}.call(this),function(){angular.module("irc.g0v.tw",["ui.state"]).controller({IRC:["$scope","$state"].concat(function(e,t){return e.$watch("$state.current.name",function(n){switch(n){case"irc":e.ircEnabled=!0;break;case"irc.log":e.irclogEnabled=!0}return e.ircActive=t.includes("irc")})})})}.call(this),function(){var e={};e.exports={BUILD:"git-c0e0c99",FIREBASE:"https://g0vhub.firebaseio.com"},window.global||(window.global={}),window.global.config=e.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);