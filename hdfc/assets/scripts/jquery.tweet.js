!function(t){t.fn.tweet=function(e){function r(t,e){if("string"==typeof t){var r=t;for(var a in e){var n=e[a];r=r.replace(new RegExp("{"+a+"}","g"),null===n?"":n)}return r}return t(e)}function a(e,r){return function(){var a=[];return this.each(function(){a.push(this.replace(e,r))}),t(a)}}function n(t){return t.replace(/</g,"&lt;").replace(/>/g,"^&gt;")}function i(t,e){return t.replace(p,function(t){for(var r=/^[a-z]+:/i.test(t)?t:"http://"+t,a=t,i=0;i<e.length;++i){var s=e[i];if(s.url==r&&s.expanded_url){r=s.expanded_url,a=s.display_url;break}}return'<a href="'+n(r)+'">'+n(a)+"</a>"})}function s(t){return Date.parse(t.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function u(t){var e=arguments.length>1?arguments[1]:new Date,r=parseInt((e.getTime()-t)/1e3,10),a="";return a=1>r?"just now":60>r?r+" seconds ago":120>r?"a minute ago":2700>r?parseInt(r/60,10).toString()+" minutes ago":7200>r?"an hour ago":86400>r?""+parseInt(r/3600,10).toString()+" hours ago":172800>r?"a day ago":parseInt(r/86400,10).toString()+" days ago","about "+a}function o(t){return t.match(/^(@([A-Za-z0-9-_]+)) .*/i)?w.auto_join_text_reply:t.match(p)?w.auto_join_text_url:t.match(/^((\w+ed)|just) .*/im)?w.auto_join_text_ed:t.match(/^(\w*ing) .*/i)?w.auto_join_text_ing:w.auto_join_text_default}function _(){var t="https:"==document.location.protocol?"https:":"http:",e=null===w.fetch?w.count:w.fetch,r="&include_entities=1&callback=?";if(w.list)return t+"//"+w.twitter_api_url+"/1/"+w.username[0]+"/lists/"+w.list+"/statuses.json?page="+w.page+"&per_page="+e+r;if(w.favorites)return t+"//"+w.twitter_api_url+"/favorites/"+w.username[0]+".json?page="+w.page+"&count="+e+r;if(null===w.query&&1==w.username.length)return t+"//"+w.twitter_api_url+"/1/statuses/user_timeline.json?screen_name="+w.username[0]+"&count="+e+(w.retweets?"&include_rts=1":"")+"&page="+w.page+r;var a=w.query||"from:"+w.username.join(" OR from:");return t+"//"+w.twitter_search_url+"/search.json?&q="+encodeURIComponent(a)+"&rpp="+e+"&page="+w.page+r}function l(t,e){return e?"user"in t?t.user.profile_image_url_https:l(t,!1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/"):t.profile_image_url||t.user.profile_image_url}function c(e){var a={};return a.item=e,a.source=e.source,a.screen_name=e.from_user||e.user.screen_name,a.avatar_size=w.avatar_size,a.avatar_url=l(e,"https:"===document.location.protocol),a.retweet="undefined"!=typeof e.retweeted_status,a.tweet_time=s(e.created_at),a.join_text="auto"==w.join_text?o(e.text):w.join_text,a.tweet_id=e.id_str,a.twitter_base="http://"+w.twitter_url+"/",a.user_url=a.twitter_base+a.screen_name,a.tweet_url=a.user_url+"/status/"+a.tweet_id,a.reply_url=a.twitter_base+"intent/tweet?in_reply_to="+a.tweet_id,a.retweet_url=a.twitter_base+"intent/retweet?tweet_id="+a.tweet_id,a.favorite_url=a.twitter_base+"intent/favorite?tweet_id="+a.tweet_id,a.retweeted_screen_name=a.retweet&&e.retweeted_status.user.screen_name,a.tweet_relative_time=u(a.tweet_time),a.entities=e.entities?(e.entities.urls||[]).concat(e.entities.media||[]):[],a.tweet_raw_text=a.retweet?"RT @"+a.retweeted_screen_name+" "+e.retweeted_status.text:e.text,a.tweet_text=t([i(a.tweet_raw_text,a.entities)]).linkUser().linkHash()[0],a.tweet_text_fancy=t([a.tweet_text]).makeHeart().capAwesome().capEpic()[0],a.user=r('<a class="tweet_user" href="{user_url}">{screen_name}</a>',a),a.join=w.join_text?r(' <span class="tweet_join">{join_text}</span> ',a):" ",a.avatar=a.avatar_size?r('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',a):"",a.time=r('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',a),a.text=r('<span class="tweet_text">{tweet_text_fancy}</span>',a),a.reply_action=r('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',a),a.retweet_action=r('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',a),a.favorite_action=r('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',a),a}var w=t.extend({username:null,list:null,favorites:!1,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:!0,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(t,e){return e.tweet_time-t.tweet_time},filter:function(){return!0}},e),p=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“��?‘’]))/gi;return t.extend({tweet:{t:r}}),t.fn.extend({linkUser:a(/(^|[\W])@(\w+)/gi,'$1@<a href="http://'+w.twitter_url+'/$2">$2</a>'),linkHash:a(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+w.twitter_search_url+"/search?q=&tag=$1&lang=all"+(w.username&&1==w.username.length&&!w.list?"&from="+w.username.join("%2BOR%2B"):"")+'">#$1</a>'),capAwesome:a(/\b(awesome)\b/gi,'<span class="awesome">$1</span>'),capEpic:a(/\b(epic)\b/gi,'<span class="epic">$1</span>'),makeHeart:a(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")}),this.each(function(e,a){var n=t('<ul class="tweet_list">'),i='<p class="tweet_intro">'+w.intro_text+"</p>",s='<p class="tweet_outro">'+w.outro_text+"</p>",u=t('<p class="loading">'+w.loading_text+"</p>");w.username&&"string"==typeof w.username&&(w.username=[w.username]),t(a).bind("tweet:load",function(){w.loading_text&&t(a).empty().append(u),t.getJSON(_(),function(e){t(a).empty().append(n),w.intro_text&&n.before(i),n.empty();var u=t.map(e.results||e,c);u=t.grep(u,w.filter).sort(w.comparator).slice(0,w.count),n.append(t.map(u,function(t){return"<li>"+r(w.template,t)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"),w.outro_text&&n.after(s),t(a).trigger("loaded").trigger(0===u.length?"empty":"full"),w.refresh_interval&&window.setTimeout(function(){t(a).trigger("tweet:load")},1e3*w.refresh_interval)})}).trigger("tweet:load")})}}(jQuery),jQuery(function(t){var e="hdfc_bank";t("#twitterlinkid").attr("href","http://www.twitter.com/"+e),t("#custom").tweet({avatar_size:32,count:1,username:e,favorites:!0,template:"{text}"})}).bind("loaded",function(){$(this).find("a.tweet_action").click(function(t){window.open(this.href,"Retweet","menubar=0,resizable=0,width=550,height=420,top=200,left=400"),t.preventDefault()})});