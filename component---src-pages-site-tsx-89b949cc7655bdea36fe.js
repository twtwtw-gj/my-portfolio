(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[459],{6623:function(t){t.exports=function(t){if("string"!=typeof t)return!1;var l=t.match(e);if(!l)return!1;var a=l[1];if(!a)return!1;if(r.test(a)||n.test(a))return!0;return!1};var e=/^(?:\w+:)?\/\/(\S+)$/,r=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,n=/^[^\s\.]+\.\S{2,}$/},3392:function(t,e,r){"use strict";var n,l=(n=r(6623))&&n.__esModule?n:{default:n};var a=function(t,e,r){var n=t[e];return null==n||"string"!=typeof n||!n.startsWith("/")&&!(0,l.default)(n)?new TypeError("Invalid URL Prop Value: ".concat(n," for ").concat(e," in ").concat(r)):null},u=function(t,e,r){return null==t[e]?null:a(t,e,r)};u.isRequired=a},9173:function(t,e,r){"use strict";var n=r(7294);r(3392);e.Z=function(t){var e=t.url,r=t.text;return n.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r)}},746:function(t,e,r){"use strict";r.r(e);var n=r(7294),l=r(5127),a=r(3751),u=r(9173);e.default=function(t){var e=t.location,r=[{name:"GitHub",url:"https://github.com",description:n.createElement(n.Fragment,null,"git repositoryのホスティングサイト。コードへのリンクは",n.createElement("a",{href:"https://github.com/twtwtw-gj/my-portfolio"},"こちら"))},{name:"GitHub Actions",url:"https://github.co.jp/features/actions",description:"GitHubにコードを上げると、自動的にテストや成果物のビルドを行うサービス"},{name:"GitHub Pages",url:"https://pages.github.com/",description:"GitHubにpushしたHTMLファイルをもとに、自動的にサイトを作成・公開するサービス。今回は使用しなかったが、独自ドメインで公開することも可能"}];return n.createElement(l.Z,{location:e},n.createElement(a.Z,{title:"Services which help me make this site"}),n.createElement("h1",null,"本サイトの作成に使用したサービス"),n.createElement("div",null,n.createElement("p",null,"原則的にすべてのサービスが無料で使えますが、いくつか制限があるものもあります。 （たとえば、",n.createElement(u.Z,{text:"Gitpod",url:"https://www.gitpod.io"}),"は無料ユーザーは月50時間しか使用できません）"),n.createElement("h3",null,"開発で使用したもの"),"JavaScriptフレームワーク・サイトジェネレータ・開発環境の構築手段",n.createElement("dl",null,[{name:"React.js",url:"https://ja.reactjs.org/",description:"JavaScriptフレームワーク。関数型プログラミングが特徴的"},{name:"Gatsby.js",url:"https://www.gatsbyjs.com/",description:"上記を使用したSSG（静的サイトジェネレーター）。特にページ遷移の機能追加をしやすく、React Routerをそのまま使うより遥かに簡単"},{name:"Gitpod",url:"https://www.gitpod.io",description:"クラウドで開発環境を整えられるサービス。本サイトはローカルの開発環境は一切使わず、このサービス上のみでコーディングした"}].map((function(t){var e=t.name,r=t.url,l=t.description;return n.createElement(n.Fragment,null,n.createElement("dt",null,r?n.createElement(u.Z,{text:e,url:r}):e),n.createElement("dd",null,l))}))),n.createElement("h3",null,"デプロイ時に使用したもの"),"コード管理・サイト公開のために使用しているサービス",n.createElement("dl",null,r.map((function(t){var e=t.name,r=t.url,l=t.description;return n.createElement(n.Fragment,null,n.createElement("dt",null,r?n.createElement(u.Z,{text:e,url:r}):e),n.createElement("dd",null,l))})))))}}}]);
//# sourceMappingURL=component---src-pages-site-tsx-89b949cc7655bdea36fe.js.map