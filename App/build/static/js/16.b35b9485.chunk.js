(this["webpackJsonpNebulus.co Application"]=this["webpackJsonpNebulus.co Application"]||[]).push([[16],{1527:function(t,e,n){"use strict";n.r(e),n.d(e,"MetamaskAdapter",(function(){return b}));var r=n(12),a=n(2),i=n(3),s=n(11),c=n(14),o=n(13),h=n(7),u=n(8),d=n(1),p=n.n(d),l=n(16),m=n.n(l),f=n(618),k=n.n(f),v=n(15),b=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),m()(Object(s.a)(t),"adapterNamespace",v.c.EIP155),m()(Object(s.a)(t),"currentChainNamespace",v.f.EIP155),m()(Object(s.a)(t),"type",v.a.EXTERNAL),m()(Object(s.a)(t),"name",v.i.METAMASK),m()(Object(s.a)(t),"status",v.d.NOT_READY),m()(Object(s.a)(t),"rehydrated",!1),m()(Object(s.a)(t),"metamaskProvider",null),t.chainConfig=r.chainConfig||null,t}return Object(i.a)(n,[{key:"provider",get:function(){return this.status===v.d.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=Object(r.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(c.a)(Object(o.a)(n.prototype),"checkInitializationRequirements",this).call(this),t.next=3,k()({mustBeMetaMask:!0});case 3:if(this.metamaskProvider=t.sent,this.metamaskProvider){t.next=6;break}throw v.j.notInstalled("Metamask extension is not installed");case 6:if(this.status=v.d.READY,this.emit(v.b.READY,v.i.METAMASK),t.prev=8,!e.autoConnect){t.next=13;break}return this.rehydrated=!0,t.next=13,this.connect();case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),this.emit(v.b.ERRORED,t.t0);case 18:case"end":return t.stop()}}),t,this,[[8,15]])})));return function(e){return t.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(t){}},{key:"connect",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(c.a)(Object(o.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(v.m)(v.f.EIP155,1)),this.status=v.d.CONNECTING,this.emit(v.b.CONNECTING,{adapter:v.i.METAMASK}),this.metamaskProvider){t.next=6;break}throw v.k.notConnectedError("Not able to connect with metamask");case 6:return t.prev=6,t.next=9,this.metamaskProvider.request({method:"eth_requestAccounts"});case 9:if(this.metamaskProvider.chainId===this.chainConfig.chainId){t.next=13;break}return t.next=13,this.switchChain(this.chainConfig);case 13:if(this.status=v.d.CONNECTED,this.provider){t.next=16;break}throw v.k.notConnectedError("Failed to connect with provider");case 16:return this.provider.once("disconnect",(function(){e.disconnect()})),this.emit(v.b.CONNECTED,{adapter:v.i.METAMASK,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 21:throw t.prev=21,t.t0=t.catch(6),this.status=v.d.READY,this.rehydrated=!1,this.emit(v.b.ERRORED,t.t0),v.k.connectionError("Failed to login with metamask wallet");case 27:case"end":return t.stop()}}),t,this,[[6,21]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e,n,r=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},this.status===v.d.CONNECTED){t.next=3;break}throw v.k.disconnectionError("Not connected with wallet");case 3:null===(e=this.provider)||void 0===e||e.removeAllListeners(),n.cleanup?(this.status=v.d.NOT_READY,this.metamaskProvider=null):this.status=v.d.READY,this.rehydrated=!1,this.emit(v.b.DISCONNECTED);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(r.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status===v.d.CONNECTED){t.next=2;break}throw v.k.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=Object(r.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.metamaskProvider){t.next=2;break}throw v.k.notConnectedError("Not connected with wallet");case 2:return t.prev=2,t.next=5,this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:e.chainId}]});case 5:case 12:t.next=15;break;case 7:if(t.prev=7,t.t0=t.catch(2),4902!==t.t0.code){t.next=14;break}return t.next=12,this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:e.chainId,chainName:e.displayName,rpcUrls:[e.rpcTarget]}]});case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,this,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()}]),n}(v.e)}}]);
//# sourceMappingURL=16.b35b9485.chunk.js.map