angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/about.html', [
'<div class="about"><h1>This is pre-alpha!</h1></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hack.html', [
'<div resize="resize" ng-cloak="ng-cloak" class="hackfolder"><div ng-class="{collapsed: collapsed}" ng-click="collapsed=!collapsed" ng-style="{height: contentHeight}" class="index"><div class="hackid"><i class="icon-home"></i>&nbsp;<a ng-href="http://ethercalc.org/{{hackId}}" target="_blank" ngx-final="ngx-final" class="indexlink expanded-content">{{HackFolder.folderTitle || hackId}} </a><small><a ng-click="reload(hackId)" ngx-noclick="ngx-noclick" class="reload">&#x21BA;</a></small></div><ul ui-sortable="sortableOptions" ng-model="tree"><li ng-repeat="doc in tree" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div ng-include="\'/partials/hackitem.html\'" class="entry"></div><ul ng-show="doc.children &amp;&amp; doc.expand" ui-sortable="sortableOptions" ng-model="doc.children" ng-animate="\'fade\'"><li ng-repeat="doc in doc.children" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div ng-include="\'/partials/hackitem.html\'" class="entry"></div></li></ul></li></ul></div><div ng-style="{height: contentHeight}" class="pad-container"><article ng-repeat="(key, iframe) in iframes" ng-show="docId == key" class="pad"><span ng-show="hasViewMode(iframe.doc.type) &amp;&amp; iframe.mode != \'edit\'" ng-click="activate(iframe.doc.id, true)" class="docmode">edit</span><div ui-if="iframe.doc.iframeunsure" class="noiframe unsure">Click the link below to open the link in a new window: <br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span><div ng-click="iframe.doc.iframeunsure = false" class="icon icon-close">&#x274c;</div></div><div ui-if="iframe.doc.noiframe" class="noiframe">It looks like this site blocks embedding.  Click the link below to open it in a new window: <br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span></div><iframe ng-show="!iframe.doc.noiframe" ng-src="{{iframe.src}}" ngx-iframe="iframeCallback(iframe.doc)" class="embed"></iframe></article></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hackitem.html', [
'<span ui-if="doc.type == \'dummy\'" ng-click="doc.expand=!doc.expand" class="link"><img src="/img/folder.png" title="{{doc.title || doc.id}}"/><span class="expanded-content">{{doc.title || doc.id}}</span></span><a ng-href="/{{hackId}}/{{doc.id}}" ngx-click-meta="open(doc)" ngx-final="ngx-final" ui-if="doc.type != \'dummy\'" class="link"><img ng-src="{{doc.icon}}" title="{{doc.title || doc.id}}"/><span class="expanded-content">{{doc.title || doc.id}}</span><span ng-repeat="tag in doc.tags" class="label label-{{tag.class}}">{{tag.content}}</span></a><span ui-if="doc.children" ng-class="{collapsed: !doc.expand}" ng-click="doc.expand=!doc.expand" class="collapser">{{ {"true": "&#x25B8;", "false": "&#x25BE;"}[!doc.expand] }}</span>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'<naul class="nav"><li><a ng-href="/">首頁</a></li><li class="dropdown-split-left"><a ng-href="/g0v-hackath3n">客廳工廠黑客松</a></li><li class="dropdown-split-right dropdown"><a class="dropdown-toggle"><i class="icon-caret-down"></i></a><ul role="menu" aria-labelledby="projects" class="dropdown-menu pull-right"><li><a ng-href="/g0v-hackath2n">九大建設</a></li><li><a href="https://hackpad.com/lIoCjaeMWzC">公地放領</a></li><li><a href="https://hackpad.com/ul6fMthof2S">動員戡亂</a></li></ul></li><li class="dropdown"><a class="dropdown-toggle">長期專案</a><ul role="menu" aria-labelledby="projects" class="dropdown-menu"><li role="presentation"><a role="menuitem" tabindex="-1" ng-href="/g0v-ly">立法院專案</a></li><li role="presentation"><a role="menuitem" tabindex="-1" ng-href="/g0vwelfare">福利請聽</a></li></ul></li><!--li<a ng-href="/people">People</a>--></naul><ul class="nav pull-right"><li ng-class="{ active: $state.includes(\'about\') }"><a ng-href="/about">About</a></li></ul>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/people.html', [
'<div class="row"><div resize="resize" ng-cloak="ng-cloak" class="span4 people"><div ng-show="user" class="self"><h2 class="displayName">{{user.displayName}}</h2><div class="name">{{user.username}}</div><img ng-src="{{ user.avatar }}"/><form><fieldset><label>關鍵字</label><span ng-repeat="tag in user.tags" ng-mouseenter="toremove=1" ng-mouseleave="toremove=0" class="label"><a ng-href="/tag/{{tag}}">{{tag}}</a><a ng-show="toremove" ng-click="remove_tag(user, tag)"><i class="icon-remove"></i></a></span></fieldset></form><form class="newtag"><input ng-model="newtag" class="tag"/><input type="submit" ng-click="add_tag(user)" value="add"/></form><label>自我介紹</label><textarea ng-model="user.bio"></textarea><ul class="services"><li ng-repeat="provider in [\'facebook\', \'twitter\', \'github\']"><a ng-href="http://{{provider}}.com/{{user.auth[provider].username}}" ng-show="user.auth[provider]"><i class="icon-{{provider}}"></i>&nbsp; {{user.auth[provider].username}}</a><a ng-click="loginAndLink(provider)" ng-show="!user.auth[provider]" class="btn"><i class="icon-{{provider}}"></i>&nbsp; {{provider}}</a></li></ul></div><div ng-show="toSetUsername" class="set-username"><h2>Choose a username:</h2><form><input ng-model="newUsername"/><input type="submit" ng-click="setUsername(newUsername)" value="Set"/></form><div ng-show="usernameInUse" class="alert alert-error"><username>already in use, choose another one or merge using authenticated service:</username><ui><li ng-repeat="(provider, auth) in usernameInUse.auth"><a ng-click="loginAndMerge(provider)" class="btn"><i class="icon-{{provider}}"></i>&nbsp; {{provider}}:{{auth.username}}</a></li></ui></div></div><div id="login-block" ng-show="!user &amp;&amp; !toSetUsername"><h2>Login</h2><a id="facebook-login-link" ng-click="auth.login(\'facebook\', { rememberMe: true, scope: \'email,user_likes\' })" class="btn"><i class="icon-facebook icon-large"></i>&nbsp; facebook</a><a id="twitter-login-link" ng-click="auth.login(\'twitter\', { rememberMe: true })" class="btn"><i class="icon-twitter icon-large"></i>&nbsp; twitter</a><a id="github-login-link" ng-click="auth.login(\'github\', { rememberMe: true, scope: \'user,gist\'})" class="btn"><i class="icon-github icon-large"></i>&nbsp; github</a></div><div id="logout-block" ng-show="user || toSetUsername"><h2>logout option</h2><p><span id="login-user-info"></span><a id="logout-link" ng-click="auth.logout()" class="btn">logout</a></p></div></div><div class="span8"><form class="form-search"><input ng-model="search" class="search-query"/></form><ul><li ng-repeat="person in people | filter:search"><div ng-class="{{person.status}}" class="person"><div class="name">{{person.$id}}</div><img ng-src="http://avatars.io/twitter/{{person.twitter}}"/><span ng-repeat="tag in person.tags" class="label tag">{{tag}}</span></div></li></ul></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/tag.html', [
'<div resize="resize" ng-cloak="ng-cloak" class="row tag-content"><div class="span4"><h3>專案<ul><li ng-repeat="project in projects"><div class="name">{{project.name}}</div></li></ul></h3><h3>人群<ul><li ng-repeat="person in people | filter:{tags: tag}"><div ng-class="{{person.status}}" class="person"><div class="name">{{person.username}}</div><img ng-src="http://avatars.io/twitter/{{person.twitter}}"/><span ng-repeat="tag in person.tags" class="label"><a ng-href="/tag/{{tag}}">{{tag}}</a></span></div></li></ul></h3></div><div class="span8"><h2>關於 {{ tag }}</h2><div id="disqus_thread" class="content-panel-content"></div></div></div>',''].join("\n"));
}]);