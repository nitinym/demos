if (self.CavalryLogger) { CavalryLogger.start_js(["0qJn4"]); }

__d("VideoSettingsMenu.react",["ix","cx","fbt","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","Image.react","Layout.react","Link.react","React","Selector.react","URI","VideoPlaybackExperienceIssueType","XUIButton.react","XVideoPlaybackExperienceReportController","MessengerEnvironment","asset","gkx","shallowCompare","isFacebookURI"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=c("Layout.react").Column,n=c("Layout.react").FillColumn,o=c("Selector.react").Option,p=c("React").PropTypes,q=/(instagram)/g;k=babelHelpers.inherits(r,c("React").Component);l=k&&k.prototype;function r(){"use strict";l.constructor.call(this)}r.prototype.shouldComponentUpdate=function(s,t){"use strict";return c("shallowCompare")(this,s,t)};r.prototype.UNSAFE_componentWillMount=function(){"use strict";this.setState({autoSelectVideoQuality:this.props.canAutoSelectVideoQuality,currentMenuContext:"main",feedbackSubmitted:false})};r.prototype.createMenuItem=function(s,t,u,v,w){__p&&__p();var x=arguments.length<=5||arguments[5]===undefined?false:arguments[5];"use strict";var y=function y(){};if(t)y=function y(E){v();E.preventDefault()};var z="_2iw4"+(!t?" _4t7o":""),A=void 0;if(w==="checkBox"){var B=null;if(t&&u)B=c("React").createElement("div",{className:"_2iw1"});A=c("React").createElement("div",{className:"_2iw3"},B)}else if(w==="radioButton"){var C=null;if(t&&u)C=c("React").createElement("div",{className:"_4t7r"});A=c("React").createElement("div",{className:"_4t7u"},C)}var D=s;if(x)D=c("React").createElement("div",null,s.slice(0,-1),c("React").createElement("div",{className:"_4t7w"}));return c("React").createElement("a",{href:"#",key:s,className:z,onClick:y,tabIndex:this.props.tabIndex,"aria-checked":u?"true":"false",role:w==="radioButton"?"radio":"checkbox","aria-disabled":!t},A,c("React").createElement("div",{className:"_2iw5"+(!u?" _4t8e":"")},D))};r.prototype.$VideoSettingsMenu1=function(){"use strict";var s=this.props,t=s.hasSubtitles,u=s.areSubtitlesActive;if(!t)return null;return c("React").createElement(c("Layout.react"),{"aria-checked":u,className:"_2iw4 _1x4e"},c("React").createElement(n,null,j._("Captions")),c("React").createElement(m,null,c("React").createElement("div",{className:"_1x4f"},c("React").createElement(c("BUISwitch.react"),{animate:true,showLabel:true,value:u,onToggle:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex}))))};r.prototype.showQualitySelector=function(){"use strict";return this.props.showQualitySelector&&this.props.streamingFormat==="dash"&&!!this.props.availableQualities&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(s){return!!s})};r.prototype.$VideoSettingsMenu2=function(){"use strict";return c("React").createElement(c("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return this.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:false})}.bind(this)},c("React").createElement(c("Image.react"),{className:"_4t8f",src:h("480579")}))};r.prototype.$VideoSettingsMenu3=function(){"use strict";var s=j._("More Video Settings"),t=new(c("URI"))("/settings/?tab=videos"),u=t.getQualifiedURI().getSubdomain();if(u==="business"||u==="partners")t.setSubdomain("www");if(!c("isFacebookURI")(t))t.setDomain(t.getDomain().replace(q,"facebook"));if(c("MessengerEnvironment").messengerui)t.setDomain("facebook.com").setSubdomain(u).setProtocol("https");return c("React").createElement("a",{href:t,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex},s)};r.prototype.$VideoSettingsMenu4=function(){"use strict";return c("React").createElement(c("Selector.react"),{name:"feedback_selector",onChange:function(s){this.setState({currentFeedbackSelected:s.value?s.value:null})}.bind(this),defaultValue:0},c("React").createElement(o,{value:0},j._("What's wrong with this video?")),c("React").createElement(o,{value:c("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_SYNC},j._("Video and audio are out of sync")),c("React").createElement(o,{value:c("VideoPlaybackExperienceIssueType").VIDEO_ONLY_STUTTER},j._("Video is choppy")),c("React").createElement(o,{value:c("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_STUTTER},j._("Video and audio are choppy")),c("React").createElement(o,{value:c("VideoPlaybackExperienceIssueType").BLACK_SCREEN},j._("Screen is black")),c("React").createElement(o,{value:c("VideoPlaybackExperienceIssueType").VIDEO_WONT_PLAY},j._("Video won't play")))};r.prototype.$VideoSettingsMenu5=function(){"use strict";if(this.state.currentFeedbackSelected){var s=c("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(c("AsyncRequest"))(s).send();this.setState({feedbackSubmitted:true})}};r.prototype.render=function(){"use strict";__p&&__p();var s=null,t=null,u=null,v=null;if(this.showQualitySelector()&&this.props.availableQualities){s=this.props.availableQualities.map(function(x){return this.createMenuItem(x,true,x===this.props.selectedQuality&&!this.state.autoSelectVideoQuality,function(){this.setState({autoSelectVideoQuality:false});this.props.onSelectQuality(x)}.bind(this),"radioButton",this.props.isSphericalVideo)}.bind(this));s.push(this.createMenuItem(j._("Auto"),this.props.canAutoSelectVideoQuality,this.state.autoSelectVideoQuality,function(){this.setState({autoSelectVideoQuality:true});this.props.onSelectQuality(null)}.bind(this),"radioButton"));s.reverse();t=c("React").createElement(c("ClickableAreaButton.react"),{onClick:function(){return this.setState({currentMenuContext:"quality"})}.bind(this),label:"Change Quality"},c("React").createElement("div",{className:"_2iw4 _4t9t"},c("React").createElement(c("Layout.react"),null,c("React").createElement(n,null,j._("Quality")),c("React").createElement(m,{className:"_4t9u"},this.state.autoSelectVideoQuality?j._("Auto"):null," ",c("React").createElement("span",null,this.props.selectedQuality),c("React").createElement(c("Image.react"),{className:"_4t9v",src:h("480587")})))))}else v=this.createMenuItem(j._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");if(this.props.isLive&&c("gkx")("AT6ps_d3SA4msVxLMhgMlLRLYfOD_46vddZZIiLyaR5ivb8X50T4Grf_kTm-TPl3NXKFJikOl3N9AkZIZTLF5iGc"))u=c("React").createElement(c("Link.react"),{onClick:function(){return this.setState({currentMenuContext:"feedback"})}.bind(this),className:"_2iw4 _4t9w"},c("React").createElement(c("Layout.react"),null,c("React").createElement(n,null,j._("Report Video Issue")),c("React").createElement(m,{className:"_4t9u"},c("React").createElement(c("Image.react"),{className:"_4t9v",src:h("480587")}))));var w=null;switch(this.state.currentMenuContext){case"main":w=c("React").createElement("div",{className:"_2i_x"},v,this.$VideoSettingsMenu1(),t,this.$VideoSettingsMenu3(),u);break;case"quality":w=c("React").createElement("div",{className:"_2i_x"},c("React").createElement("div",{className:"_4t9q"},this.$VideoSettingsMenu2(),j._("Quality")),c("React").createElement("div",{className:"_4t9z",role:"radiogroup"},s));break;case"feedback":w=c("React").createElement("div",{className:"_2i_x"},c("React").createElement("div",{className:"_4t9q"},this.$VideoSettingsMenu2(),j._("Report Video Issue")),c("React").createElement("div",{className:"_4t9z"},!this.state.feedbackSubmitted?this.$VideoSettingsMenu4():null,this.state.feedbackSubmitted?c("React").createElement("div",{className:"_4t9-"},j._("Thanks for your feedback!")):c("React").createElement("div",{className:"_4ta3"},c("React").createElement(c("XUIButton.react"),{disabled:!this.state.currentFeedbackSelected,label:j._("Submit"),use:"confirm",onClick:this.$VideoSettingsMenu5.bind(this)}))));break}return c("React").createElement("div",{className:"_2i_w"},w,c("React").createElement("div",{className:"_2j03"}))};r.propTypes={areSubtitlesActive:p.bool,hasHD:p.bool,hasSubtitles:p.bool,isHD:p.bool,isLive:p.bool,isSphericalVideo:p.bool,onToggleHD:p.func,onToggleSubtitles:p.func,tabIndex:p.string,availableQualities:p.array,selectedQuality:p.string,canAutoSelectVideoQuality:p.bool,onSelectQuality:p.func,showQualitySelector:p.bool,qualitySelectorMinStreams:p.number,streamingFormat:p.string};r.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,canAutoSelectVideoQuality:false,showQualitySelector:false,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function s(){}};f.exports=r}),null);