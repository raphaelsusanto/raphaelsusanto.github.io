(function(t){function e(e){for(var n,s,i=e[0],l=e[1],u=e[2],m=0,g=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&g.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(g.length)g.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-navigation-bar"),a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Syntax Highlighter")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/","active-class":"active",exact:""}},[a("a",[t._v("Home")])]),t.isAuth?t._e():a("router-link",{staticClass:"nav-link",attrs:{to:"/Login","active-class":"active",exact:""}},[a("a",[t._v("Login")])]),t.isAuth?t._e():a("router-link",{staticClass:"nav-link",attrs:{to:"/SignUp","active-class":"active",exact:""}},[a("a",[t._v("Sign Up")])]),t.isAuth?a("router-link",{staticClass:"nav-link",attrs:{to:"/SavedData","active-class":"active",exact:""}},[a("a",[t._v("Saved Data")])]):t._e(),t.isAuth?a("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},attrs:{"active-class":"active"},on:{click:t.logout}},[t._v("LogOut")]):t._e()],1)]),t.isAuth?a("form",{staticClass:"form-inline"},[t._v(" "+t._s("Welcome "+t.name)+" ")]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={computed:{name:function(){return this.$store.getters.getName},isAuth:function(){return this.$store.getters.isAuth}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/Login")}}},u=l,c=a("2877"),m=Object(c["a"])(u,s,i,!1,null,null,null),g=m.exports,p={name:"App",components:{AppNavigationBar:g},created:function(){this.$store.commit("loginMutation",localStorage.getItem("token")),this.$store.commit("setname",localStorage.getItem("name"))}},d=p,f=(a("034f"),Object(c["a"])(d,r,o,!1,null,null,null)),v=f.exports,b=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"row p-5"},[a("div",{staticClass:"offset-lg-4"}),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),t._v(" "+t._s(t.errMsg)+" "),a("button",{staticClass:"btn btn-primary mx-auto",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.loginProcess(e)}}},[t._v(" Login ")])])])])},_=[],C=a("5530"),x=a("2f62"),y={data:function(){return{user:{name:""}}},computed:{errMsg:function(){return this.$store.getters.getErrMsg}},methods:Object(C["a"])(Object(C["a"])({},Object(x["b"])({login:"login"})),{},{loginProcess:function(){this.$store.dispatch("login",this.user),this.$router.push("/")}})},M=y,$=Object(c["a"])(M,h,_,!1,null,null,null),O=$.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"row p-5"},[a("div",{staticClass:"offset-lg-4"}),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Programming language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.selectedLanguage,expression:"formData.selectedLanguage"}],staticClass:"custom-select mr-sm-2",attrs:{id:"inlineFormCustomSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"selectedLanguage",e.target.multiple?a:a[0])}}},t._l(t.languages,(function(e,n){return a("option",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"taCode"}},[t._v("FileName")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.filename,expression:"formData.filename"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.formData.filename},on:{input:function(e){e.target.composing||t.$set(t.formData,"filename",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"taCode"}},[t._v("Your Code")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.code,expression:"formData.code"}],staticClass:"form-control",attrs:{id:"taCode",rows:"3"},domProps:{value:t.formData.code},on:{input:function(e){e.target.composing||t.$set(t.formData,"code",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary text-center",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.generate(e)}}},[t._v(" Generate ")]),a("formated-code",[a("div",{domProps:{innerHTML:t._s(t.formatedcode)}})])],1)])])},S=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[t._t("default")],2)},w=[],L=(a("eb3e"),{}),A=Object(c["a"])(L,k,w,!1,null,"296654e8",null),D=A.exports,E={data:function(){return{formData:{selectedLanguage:"",filename:"",code:""}}},computed:{languages:function(){return this.$store.getters.getAvailableLanguage},formatedcode:function(){return this.$store.getters.getStringFormated}},methods:Object(C["a"])(Object(C["a"])({},Object(x["b"])({populateAvailableLanguage:"populateAvailableLanguage",generateFormated:"generateFormated"})),{},{generate:function(){this.$store.dispatch("generateFormated",this.formData)}}),created:function(){this.$store.dispatch("populateAvailableLanguage")},components:{FormatedCode:D}},N=E,P=Object(c["a"])(N,j,S,!1,null,null,null),F=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"row p-5"},[a("div",{staticClass:"offset-lg-4"}),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary mx-auto",attrs:{type:"submit"}},[t._v("Register")])])])])},T=[],U={data:function(){return{name:""}}},H=U,J=Object(c["a"])(H,I,T,!1,null,null,null),B=J.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Saved Data")])},R=[],W={},Y=Object(c["a"])(W,G,R,!1,null,null,null),q=Y.exports,z=[{path:"",component:F},{path:"/Login",component:O},{path:"/SignUp",component:B},{path:"/SavedData",component:q}],K=new b["a"]({mode:"history",routes:z}),Q=(a("b0c0"),a("bc3a")),V=a.n(Q),X={userid:"",name:"",errMsg:""},Z={getUserId:function(t){return t.userid},getErrMsg:function(t){return t.errMsg},getName:function(t){return t.name},isAuth:function(t){return""!=t.userid}},tt={loginMutation:function(t,e){t.userid=e},signoutMutation:function(t){t.userid="",t.name="",t.errMsg=""},setname:function(t,e){t.name=e},setErrMsg:function(t,e){t.errMsg=e}},et={login:function(t,e){var a=t.commit;V.a.post("https://highlight-code-api.vercel.app/api/user/login",{name:e.name}).then((function(t){console.log(t.data.success),t.data.success?(a("loginMutation",t.data.data.id),a("setname",e.name),a("setErrMsg",""),localStorage.setItem("token",t.data.data.id),localStorage.setItem("name",e.name)):(a("setErrMsg",t.data.message),console.log(t.data.message))}))},logout:function(t){var e=t.commit;e("signoutMutation"),localStorage.removeItem("token"),localStorage.removeItem("name")}},at={state:X,mutations:tt,actions:et,getters:Z},nt={stringFormated:"",availableLanguage:[]},rt={getStringFormated:function(t){return t.stringFormated},getAvailableLanguage:function(t){return t.availableLanguage}},ot={generateFormatedMutation:function(t,e){t.stringFormated=e},availableLanguageMutation:function(t,e){t.availableLanguage=e}},st={generateFormated:function(t,e){var a=t.commit;V.a.post("https://highlight-code-api.jefrydco.vercel.app/api",{code:e.code},{params:{lang:e.selectedLanguage,fileName:e.filename}}).then((function(t){console.log(t.data.data),a("generateFormatedMutation",t.data.data)}))},populateAvailableLanguage:function(t){var e=t.commit;V.a.get("https://highlight-code-api.jefrydco.vercel.app/api/options").then((function(t){e("availableLanguageMutation",t.data.data.languages)}))}},it={state:nt,mutations:ot,actions:st,getters:rt};n["a"].use(x["a"]);var lt=new x["a"].Store({modules:{user:at,programming:it}});a("ab8b"),a("9537"),a("3e48");n["a"].use(b["a"]),n["a"].config.productionTip=!1,new n["a"]({router:K,store:lt,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,a){},e303:function(t,e,a){},eb3e:function(t,e,a){"use strict";var n=a("e303"),r=a.n(n);r.a}});
//# sourceMappingURL=app.bc7adbf9.js.map