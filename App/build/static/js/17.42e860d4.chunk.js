(this["webpackJsonpNebulus.co Application"]=this["webpackJsonpNebulus.co Application"]||[]).push([[17],{1530:function(e,n,t){"use strict";t.r(n),t.d(n,"OpenloginAdapter",(function(){return k})),t.d(n,"getOpenloginDefaultOptions",(function(){return y}));var i=t(12),r=t(2),a=t(3),o=t(11),c=t(14),s=t(13),h=t(7),u=t(8),l=t(1),p=t.n(l),d=t(85),g=t(15),f=t(16),v=t.n(f),b=t(131),O=t.n(b),C=t(28),N=t.n(C),y=function(e,n){return{adapterSettings:{network:d.b.MAINNET,clientId:"",uxMode:d.c.POPUP},chainConfig:e?Object(g.m)(e,n):void 0,loginSettings:{relogin:!0}}};function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){v()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=function(e){Object(h.a)(l,e);var n=Object(u.a)(l);function l(e){var t,i,a,c;Object(r.a)(this,l),t=n.call(this),v()(Object(o.a)(t),"name",g.i.OPENLOGIN),v()(Object(o.a)(t),"adapterNamespace",g.c.MULTICHAIN),v()(Object(o.a)(t),"type",g.a.IN_APP),v()(Object(o.a)(t),"openloginInstance",null),v()(Object(o.a)(t),"status",g.d.NOT_READY),v()(Object(o.a)(t),"currentChainNamespace",g.f.EIP155),v()(Object(o.a)(t),"openloginOptions",void 0),v()(Object(o.a)(t),"loginSettings",{}),v()(Object(o.a)(t),"privKeyProvider",null),N.a.debug("const openlogin adapter",e);var s=y(null===(i=e.chainConfig)||void 0===i?void 0:i.chainNamespace,null===(a=e.chainConfig)||void 0===a?void 0:a.chainId);if(t.openloginOptions=j(j({clientId:"",network:d.b.MAINNET},s.adapterSettings),e.adapterSettings||{}),t.loginSettings=j(j({},s.loginSettings),e.loginSettings),null!==(c=e.chainConfig)&&void 0!==c&&c.chainNamespace){var h;t.currentChainNamespace=null===(h=e.chainConfig)||void 0===h?void 0:h.chainNamespace;var u=s.chainConfig?s.chainConfig:{};if(t.chainConfig=j(j({},u),null===e||void 0===e?void 0:e.chainConfig),N.a.debug("const openlogin chainConfig",t.chainConfig),!t.chainConfig.rpcTarget)throw g.j.invalidParams("rpcTarget is required in chainConfig")}return t}return Object(a.a)(l,[{key:"chainConfigProxy",get:function(){return this.chainConfig?j({},this.chainConfig):null}},{key:"provider",get:function(){var e;return(null===(e=this.privKeyProvider)||void 0===e?void 0:e.provider)||null},set:function(e){throw new Error("Not implemented")}},{key:"init",value:function(){var e=Object(i.a)(p.a.mark((function e(n){var t,i,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(c.a)(Object(s.a)(l.prototype),"checkInitializationRequirements",this).call(this),null!==(t=this.openloginOptions)&&void 0!==t&&t.clientId){e.next=3;break}throw g.j.invalidParams("clientId is required before openlogin's initialization");case 3:if(this.chainConfig){e.next=5;break}throw g.j.invalidParams("chainConfig is required before initialization");case 5:return this.openloginInstance=new d.d(this.openloginOptions),i=Object(d.e)(),r=!0,Object.keys(i).length>0&&i.result&&(r=!0),e.next=11,this.openloginInstance.init();case 11:if(this.status=g.d.READY,this.emit(g.b.READY,g.i.OPENLOGIN),e.prev=13,!this.openloginInstance.privKey||!n.autoConnect&&!r){e.next=17;break}return e.next=17,this.connect();case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(13),N.a.error("Failed to connect with cached openlogin provider",e.t0),this.emit("ERRORED",e.t0);case 23:case"end":return e.stop()}}),e,this,[[13,19]])})));return function(n){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=Object(i.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.a)(Object(s.a)(l.prototype),"checkConnectionRequirements",this).call(this),this.status=g.d.CONNECTING,this.emit(g.b.CONNECTING,j(j({},n),{},{adapter:g.i.OPENLOGIN})),e.prev=3,e.next=6,this.connectWithProvider(n);case 6:return e.abrupt("return",this.provider);case 9:if(e.prev=9,e.t0=e.catch(3),N.a.error("Failed to connect with openlogin provider",e.t0),this.status=g.d.READY,this.emit(g.b.ERRORED,e.t0),null===e.t0||void 0===e.t0||!e.t0.message.includes("user closed popup")){e.next=16;break}throw g.k.popupClosed();case 16:throw g.k.connectionError("Failed to login with openlogin");case 17:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(n){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=Object(i.a)(p.a.mark((function e(){var n,t=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:{cleanup:!1},this.status===g.d.CONNECTED){e.next=3;break}throw g.k.notConnectedError("Not connected with wallet");case 3:if(this.openloginInstance){e.next=5;break}throw g.j.notReady("openloginInstance is not ready");case 5:return e.next=7,this.openloginInstance.logout();case 7:n.cleanup?(this.status=g.d.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=g.d.READY,this.emit(g.b.DISCONNECTED);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(i.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===g.d.CONNECTED){e.next=2;break}throw g.k.notConnectedError("Not connected with wallet");case 2:if(this.openloginInstance){e.next=4;break}throw g.j.notReady("openloginInstance is not ready");case 4:return e.next=6,this.openloginInstance.getUserInfo();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(e){if(this.status!==g.d.READY){var n=y();this.openloginOptions=j(j(j({},n.adapterSettings),this.openloginOptions||{}),e)}}},{key:"setChainConfig",value:function(e){Object(c.a)(Object(s.a)(l.prototype),"setChainConfig",this).call(this,e),this.currentChainNamespace=e.chainNamespace}},{key:"connectWithProvider",value:function(){var e=Object(i.a)(p.a.mark((function e(n){var i,r,a,o,c,s,h;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.chainConfig){e.next=2;break}throw g.j.invalidParams("chainConfig is required before initialization");case 2:if(this.openloginInstance){e.next=4;break}throw g.j.notReady("openloginInstance is not ready");case 4:if(this.currentChainNamespace!==g.f.SOLANA){e.next=12;break}return e.next=7,Promise.all([t.e(0),t.e(1),t.e(2),t.e(12)]).then(t.bind(null,1318));case 7:i=e.sent,r=i.SolanaPrivateKeyProvider,this.privKeyProvider=new r({config:{chainConfig:this.chainConfig}}),e.next=21;break;case 12:if(this.currentChainNamespace!==g.f.EIP155){e.next=20;break}return e.next=15,Promise.all([t.e(0),t.e(3),t.e(10)]).then(t.bind(null,1345));case 15:a=e.sent,o=a.EthereumPrivateKeyProvider,this.privKeyProvider=new o({config:{chainConfig:this.chainConfig}}),e.next=21;break;case 20:throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));case 21:if(this.openloginInstance.privKey||!n){e.next=24;break}return e.next=24,this.openloginInstance.login(O()(this.loginSettings,{loginProvider:n.loginProvider},{extraLoginOptions:{login_hint:null===n||void 0===n?void 0:n.login_hint}}));case 24:if(!(c=this.openloginInstance.privKey)){e.next=36;break}if(this.currentChainNamespace!==g.f.SOLANA){e.next=32;break}return e.next=29,Promise.all([t.e(1),t.e(14)]).then(t.bind(null,1522));case 29:s=e.sent,h=s.getED25519Key,c=h(c).sk.toString("hex");case 32:return e.next=34,this.privKeyProvider.setupProvider(c);case 34:this.status=g.d.CONNECTED,this.emit(g.b.CONNECTED,{adapter:g.i.OPENLOGIN,reconnected:!n});case 36:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),l}(g.e)}}]);
//# sourceMappingURL=17.42e860d4.chunk.js.map