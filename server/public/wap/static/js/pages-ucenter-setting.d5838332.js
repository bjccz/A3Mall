(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-setting"],{"0d78":function(t,e,a){"use strict";a.r(e);var i=a("29d8"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},1584:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.isNavbar||t.isPrev?a("v-uni-view",{staticClass:"navbar-box",style:{height:t.menuClientRect.height+t.statusBar+t.menuClientRect.searchHeight+"px",background:t.bg}},[a("v-uni-view",{staticClass:"status-bar",style:{height:t.statusBar+"px"}}),t.isNavTitle?a("v-uni-view",{staticClass:"navbar",style:{color:t.fontColor,height:t.menuClientRect.height+"px","line-height":t.menuClientRect.height+"px"}},[t.isPrev?a("v-uni-view",{staticClass:"iconfont prevPage",class:{backPage:t.iSimmersive&&!t.isTitle,statusLine:t.iSimmersive&&t.scroll<10},style:{color:t.fontColor,"line-height":t.menuClientRect.height+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.prev.apply(void 0,arguments)}}},[a("v-uni-text",{style:{color:t.fontColor}},[t._v("")])],1):t._e(),t.isTitle?a("v-uni-view",{staticClass:"title",style:{color:t.fontColor,height:t.menuClientRect.height+"px","line-height":t.menuClientRect.height+"px"}},[t._v(t._s(t.title))]):t._e()],1):t._e(),t.isSearch&&t.isTitle?a("v-uni-view",{staticClass:"search-box",style:{background:t.bg}},[a("v-uni-view",{staticClass:"iconfont search-input",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onJumpSearch.apply(void 0,arguments)}}},[a("v-uni-text",[t._v("请输入关键字")])],1)],1):t._e()],1):t._e(),t.placeholder?a("v-uni-view",{staticClass:"placeholder-box",staticStyle:{width:"100%"},style:{height:t.menuClientRect.height-1+t.menuClientRect.searchHeight+t.statusBar+"px"}}):t._e()],1)},r=[]},"1b3c":function(t,e,a){"use strict";var i=a("953d"),n=a.n(i);n.a},"29d8":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("fb6a"),a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(a("838e"));var n={props:{value:{type:[String,Number],default:0},scroll:{type:[String,Number],default:0},placeholder:{type:Boolean,default:!1},isShow:{type:Boolean,default:!0},isPrev:{type:Boolean,default:!0},isSearch:{type:Boolean,default:!1},isNavTitle:{type:Boolean,default:!0},title:{type:String,default:""},titleColor:{type:String,default:"#000000"},background:{type:String,default:"transparent"},iSimmersive:{type:Boolean,default:!1},onBack:{type:Function,default:null}},data:function(){return{statusBar:10,menuClientRect:{height:35,searchHeight:0},bg:"",fontColor:"",isTitle:!0,isNavbar:!0}},mounted:function(){var t=uni.getSystemInfoSync();this.isNavbar=this.isShow,this.bg=this.background,this.fontColor=this.titleColor,this.iSimmersive?(this.isTitle=!1,this.isNavbar=!1,this.setNavigationBarColor("#ffffff")):(this.bg="transparent"!=this.background?this.background:"#ffffff",this.setNavigationBarColor(this.titleColor)),this.isNavTitle||(this.menuClientRect.height=0),this.statusBar=0,this.isSearch&&(this.menuClientRect.searchHeight=45);var e=this.menuClientRect.height+this.statusBar;this.$emit("input",t.screenHeight-e-t.windowBottom)},methods:{onJumpSearch:function(){this.$utils.navigateTo("search/index")},prev:function(){if(this.onBack)this.onBack();else{var t=getCurrentPages();t&&t.length>1?uni.navigateBack():t.length<=1&&this.$utils.switchTab("index/index")}},setNavigationBarColor:function(t){this.fontColor=t},color2Rgb:function(t){var e=t.toLowerCase();if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var a="#",i=1;i<4;i+=1)a+=e.slice(i,i+1).concat(e.slice(i,i+1));e=a}for(var n=[],r=1;r<7;r+=2)n.push(parseInt("0x"+e.slice(r,r+2)));return n.join(",")}return t}},watch:{scroll:{handler:function(t,e){if(!this.iSimmersive)return!1;var a="#ffffff",i="#000000";"transparent"!=this.background&&(a=this.background,i="#ffffff");var n=this.color2Rgb(a);t>=10&&t<=50?(this.bg="rgba("+n+",.3)",this.setNavigationBarColor(i),this.isTitle=!0,this.isNavbar=!0):t>=51&&t<=99?(this.bg="rgba("+n+",.7)",this.setNavigationBarColor(i),this.isTitle=!0,this.isNavbar=!0):t>=100?(this.bg="rgba("+n+",1)",this.setNavigationBarColor(i),this.isTitle=!0,this.isNavbar=!0):t<10&&(this.bg="rgba("+n+",0)",this.setNavigationBarColor("#ffffff"),this.isTitle=!1,this.isNavbar=!1)},deep:!0}}};e.default=n},"67f3":function(t,e,a){"use strict";a.r(e);var i=a("1584"),n=a("0d78");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("1b3c");var o,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"58a7c612",null,!1,i["a"],o);e["default"]=l.exports},"71a2":function(t,e,a){"use strict";a.r(e);var i=a("8ca6"),n=a("86bf");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b50a");var o,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"09ad3bc4",null,!1,i["a"],o);e["default"]=l.exports},"838e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={set:function(t,e){sessionStorage.setItem(t,vlaue)},setJson:function(t,e){sessionStorage.setItem(t,JSON.stringify(e))},get:function(t){return sessionStorage.getItem(t)},getJson:function(t){var e=sessionStorage.getItem(t);return e?JSON.parse(e):null},remove:function(t){sessionStorage.removeItem(t)},clear:function(){sessionStorage.clear()}};e.default=i},"86bf":function(t,e,a){"use strict";a.r(e);var i=a("dda4"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"88f6":function(t,e,a){var i=a("97bb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2b8c22ab",i,!0,{sourceMap:!1,shadowMode:!1})},"8ca6":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={navbar:a("67f3").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wrap"},[a("navbar",{attrs:{iSimmersive:!1,"title-color":"#ffffff",background:"#1b43c4",placeholder:!0,title:"会员设置"}}),a("v-uni-view",{staticClass:"avatar"},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.avatar}}),a("v-uni-view",{staticClass:"file",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[t._v("上传")])],1)],1),a("v-uni-view",{staticClass:"theForm"},[a("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"fields-box"},[a("v-uni-view",[t._v("昵称")]),a("v-uni-view",[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",name:"username",value:t.username,placeholder:"昵称"}})],1)],1),a("v-uni-view",{staticClass:"fields-box"},[a("v-uni-view",[t._v("性别")]),a("v-uni-view",[a("v-uni-picker",{attrs:{value:t.sexIndex,range:t.sexArray,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindSexPickerChange.apply(void 0,arguments)}}},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",name:"sex",disabled:"true",value:t.sexArray[t.sexIndex].name,placeholder:"性别"}})],1)],1)],1),a("v-uni-view",{staticClass:"fields-box"},[a("v-uni-view",[t._v("生日")]),a("v-uni-view",[a("v-uni-picker",{attrs:{mode:"date",value:t.birthday,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",name:"birthday",disabled:"true",value:t.birthday,placeholder:"生日"}})],1)],1)],1),a("v-uni-view",{staticClass:"btn"},[a("v-uni-button",{attrs:{"form-type":"submit"}},[t._v("提 交")])],1),a("v-uni-view",{staticClass:"logout"},[a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[t._v("退出登录")])],1)],1)],1)],1)},r=[]},"953d":function(t,e,a){var i=a("a681");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("133305ca",i,!0,{sourceMap:!1,shadowMode:!1})},"97bb":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.wrap[data-v-09ad3bc4]{width:100%;height:100vh;background-color:#fff}.wrap .avatar[data-v-09ad3bc4]{width:100%;height:80px;text-align:center;padding:20px 0}.wrap .avatar uni-view[data-v-09ad3bc4]{position:relative;height:80px;width:80px;text-align:center;display:inline-block}.wrap .avatar uni-view[data-v-09ad3bc4]:before{width:80px;height:80px;display:block;content:" ";top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;z-index:99;background:rgba(0,0,0,.2);border-radius:50%}.wrap .avatar uni-view .file[data-v-09ad3bc4]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1111;color:#333;position:absolute;display:inline-block;background:#fff;width:40px;height:20px;line-height:20px;overflow:hidden;text-decoration:none;text-indent:0;cursor:pointer;border-radius:5px;font-size:13px}.wrap .avatar uni-view uni-image[data-v-09ad3bc4]{width:80px;height:80px;overflow:hidden;border-radius:50%;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.theForm[data-v-09ad3bc4]{width:%?650?%;margin:0 auto}.theForm .fields-box[data-v-09ad3bc4]{width:100%;float:left;font-size:%?31?%;height:%?110?%;line-height:%?110?%;border:1px solid #e0e0e0;border-left:0;border-right:0}.theForm .fields-box[data-v-09ad3bc4]:nth-child(1){border-bottom:0}.theForm .fields-box[data-v-09ad3bc4]:nth-child(2){border-bottom:0}.theForm .fields-box uni-view[data-v-09ad3bc4]:first-child{float:left;width:%?160?%;color:#999}.theForm .fields-box uni-view[data-v-09ad3bc4]:last-child{float:right;width:%?490?%;color:#333}.theForm .fields-box uni-view:last-child uni-input[data-v-09ad3bc4]{height:%?110?%;line-height:%?110?%}.theForm .btn[data-v-09ad3bc4]{float:left;margin:%?25?% 0}.theForm .btn uni-button[data-v-09ad3bc4]{width:%?650?%;height:%?100?%;line-height:%?100?%;text-align:center;background-color:#1b43c4;border:1px solid #1b43c4;color:#fff;font-size:%?33?%}.theForm .logout[data-v-09ad3bc4]{float:left}.theForm .logout uni-button[data-v-09ad3bc4]{width:%?650?%;height:%?100?%;line-height:%?100?%;text-align:center;background-color:#fff;color:#a1a1a1;font-size:%?33?%;border:0 solid #d6d6d6}',""]),t.exports=e},a681:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.placeholder-box[data-v-58a7c612]{height:35px}.navbar-box[data-v-58a7c612]{position:fixed;z-index:100000;topL:0;left:0;width:100%;height:35px}.navbar-box .status-bar[data-v-58a7c612]{width:100%;float:left}.navbar-box .search-box[data-v-58a7c612]{width:100%;height:45px;float:left}.navbar-box .search-box .search-input[data-v-58a7c612]{position:relative;color:#fff;height:35px;line-height:35px;border-radius:%?50?%;margin:%?10?% %?20?%;background-color:#fff;color:#666}.navbar-box .search-box .search-input[data-v-58a7c612]::before{position:absolute;content:"\\e629";left:%?30?%;top:%?0?%;font-size:%?38?%;color:#aaa}.navbar-box .search-box .search-input uni-text[data-v-58a7c612]{padding-left:%?90?%;font-size:%?30?%}.navbar-box .navbar[data-v-58a7c612]{float:left;width:100%;position:relative}.navbar-box .navbar .title[data-v-58a7c612]{width:100%;text-align:center;font-size:%?33?%;font-size:%?29?%}.navbar-box .navbar .prevPage[data-v-58a7c612]{position:absolute;left:%?20?%;top:2%;width:%?60?%;height:%?60?%}.navbar-box .navbar .prevPage uni-text[data-v-58a7c612]{color:#666;font-size:%?65?%;font-weight:700}.navbar-box .navbar .backPage[data-v-58a7c612]{background-color:rgba(0,0,0,.5);border-radius:50%}.navbar-box .navbar .backPage uni-text[data-v-58a7c612]{color:#fff;position:absolute;left:30%;top:50%;-webkit-transform:translate(-30%,-50%);transform:translate(-30%,-50%)}.navbar-box .navbar .statusLine[data-v-58a7c612]{top:%?20?%}',""]),t.exports=e},b50a:function(t,e,a){"use strict";var i=a("88f6"),n=a.n(i);n.a},dda4:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c1f9")),r=i(a("67f3"));function o(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(a,"-").concat(i,"-").concat(n)}var s={components:{navbar:r.default},data:function(){return{avatar:"",username:"",sex:"男",birthday:"",startDate:o("start"),endDate:o("end"),sexIndex:0,sexArray:[{name:"男"},{name:"女"}]}},onShow:function(){var t=this,e=this.$storage.getJson("users");null==e?this.$utils.navigateTo("public/login"):this.$http.getUserInfo().then((function(e){e.status&&(t.username=e.data.nickname,t.sex=e.data.sex,t.birthday=e.data.birthday,t.avatar=e.data.avatar)}))},methods:{bindDateChange:function(t){this.birthday=t.detail.value},bindSexPickerChange:function(t){this.sexIndex=t.detail.value},formSubmit:function(t){var e=this,a=t.detail.value;a.username.length<=0?this.$utils.msg("请填写用户名"):this.$http.editUserInfo(a).then((function(t){e.$utils.msg(t.info)}))},logout:function(){this.$store.commit("DELETEUSERS","users"),this.$utils.navigateTo("public/login")},upload:function(){var t=this.$storage.getJson("users"),e=this;uni.chooseImage({count:1,success:function(a){var i=a.tempFilePaths;uni.uploadFile({url:n.default.uni_app_web_api_url+"/ucenter/avatar",filePath:i[0],name:"file",header:{"Auth-Token":t.token},success:function(t){var a=JSON.parse(t.data);e.avatar=a.data}})}})}}};e.default=s}}]);