if (self.CavalryLogger) { CavalryLogger.start_js(["hyp45"]); }

__d("PluginLoginButtonEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:PluginLoginButtonEventsLoggerConfig",this.$PluginLoginButtonEventsTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:PluginLoginButtonEventsLoggerConfig",this.$PluginLoginButtonEventsTypedLogger1,c("Banzai").VITAL)};h.prototype.logImmediately=function(){c("GeneratedLoggerUtils").log("logger:PluginLoginButtonEventsLoggerConfig",this.$PluginLoginButtonEventsTypedLogger1,{signal:true})};h.prototype.clear=function(){this.$PluginLoginButtonEventsTypedLogger1={};return this};h.prototype.getData=function(){return babelHelpers["extends"]({},this.$PluginLoginButtonEventsTypedLogger1)};h.prototype.updateData=function(j){this.$PluginLoginButtonEventsTypedLogger1=babelHelpers["extends"]({},this.$PluginLoginButtonEventsTypedLogger1,j);return this};h.prototype.setAppID=function(j){this.$PluginLoginButtonEventsTypedLogger1.app_id=j;return this};h.prototype.setAutoLogoutLink=function(j){this.$PluginLoginButtonEventsTypedLogger1.auto_logout_link=j;return this};h.prototype.setButtonType=function(j){this.$PluginLoginButtonEventsTypedLogger1.button_type=j;return this};h.prototype.setEvent=function(j){this.$PluginLoginButtonEventsTypedLogger1.event=j;return this};h.prototype.setIsLegacy=function(j){this.$PluginLoginButtonEventsTypedLogger1.is_legacy=j;return this};h.prototype.setIsTosed=function(j){this.$PluginLoginButtonEventsTypedLogger1.is_tosed=j;return this};h.prototype.setLoggerID=function(j){this.$PluginLoginButtonEventsTypedLogger1.logger_id=j;return this};h.prototype.setShowFaces=function(j){this.$PluginLoginButtonEventsTypedLogger1.show_faces=j;return this};h.prototype.setSize=function(j){this.$PluginLoginButtonEventsTypedLogger1.size=j;return this};h.prototype.setUseContinueAs=function(j){this.$PluginLoginButtonEventsTypedLogger1.use_continue_as=j;return this};h.prototype.setVC=function(j){this.$PluginLoginButtonEventsTypedLogger1.vc=j;return this};h.prototype.setWidth=function(j){this.$PluginLoginButtonEventsTypedLogger1.width=j;return this};var i={app_id:true,auto_logout_link:true,button_type:true,event:true,is_legacy:true,is_tosed:true,logger_id:true,show_faces:true,size:true,use_continue_as:true,vc:true,width:true};f.exports=h}),null);
__d("PluginContinueAsButton",["cx","CSS"],(function a(b,c,d,e,f,g,h){var i={resize:function j(k){if(k.clientHeight>18)c("CSS").addClass(k,"_4lqf")}};f.exports=i}),null);
/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d("IntersectionObserverFallback",["TimeSlice","performanceNow","setInterval","throttle"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=document.documentElement,i=[];function j(n,o){var p=Math.max(n.top,o.top),q=Math.min(n.bottom,o.bottom),r=Math.max(n.left,o.left),s=Math.min(n.right,o.right),t=s-r,u=q-p;return t>=0&&u>=0?{top:p,bottom:q,left:r,right:s,width:t,height:u}:undefined}function k(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(n){__p&&__p();this.time=n.time;this.target=n.target;this.rootBounds=n.rootBounds;this.boundingClientRect=n.boundingClientRect;this.intersectionRect=n.intersectionRect||k();this.isIntersecting=!!n.intersectionRect;var o=this.boundingClientRect,p=o.width*o.height,q=this.intersectionRect.width*this.intersectionRect.height;if(p)this.intersectionRatio=q/p;else this.intersectionRatio=this.isIntersecting?1:0}function m(n,o){__p&&__p();this.THROTTLE_TIMEOUT=100;this.POLL_INTERVAL=null;this.$IntersectionObserverFallback12=c("TimeSlice").guard(c("throttle")(function(){__p&&__p();var s=this.$IntersectionObserverFallback14(),t=s?this.$IntersectionObserverFallback15():k();this.$IntersectionObserverFallback6.forEach(function(u){var v=u.element,w=v.getBoundingClientRect(),x=this.$IntersectionObserverFallback16(v),y=u.entry,z=s&&x&&!this.$IntersectionObserverFallback2&&this.$IntersectionObserverFallback17(v,t),A=u.entry=new l({time:c("performanceNow")(),target:v,boundingClientRect:w,rootBounds:t,intersectionRect:z});if(!y)this.$IntersectionObserverFallback7.push(A);else if(s&&x){if(this.$IntersectionObserverFallback18(y,A))this.$IntersectionObserverFallback7.push(A)}else if(y&&y.isIntersecting)this.$IntersectionObserverFallback7.push(A)}.bind(this));if(this.$IntersectionObserverFallback7.length)this.$IntersectionObserverFallback1(this.takeRecords(),this)}.bind(this),this.THROTTLE_TIMEOUT),"IntersectionObserverFallback: checkForIntersections");this.$IntersectionObserverFallback2=false;try{var p=window.top.document}catch(q){this.$IntersectionObserverFallback2=true}var r=o||{};this.$IntersectionObserverFallback1=n;this.$IntersectionObserverFallback4=false;this.$IntersectionObserverFallback6=[];this.$IntersectionObserverFallback7=[];this.$IntersectionObserverFallback8=this.$IntersectionObserverFallback9(r.rootMargin);this.thresholds=this.$IntersectionObserverFallback10(r.threshold);this.root=r.root||null;this.rootMargin=this.$IntersectionObserverFallback8.map(function(s){return s.value+s.unit}).join(" ")}m.prototype.$IntersectionObserverFallback10=function(n){var o=n||[0];if(!Array.isArray(o))o=[o];return o.sort().filter(function(p,q,r){return p!==r[q-1]})};m.prototype.$IntersectionObserverFallback9=function(n){var o=n||"0px",p=o.split(/\s+/).map(function(q){var r=/^(-?\d*\.?\d+)(px|%)$/.exec(q);return{value:parseFloat(r[1]),unit:r[2]}});p[1]=p[1]||p[0];p[2]=p[2]||p[0];p[3]=p[3]||p[1];return p};m.prototype.$IntersectionObserverFallback11=function(){__p&&__p();if(!this.$IntersectionObserverFallback4){this.$IntersectionObserverFallback4=true;this.$IntersectionObserverFallback12();if(this.POLL_INTERVAL)this.$IntersectionObserverFallback5=c("setInterval")(this.$IntersectionObserverFallback12,this.POLL_INTERVAL);else{window.addEventListener("resize",this.$IntersectionObserverFallback12);document.addEventListener("scroll",this.$IntersectionObserverFallback12);if("MutationObserver"in window){this.$IntersectionObserverFallback3=new MutationObserver(this.$IntersectionObserverFallback12);this.$IntersectionObserverFallback3.observe(document,{attributes:true,childList:true,characterData:true,subtree:true})}}}};m.prototype.$IntersectionObserverFallback13=function(){__p&&__p();if(this.$IntersectionObserverFallback4){this.$IntersectionObserverFallback4=false;if(this.$IntersectionObserverFallback5){clearInterval(this.$IntersectionObserverFallback5);this.$IntersectionObserverFallback5=undefined}window.removeEventListener("resize",this.$IntersectionObserverFallback12);document.removeEventListener("scroll",this.$IntersectionObserverFallback12);if(this.$IntersectionObserverFallback3){this.$IntersectionObserverFallback3.disconnect();this.$IntersectionObserverFallback3=undefined}}};m.prototype.$IntersectionObserverFallback17=function(n,o){__p&&__p();if(window.getComputedStyle(n).display=="none")return undefined;var p=n.getBoundingClientRect(),q=p,r=n.parentElement,s=false;while(!s){var t=null;if(r==this.root||r&&r.nodeType!=1){s=true;t=o}else if(window.getComputedStyle(r).overflow!="visible")t=r&&r.getBoundingClientRect();if(t){q=j(t,q);if(!q)break}r=r&&r.parentElement}return q};m.prototype.$IntersectionObserverFallback15=function(){var n=void 0;if(this.root)n=this.root.getBoundingClientRect();else{var o=document.documentElement,p=document.body,q=o&&o.clientWidth||p&&p.clientWidth,r=o&&o.clientHeight||p&&p.clientHeight;n={top:0,left:0,right:q,width:q,bottom:r,height:r}}return this.$IntersectionObserverFallback19(n)};m.prototype.$IntersectionObserverFallback19=function(n){var o=this.$IntersectionObserverFallback8.map(function(q,r){return q.unit=="px"?q.value:q.value*(r%2?n.width:n.height)/100}),p={top:n.top-o[0],right:n.right+o[1],bottom:n.bottom+o[2],left:n.left-o[3],width:0,height:0};p.width=p.right-p.left;p.height=p.bottom-p.top;return p};m.prototype.$IntersectionObserverFallback18=function(n,o){var p=n&&n.isIntersecting?n.intersectionRatio||0:-1,q=o.isIntersecting?o.intersectionRatio||0:-1;if(p===q)return false;for(var r=0;r<this.thresholds.length;r++){var s=this.thresholds[r];if(s==p||s==q||s<p!==s<q)return true}return false};m.prototype.$IntersectionObserverFallback14=function(){return!this.root||h!==null&&h.contains(this.root)};m.prototype.$IntersectionObserverFallback16=function(n){var o=this.root||h;return o!==null&&o.contains(n)};m.prototype.$IntersectionObserverFallback20=function(){if(i.indexOf(this)<0)i.push(this)};m.prototype.$IntersectionObserverFallback21=function(){var n=i.indexOf(this);if(n!=-1)i.splice(n,1)};m.prototype.observe=function(n){if(this.$IntersectionObserverFallback6.some(function(o){return o.element==n}))return;this.$IntersectionObserverFallback20();this.$IntersectionObserverFallback6.push({element:n,entry:null});this.$IntersectionObserverFallback11();this.$IntersectionObserverFallback12()};m.prototype.unobserve=function(n){this.$IntersectionObserverFallback6=this.$IntersectionObserverFallback6.filter(function(o){return o.element!=n});if(!this.$IntersectionObserverFallback6.length){this.$IntersectionObserverFallback13();this.$IntersectionObserverFallback21()}};m.prototype.disconnect=function(){this.$IntersectionObserverFallback6=[];this.$IntersectionObserverFallback13();this.$IntersectionObserverFallback21()};m.prototype.takeRecords=function(){var n=this.$IntersectionObserverFallback7.slice();this.$IntersectionObserverFallback7=[];return n};f.exports=m}),null);
__d("IntersectionObserver",["IntersectionObserverFallback"],(function a(b,c,d,e,f,g){"use strict";var h="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;f.exports=h?window.IntersectionObserver:c("IntersectionObserverFallback")}),null);
__d("PluginLoginButton",["Arbiter","DOMEvent","DOMEventListener","DOMQuery","Plugin","PluginLoginButtonEventsTypedLogger","PluginReturn","PluginResize","CSS","PlatformWidgetEndpoint","UnverifiedXD","IntersectionObserver"],(function a(b,c,d,e,f,g){__p&&__p();var h={redirect:function i(j){window.parent.location.replace(j)},submit:function i(j,k,l){new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("logout_click").setAppID(k).setLoggerID(l).logVital();j.submit()},registration:function i(j,k){c("DOMEventListener").add(j,"click",h.redirect.bind(null,k))},connect:function i(j,k,l){var m=h.submit.bind(null,c("DOMQuery").find(j,"^form"),k,l);c("DOMEventListener").add(j,"click",m)},logout:function i(j,k,l){var m=h.submit.bind(null,c("DOMQuery").find(j,"^form"),k,l);c("DOMEventListener").add(j,"click",m)},oauth:function i(j,k,l,m,n,o,p,q,r,s,t){__p&&__p();var u=function u(event,w){if(s){var x=c("PlatformWidgetEndpoint").plugins("login_button");c("PluginReturn").reload(x+(w.crossFrame?"":"?ret=perms"))}};c("Arbiter").subscribe(c("Plugin").RELOAD,u);c("Arbiter").subscribe("Connect.Unsafe.loginReload",u);var v=new(c("IntersectionObserver"))(function(w,x){w.forEach(function(y){if(y.isIntersecting&&y.intersectionRatio===1)new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("became_visible").setAppID(k).setLoggerID(t).logVital();else if(!y.isIntersecting&&y.intersectionRatio===0)new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("became_hidden").setAppID(k).setLoggerID(t).logVital()})},{threshold:[0,1]});v.observe(j);this.action(j,function(event){new(c("DOMEvent"))(event).kill();var w={scope:l,response_type:"none",seen_revocable_perms_nux:n,ref:o,auth_type:p,default_audience:q,locale:r,method:"permissions.oauth",display:"popup",logger_id:t};c("UnverifiedXD").send({type:"login_button_dialog_open",params:JSON.stringify(w)});new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("click").setAppID(k).setLoggerID(t).logVital()})},nux:function i(j,k,l,m){l.style.width=Math.max(j.offsetWidth,200)+"px";function n(){return Math.max(m?m:j.offsetWidth,c("CSS").shown(l)?l.offsetWidth:0)}function o(){return Math.max(j.offsetHeight+(c("CSS").shown(l)?l.offsetHeight:0),k.offsetHeight)}new(c("PluginResize"))(n,o,"resize.iframe",true).resize().auto()},action:function i(j,k){c("DOMEventListener").add(j,"click",k);c("DOMEventListener").add(j,"keydown",function(l){l=new(c("DOMEvent"))(l);var m=l.event.which||l.event.keyCode;if(m===32||m===13)k(l)})}};f.exports=h}),null);
__d("VerifiedXD",["XD"],(function a(b,c,d,e,f,g){var h=c("XD").XD;f.exports=h}),null);