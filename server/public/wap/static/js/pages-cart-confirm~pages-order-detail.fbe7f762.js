(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-confirm~pages-order-detail"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"49f9":function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("d1b3")),i={getSubscribeTemplate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=o.default.getJson("template");return null==t?e:void 0!=e[t]?e[t]:null},order:function(){},refund:function(){}};e.default=i},"8c57":function(t,e,r){"use strict";var n=r("dbce"),o=r("4ea4");r("d3b7"),r("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=o(r("1da1")),a=r("d56b"),c=n(r("0887")),u=o(r("1f67")),s=o(r("d1b3")),f=o(r("e8a1")),l={payType:"pay",setPayType:function(t){return this.payType=t,this},getPaymentType:function(){var t=c.platformAgent();return t.isMini?3:"h5"==t.type?t.isWechat?2:1:"app"==t.type?4:void 0},getPaymentList:function(t){var e=this,r=t||"order",n="",o=c.platformAgent();return o.isMini?n="mp":"h5"==o.type?n=o.isWechat?"wechat":"h5":"app"==o.type&&(n="app"),new Promise((function(t,o){(0,a.getPaymentMethod)({type:n,pay_type:r}).then((function(r){e.getAppPayment(r.data).then((function(e){t(e)})).catch((function(t){o(t)}))})).catch((function(t){o(t)}))}))},getAppPayment:function(t){return new Promise((function(e,r){uni.getProvider({service:"payment",success:function(r){for(var n=[],o=0;o<r.provider.length;o++)switch(r.provider[o]){case"wxpay":n.push("wechat");break;case"alipay":n.push("alipay");break;default:break}var i=[];if(n.length<=0)e(t);else{for(var a=0;a<t.length;a++)(c.in_array(t[a].id,n)||"balance"==t[a].id)&&i.push(t[a]);e(i)}},fail:function(t){r("获取支付通道失败")}})}))},crreateOrder:function(t,e){var r=e||!1;if(r&&(u.default.commit("UPDATECART",t.shop_count),t.shop_count>0?uni.setTabBarBadge({index:2,text:t.shop_count.toString()}):uni.removeTabBarBadge({index:2})),0==t.pay)return c.redirectTo("order/detail",{id:t.order_id}),!0;if(99==t.pay)return"pay"==this.payType?(s.default.set("order_msg",t.msg),s.default.set("order_id",t.order_id),c.redirectTo("cart/info")):"order"!=this.payType&&"rechange"!=this.payType||c.msg(t.msg),!0;var n=c.platformAgent();n.isMini?this.createMpPayment(t):"h5"==n.type?this.createWebPayment(t):"app"==n.type&&this.createAppPayment(t)},createMpPayment:function(t){var e=this;switch(t.pay+""){case"1":var r=t.result.params;f.default.requestPayment({timeStamp:r.timeStamp,nonceStr:r.nonceStr,package:r.package,signType:r.signType,paySign:r.paySign,success:function(r){uni.showToast({title:"您己支付成功!",success:function(r){"pay"==e.payType||"order"==e.payType?c.redirectTo("order/detail",{id:t.order_id}):c.redirectTo("bill/fund")}})},fail:function(t){uni.showModal({content:"支付失败，原因："+JSON.stringify(t),showCancel:!1})}});break}},createWebPayment:function(t){switch(t.pay+""){case"1":f.default.config(t.result.config);var e=t.result.options,r=this;e.success=function(){uni.showToast({title:"您己支付成功!",success:function(e){"pay"==r.payType||"order"==r.payType?c.redirectTo("order/detail",{id:t.order_id}):c.redirectTo("bill/fund")}})},f.default.chooseWXPay(e);break;case"2":"pay"==r.payType||"order"==r.payType?location.href=t.result.url+"&redirect_url="+location.origin+"/wap/pages/order/detail/"+t.order_id:location.href=t.result.url+"&redirect_url="+location.origin+"/wap/pages/bill/fund";break;case"3":c.showLoading();var n=document.createElement("div");n.innerHTML=t.result,document.body.appendChild(n),document.forms.alipaysubmit.submit();break}},createAppPayment:function(t){switch(t.pay+""){case"1":this.requestPayment(t.result.params,"wxpay",{id:t.order_id});break;case"2":this.requestPayment(t.result.params,"alipay",{id:t.order_id});break}},requestPayment:function(t,e,r){var n=this;return(0,i.default)(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t){o.next=3;break}return uni.showModal({content:"获取支付信息失败",showCancel:!1}),o.abrupt("return");case 3:i=n,uni.requestPayment({provider:e,orderInfo:t,success:function(t){uni.showToast({title:"您己支付成功!",success:function(t){"pay"==i.payType||"order"==i.payType?c.redirectTo("order/detail",r):c.redirectTo("bill/fund")}})},fail:function(t){uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})}});case 5:case"end":return o.stop()}}),o)})))()}};e.default=l},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",y={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(A([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=P.prototype=_.prototype=Object.create(v);x.prototype=w.constructor=P,P.constructor=x,P[u]=x.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[c]=function(){return this},f.AsyncIterator=E,f.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=A,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new M(n||[]);return i._invoke=k(t,r,a),i}function T(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function x(){}function P(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,i,a){var c=T(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function k(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=T(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=T(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())}}]);