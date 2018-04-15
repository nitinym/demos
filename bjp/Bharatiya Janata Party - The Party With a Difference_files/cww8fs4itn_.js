if (self.CavalryLogger) { CavalryLogger.start_js(["B9dQf"]); }

__d("VideoSettingsControl.react",["ix","cx","fbt","AbstractButton.react","BanzaiODS","ClickableArea.react","Image.react","React","VideoSettingsMenu.react","TooltipData","VideoPlayerExperiments","asset","gkx","shallowCompare"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=c("React").PropTypes,n=720,o=2160,p=14,q=15;k=babelHelpers.inherits(r,c("React").Component);l=k&&k.prototype;function r(s){"use strict";l.constructor.call(this,s);this.state={isFocus:false}}r.prototype.shouldComponentUpdate=function(s,t){"use strict";return c("shallowCompare")(this,s,t)};r.prototype.onClick=function(){"use strict";if(!this.state.isFocus&&!this.props.disabled&&this.refs.menu&&this.refs.menu.showQualitySelector())c("BanzaiODS").bumpEntityKey("videos","quality_selector.impression");this.setState(function(s){return{isFocus:!s.isFocus}});this.props.onSettingsClick&&this.props.onSettingsClick()};r.prototype.getHDIndicator=function(){"use strict";__p&&__p();var s=c("VideoPlayerExperiments").showHDIndicator&&!this.props.isInline&&this.props.selectedQuality&&(this.props.selectedQuality=="HD"||parseInt(this.props.selectedQuality,10)>=n);if(!s)return null;if(!c("gkx")("AT7ApUZVTaeaFVAZosDCyoYg5jewu8k9nTInty9zhgPcbA_qZ0Wekm54rZEtV5zN2fziN-IbrpdI7b9TIq2nwd-2KJh-lL261Q2BabnaLjE70g")){var t=null;if(parseInt(this.props.selectedQuality,10)>=o)t="4K";else t="HD";return c("React").createElement("span",{className:"_132c"},t)}var u=null;if(parseInt(this.props.selectedQuality,10)>=o)u=c("React").createElement(c("Image.react"),{src:"/images/4k_filled_12-1.5x.png",alt:"4k",height:p,width:q});else u=c("React").createElement(c("Image.react"),{src:"/images/hd_filled_12-1.5x.png",alt:"hd",height:p,width:q});return c("React").createElement("span",{className:"_3pyk"},u)};r.prototype.render=function(){"use strict";var s=c("React").createElement(c("Image.react"),{className:"_rwt",src:h("391244")}),t=j._("Additional Visual Settings"),u=null;if(!this.props.disabled&&this.state.isFocus)u=c("React").createElement("div",{className:"_2iw7"+(this.state.isFocus?" _2iw8":"")},c("React").createElement(c("VideoSettingsMenu.react"),{areSubtitlesActive:this.props.areSubtitlesActive,hasHD:this.props.hasHD,hasSubtitles:this.props.hasSubtitles,isHD:this.props.isHD,isLive:this.props.isLive,isSphericalVideo:this.props.isSphericalVideo,onToggleHD:this.props.onToggleHD,onToggleSubtitles:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,videoID:this.props.videoID,ref:"menu"}));var v=this.getHDIndicator(),w="_zbd"+(this.props.disabled?" _132h":""),x=j._("Settings"),y=c("React").createElement(c("AbstractButton.react"),{className:w,disabled:this.props.disabled,image:s,label:t,labelIsHidden:true,ref:"button",tabIndex:this.props.tabIndex,type:"button"});return c("React").createElement("div",{className:"_2j04"},u,c("React").createElement(c("ClickableArea.react"),babelHelpers["extends"]({},c("TooltipData").propsFor(x,"above"),{onClick:this.onClick.bind(this)}),c("React").createElement("div",null,y,v)))};r.propTypes={disabled:m.bool,hasHD:m.bool,hasSubtitles:m.bool,isHD:m.bool,isInline:m.bool,isLive:m.bool,isSphericalVideo:m.bool,areSubtitlesActive:m.bool,onToggleHD:m.func,onToggleSubtitles:m.func,tabIndex:m.string,availableQualities:m.array,selectedQuality:m.string,canAutoSelectVideoQuality:m.bool,onSelectQuality:m.func,showQualitySelector:m.bool,qualitySelectorMinStreams:m.number,streamingFormat:m.string};r.defaultProps={tabIndex:"-1"};f.exports=r}),null);