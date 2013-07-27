(function(){"use strict";var e="undefined"!=typeof window?window:global;if(typeof e.require!="function"){var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},a=function(e,t){var n,r,a=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var o=0,i=n.length;i>o;o++)r=n[o],".."===r?a.pop():"."!==r&&""!==r&&a.push(r);return a.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},i=function(t){return function(n){var r=o(t),i=a(r,n);return e.require(i)}},l=function(e,t){var r={id:e,exports:{}};t(r.exports,i(e),r);var a=n[e]=r.exports;return a},u=function(e){var o=a(e,".");if(r(n,o))return n[o];if(r(t,o))return l(o,t[o]);var i=a(o,"./index");if(r(n,i))return n[i];if(r(t,i))return l(i,t[i]);throw Error('Cannot find module "'+e+'"')},s=function(e,n){if("object"==typeof e)for(var a in e)r(e,a)&&(t[a]=e[a]);else t[e]=n};e.require=u,e.require.define=s,e.require.register=s,e.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","irc.g0v.tw","hub.g0v.tw","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("authz",{url:"/authz/{request}",templateUrl:"/partials/authz.html",controller:"AuthzCtrl"}).state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("irc",{url:"/irc",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("irc.log",{url:"/log"}).state("project",{url:"/project",templateUrl:"/partials/project.html",controller:"ProjectCtrl"}).state("project.detail",{url:"/{projectName}"}).state("people",{url:"/people",templateUrl:"/partials/people.html",controller:"PeopleCtrl"}).state("tag",{url:"/tag/{tag}",templateUrl:"/partials/tag.html",controller:"TagControl"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/g0v-hackath4n"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=window.global.config.BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window?typeof window.ga=="function"?window.ga("send","pageview",{page:r.$$url,title:n}):void 0:void 0}),e.safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}}))}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;++n<r;)if(e===t[n]&&n in t)return!0;return!1}var n="".replace,r=[].slice;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$state","$rootScope","$timeout"].concat(function(e,t,n,r){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(t,n,r){var a;return e(t,{hasViewMode:function(e){return e.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,godoc:function(e){return t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(e){return window.open(e.url,e.id),!1},activate:r.activate,HackFolder:r,iframeCallback:function(e){return function(n){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,e),e.noiframe="fail"===n?!0:!1,"unsure"===n?e.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return r.getIndex(e,!0,function(){})}}),t.$watch("hackId",function(e){return r.getIndex(e,!1,function(){var e,a;return t.$watch("docId",function(e){return e?r.activate(e):void 0}),!t.docId&&(e=(a=r.docs[0])!=null?a.id:void 0)?n.transitionTo("hack.doc",{docId:e,hackId:t.hackId}):void 0})}),t.hackId=(a=n.params.hackId)?a:"g0v-hackath4n",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0})})}).directive("resize",["$window"].concat(function(e){return function(t,n){var r;return r=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var a,o,i;return a=e(r.ngxIframe)(t),o=function(e,t){var n;return n=!function(){try{return e.location=="about:blank"}catch(t){}}(),t&&$.browser.mozilla?a("unsure"):a(n?"ok":"fail")},$(n).load(function(){return clearTimeout(i),o(this.contentWindow,!0)}),i=setTimeout(function(){return o(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var a,o;return a=e(r.ngxClickMeta),o=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return o(e)&&!a(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t){var n;return n=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return t.$apply(n)}),t.$watch("docs",n),n()}})).factory({HackFolder:["$http"].concat(function(a){var o,i,l,u,s;return o={},i=[],l=[],s={iframes:o,docs:i,tree:l,activate:function(e,n){function r(e){return e.id}var a,u,s,c,p,d,f,h,g,m,v;for(null==n&&(n=!1),u=function(){var t,n,r,o=[];for(t=0,r=(n=i).length;r>t;++t)a=n[t],a.id===e&&o.push(a);return o}()[0],s=u.type,c=0,d=(p=l).length;d>c;++c)f=p[c],(h=null!=f?(g=f.children)!=null?g.map(r):void 0:void 0)&&t(e,h)&&(f.expand=!0);return m=n?"edit":"view",v=function(){var t;switch(t=[s],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+m;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+m;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+((t=u.site)!=null?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),u.hashtag&&(v+=u.hashtag),(h=o[e])?(h.src=v,h.mode=m,h):o[e]={src:v,doc:u,mode:m}},getIndex:function(e,t,n){var r,o,l=this;return u!==e||t?(r=0,o=function(){return a.get("https://www.ethercalc.org/_/"+e+"/csv").error(function(){return++r>3?void 0:setTimeout(o,1e3)}).success(function(t){return u=e,i.length=0,l.loadCsv(t,n)})},o()):n(i)},loadCsv:function(t,a){function o(){try{return JSON.parse(null!=x?x:"{}")}catch(e){}}function u(){var e;switch(e=[w],!1){case void 0!==e[0]:return d||y&&(d=y,y=null),{title:y,type:"dummy",id:"dummy"};case!(D=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:D[1]};case!(D=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:D[1],id:D[2]};case!(D=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(w)),icon:"http://g.etfv.co/"+D[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",w):void 0}}function c(e){return e.length}function p(e){var t,n,a,o,i;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],a=t[1],o=t[2],i=r.call(t,3),{content:a,"class":null!=o?o:"warning"}}var d,f,h,g,m,v,b,$,w,y,x,k,C,E,_,S,T,D,P,F,M,A,j,O;for(t=n.call(t,/^\"?#.*\n/gm,""),h=[],g=0,v=(m=t.split(/\n/)).length;v>g;++g)b=m[g],b&&($=b.split(/,/),w=$[0],y=$[1],x=$[2],k=$[3],C=r.call($,4),y=n.call(y,/^"|"$/g,""),x&&(x=n.call(x,/^"|"$/g,"")),x&&(x=x.replace(/""/g,'"')),k&&(k=n.call(k,/^"|"$/g,"")),$=w.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),E=$[0],_=$[1],w=$[2],S=$[3],T=e({hashtag:S,url:w,title:y,indent:_.length,opts:o()},u()),T.type!=="dummy"||($=T.title)!=null&&$.length?h.push(e(e({icon:"/img/"+T.type+".png"},T),{tags:(($=(P=T.opts)!=null?P.tags:void 0)!=null?$:[]).concat((($=null!=k?k.split(","):void 0)!=null?$:[]).filter(c).map(p))})):h.push(null));for(f=h,i.splice.apply(i,[0,i.length].concat(r.call(f.filter(function(e){return null!=e})))),F=0,h=[],g=0,v=(m=i).length;v>g;++g)A=g,T=m[g],A>0&&T.indent?(j=i[F],O=($=j.children)!=null?$:j.children=[],O.push(T),h.push(null)):(F=A,h.push(T));return M=h,M=M.filter(function(e){return null!=e}),M=M.map(function(e){var t,n;return e.children&&(e.expand=(t=(n=e.opts)!=null?n.expand:void 0)!=null?t:e.children.length<5),e}),l.splice.apply(l,[0,l.length].concat(r.call(M))),s.folderTitle=d,a(i)}}})})}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;++n<r;)if(e===t[n]&&n in t)return!0;return!1}angular.module("hub.g0v.tw",["ui.state","firebase"]).controller({AuthzCtrl:["$scope","$window","$state","Hub"].concat(function(e,t,n,r){return e.$on("event:auth-logout",function(){return e.safeApply(e,function(){return typeof e.cleanup=="function"?e.cleanup():void 0})}),e.$on("event:auth-login",function(a,o){var i;return i=o.user,e.$apply(function(){var e,a;return e=r.root.child("following/"+i.username),a=r.root.child("authz/"+n.params.request),e.once("value",function(e){var o;return o=e.val(),a.once("value",function(e){var l,u,s;return l=e.val(),u=(s=r.authUser.email)!=null?s:(s=r.authUser.emails)!=null?s[0]:void 0,a.update({avatar:i.avatar,username:i.username,following:o,email:u,displayName:(s=i.displayName)!=null?s:i.username},function(e){var r;return e?console.log(e):(r=l.uri)?t.location.href=r+"/"+n.params.request:void 0})})})})})})}).controller({TagControl:["$scope","$state","$location","Hub"].concat(function(t,n,r,a){return t.$watch("$state.params.tag",function(e){return t.tag=e,t.loadDisqus(e)}),e(t,{toggle_tag:function(e){var t;return t=angular.element(e.srcElement),t.parent().next().css("display")==="none"?t.parent().next().css("display","block"):t.parent().next().css("display","none")},gotag:function(e){return t.go("/tag/"+encodeURIComponent(e))},projects:a.projects,people:a.people,loadDisqus:function(e){var t;if(r.host()!=="localhost")return window.disqus_shortname="g0vhub",window.disqus_identifier=encodeURIComponent("tag-"+e),window.disqus_url="http://hack.g0v.tw/tag/"+e,window.disqus_title="g0v.tw 》 tag  》"+e,"undefined"!=typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){var e;return e=this.page,e.disqus_title=window.disqus_title,e.disqus_identifier=window.disqus_identifier,e.disqus_url=window.disqus_url,e}}),t=document.getElementById("disqusCommentScript"),t&&(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).removeChild(t),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="http://angularjs.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}(),angular.element(document.getElementById("disqus_thread")).html("")}})})}).controller({ProjectCtrl:["$scope","$state","$location","$http","$timeout","Hub","angularFire"].concat(function(n,r,a,o,i,l,u){return n.$on("event:hub-ready",function(){return i(function(){return n.safeApply(n,function(){var e,t,r,a,o,i;for(t=[],r=0,o=(a=l.projects).length;o>r;++r)i=a[r],i.thumbnail&&t.push(i);return e=t,n.featured=e[Math.floor(Math.random()*e.length)]})})}),e(n,{avatarFor:function(e){var t;return(t=l.people.getByName(e))!=null?t.avatar:void 0},people:l.people,projects:l.projects,opts:{},remove_tag:function(e,t){var n;return e.keywords=function(){var r,a,o,i=[];for(r=0,o=(a=e.keywords).length;o>r;++r)n=a[r],n!==t&&i.push(n);return i}()},add_tag:function(e){return e.keywords==null&&(e.keywords=[]),t(n.opts.newtag,e.keywords)||e.keywords.push(n.opts.newtag),n.opts.newtag="",!1},addfromURL:function(){var t,r;return t=prompt("Enter github user/repo with g0v.json",""),r="https://api.github.com/repos/"+t+"/contents/g0v.json",o.get(r).error(function(e){return console.log(e)}).success(function(t){var r;return r=JSON.parse(Base64.decode(null!=t?t.content:void 0)),e(n.project,r)})},newProject:function(){return n.opts.isnew=!0,n.opts.editMode=!0,n.project&&(typeof n.cleanup=="function"&&n.cleanup(),delete n.project,r.transitionTo("project",{})),n.project={}},saveNew:function(e){var t;return e.name?function(){var n,r,a,o=[];for(n=0,a=(r=l.projects).length;a>n;++n)t=r[n],t.name===e.name&&o.push(t);return o}().length?!1:(n.opts.isnew=!1,l.root.child("projects/"+e.name).set((e.created_by=l.loginUser.username,e)),r.transitionTo("project.detail",{projectName:e.name})):!1}}),n.$watch("$state.params.projectName",function(e){var t;if(e)return n.projectName=e,n.opts.editMode=!1,typeof n.cleanup=="function"&&n.cleanup(),t=u(l.root.child("projects/"+e),n,"project",{}),t.then(function(e){return n.cleanup=e})})})}).controller({PeopleCtrl:["$scope","$state","Hub","angularFire"].concat(function(n,r,a,o){return e(n,{gotag:function(e){return n.go("/tag/"+encodeURIComponent(e))},togglePerson:function(e){return n.showPerson=n.showPerson===e?null:e},remove_tag:function(e,t){var n;return e.tags=function(){var r,a,o,i=[];for(r=0,o=(a=e.tags).length;o>r;++r)n=a[r],n!==t&&i.push(n);return i}()},add_tag:function(e,r){var a;return e.tags==null&&(e.tags=[]),a=null!=r?r:n.newtag,t(a,e.tags)||e.tags.push(a),r||(n.newtag=""),!1},follow_person:function(e){return t(e,n.following)||n.following.push(e),n.followlist[e]=1},unfollow_person:function(e){var t,r,a,o,i,l;for(t=[],r=0,o=(a=n.following).length;o>r;++r)i=a[r],i!==e&&t.push(i);return n.following=t,l=(a=n.followlist)[e],delete a[e],l},projects:a.projects,people:a.people,auth:a.auth,hub:a,setUsername:a.setUsername,loginAndMerge:a.loginAndMerge,loginAndLink:a.loginAndLink}),n.$on("event:auth-login",function(e,t){var r;return r=t.user,n.safeApply(n,function(){var e,t;return n.toSetUsername=!1,e=o(a.root.child("people/"+r.username),n,"user",{}),t=o(a.root.child("following/"+r.username),n,"following",[]),n.$watch("following",function(e){var t;return n.followlist=function(){var n,r,a,o={};for(n=0,a=(r=null!=e?e:[]).length;a>n;++n)t=r[n],o[t]=!0;return o}()}),t.then(function(e){var t;return(t=n.cleanup)?n.cleanup=function(){return t(),e()}:void 0}),e.then(function(e){var t;return n.safeApply(n),(t=n.cleanup)?n.cleanup=function(){return t(),e()}:void 0})})}),n.$on("event:auth-logout",function(){return n.safeApply(n,function(){return typeof n.cleanup=="function"&&n.cleanup(),delete n.user,n.toSetUsername=!1})}),n.$on("event:auth-userNameRequired",function(e,t){var r,a;return r=t.existing,a=t.username,n.safeApply(n,function(){return n.toSetUsername=!0,n.usernameInUse=r,n.newUsername=a})}),n.$watch("hub.inited",function(e){var t;if(e)return t=function(e){var t,r,a,o,i,l,u,s;if(e){t={};for(r in e)if(a=e[r],o=a.tags)for(i=0,l=o.length;l>i;++i)u=o[i],t[u]==null&&(t[u]=0),t[u]++;return n.tagcloud=function(){var e,n=[];for(u in e=t)s=e[u],s>1&&n.push({tag:u,count:s});return n}().sort(function(e,t){return t.count-e.count})}},a.people.length&&t(n.people),setTimeout(function(){return n.$watch("people",n.safeApply(n,function(){return t}))},100)}),a.loginUser?n.$emit("event:auth-login",{user:a.loginUser}):void 0})}).factory({Hub:["$http","angularFireCollection","$rootScope"].concat(function(t,n,r){var a,o,i,l,u,s,c;return a=window.global.config.FIREBASE,o={},i=new Firebase(a),l=function(){return r.$broadcast("event:hub-ready"),o.inited=!0},u=n(i.child("people")),s=n(i.child("projects"),l),c=function(e,t,n){return e=e.replace(/\./g,","),i.child("people/"+e).once("value",function(a){var o;return o=a.val(),(t||o)&&r.$broadcast("event:auth-userNameRequired",{existing:o,username:e}),o?void 0:"function"==typeof n?n():void 0})},o.setUsername=function(e){return o.authUser?c(e,!1,function(){var t,n,a,l,u,s,c;return t={tags:[],username:e},t.auth=(n={},n[o.authUser.provider+""]={id:(a=o.authUser).id,username:(l=a.username)!=null?l:""},n),o.authUser.displayName&&(t.displayName=o.authUser.displayName),t.avatar=function(){var e;switch(e=[o.authUser.provider],!1){case"github"!==e[0]:return e=o.authUser.avatar_url.match(/https:\/\/secure.gravatar.com\/avatar\/(\w+)/),u=e[0],s=e[1],"http://avatars.io/gravatar/"+s;case"twitter"!==e[0]:return"http://avatars.io/twitter/"+o.authUser.username;case"persona"!==e[0]:return"http://avatars.io/gravatar/"+o.authUser.hash;default:return"http://avatars.io/"+o.authUser.provider+"/"+o.authUser.id}}(),c=i,c.child("auth-map/"+o.authUser.provider+"/"+o.authUser.id).set({username:e}),c.child("people/"+e).set(t),i.child("people/"+e).once("value",function(e){return o.loginUser=e.val(),r.$broadcast("event:auth-login",{user:o.loginUser})})}):void 0},o.loginAndMerge=function(e){var t,n;return t=function(e){var t,n,a,l;return t=o.authUser,n=i.child("people/"+e+"/auth").update((a={},a[t.provider+""]={id:t.id,username:(l=t.username)!=null?l:""},a)),i.auth(t.firebaseAuthToken,function(){return i.child("auth-map/"+t.provider+"/"+t.id).set({username:e}),r.$broadcast("event:auth-login",{user:o.loginUser})})},n=new FirebaseSimpleLogin(i,function(e,n){return e&&console.log(e),n?i.child("auth-map/"+n.provider+"/"+n.id).once("value",function(e){var n,r;return(n=e.val())!=null&&(r=n.username,n)?t(r):void 0}):void 0}),n.login(e)},o.loginAndLink=function(e){return o.authLink=o.authUser,o.authLinkUser=o.loginUser,o.auth.login(e)},o.auth=new FirebaseSimpleLogin(i,function(e,t){return e?console.log(e):t?(o.authUser=t,i.child("auth-map/"+t.provider+"/"+t.id).once("value",function(e){var n,a,l,u,s;return!o.authLink&&(n=e.val())!=null&&(a=n.username,n)?(l=i.child("people/"+a),l.once("value",function(e){return o.loginUser=e.val(),o.loginUser?r.$broadcast("event:auth-login",{user:o.loginUser}):c(a,!0)})):(u=o.authLink)?(a=o.authLinkUser.username,i.child("auth-map/"+t.provider+"/"+t.id).set({username:a}),i.auth(u.firebaseAuthToken,function(){var e,n;return i.child("people/"+a+"/auth").update((e={},e[t.provider+""]={id:t.id,username:(n=t.username)!=null?n:""},e)),e=o.authLink,delete o.authLink,e})):((n=o.authUser).username==null&&(n.username=(n=o.authUser.email)!=null?(s=n.split("@"))!=null?s[0]:void 0:void 0),c(o.authUser.username,!0))})):r.$broadcast("event:auth-logout")}),e(o,{root:i,people:u,projects:s})})})}.call(this),function(){angular.module("irc.g0v.tw",["ui.state"]).controller({IRC:["$scope","$state"].concat(function(e,t){return e.$watch("$state.current.name",function(n){switch(n){case"irc":e.ircEnabled=!0;break;case"irc.log":e.irclogEnabled=!0}return e.ircActive=t.includes("irc")})})})}.call(this),function(){var e={};e.exports={BUILD:"git-e68ac35",FIREBASE:"https://g0vhub.firebaseio.com"},window.global||(window.global={}),window.global.config=e.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);