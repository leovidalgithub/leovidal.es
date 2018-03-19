"use strict";angular.module("myAppCV",["pascalprecht.translate","ngSanitize","miscellaneous"]).config(["$translateProvider",function(e){e.registerAvailableLanguageKeys(["es-ES","en-US","fr-FR"],{"en*":"en-US","us*":"en-US","uk*":"en-US","es*":"es-ES","fr*":"fr-FR"}).useStaticFilesLoader({prefix:"locale/lang_",suffix:".json"}).preferredLanguage("en-US").fallbackLanguage("en-US").determinePreferredLanguage().useSanitizeValueStrategy(null)}]).run([function(){}]).controller("mainController",["$rootScope","$translate","$timeout","$http",function(e,t,n,o){var a=this;a.data={},n(function(){var e=t.use()||"en-US";a.myIdiom=e,t.use(e)}),a.submit=function(){a.data.sending=!0;var t="",n=window.location.protocol+"//"+window.location.hostname+"/contact/";o.post(n,a.data).then(function(e){e.data.success?(t="ok",a.data={}):t="error"}).catch(function(e){return t="error"}).finally(function(){e.$broadcast("showThisAlertPlease",{type:t}),a.data.sending=!1})},a.idiomChange=function(e){a.myIdiom=e,t.use(e)}}]),function(){function e(e,t){function n(){if(s.length){i=!0;var e=s.shift();o(e.type,e.msg)}else i=!1}function o(n,o){e.type=n,e.alertMessage=o,a(5,.95),t(function(){a(-390,0)},"ok"==e.type?3900:6500)}function a(e,o){$("#alertMessage").animate({opacity:o,right:e+"px"},850,function(){e<0&&t(function(){n()})})}var i=!1,s=[];e.$on("showThisAlertPlease",function(e,t){s.some(function(e){return e.type==t.type})||s.push({type:t.type,msg:t.msg}),0==i&&n()})}e.$inject=["$scope","$timeout"],angular.module("miscellaneous",[]).directive("alertMessage",function(){return{restrict:"E",scope:!0,transclude:!1,templateUrl:"build/templates/alertMsg/alertmsg.tpl.html",controller:e,link:function(e,t,n){}}}).controller("alertMessageController",e),e.$invoke=["$scope","$timeout"]}(),jQuery(document).ready(function(e){setTimeout(function(){e("h1.responsive-headline").fitText(1,{minFontSize:"40px",maxFontSize:"75px"}),e("#portfolio h2").fitText(1,{minFontSize:"30px",maxFontSize:"85px"}),e(document.body).css("opacity","1")},800),e("#idioms .selected").mouseenter(function(n){e("#idioms .choose").clearQueue().show().animate({opacity:"1",right:"8px","z-index":"15"},"slow",t)});var t=function(){e("#idioms .choose").bind("mouseleave click",function(t){e("#idioms .choose").animate({opacity:"0",right:"-70px","z-index":"5"},"slow",function(){e("#idioms .choose").hide().unbind()})})};e(".jsInit").parallax({imageSrc:"./images/collage-4.png",speed:.4,position:"center center",zIndex:"0",androidFix:!1,iosFix:!1}),e(".smoothscroll").on("click",function(t){t.preventDefault();var n=this.hash,o=e(n);e("html, body").stop().animate({scrollTop:o.offset().top},1100,"swing",function(){window.location.hash=n})});var n=e("section"),o=e("#nav-wrap a");n.waypoint({handler:function(t){var n=e(this.element);"up"===t&&(n=n.prev());var a=e('#nav-wrap a[href="#'+n.attr("id")+'"]');o.parent().removeClass("current"),a.parent().addClass("current")},offset:"18%"});new Waypoint({element:document.getElementById("mySkills"),handler:function(){var t=["AngularJS","Angular4","NodeJS","ExpressJS","JavaScript","Sass","jQuery","MongoDB","HTML_CSS","Bootstrap","Git","Gulp","PHP","Scrum","NET","Jasmine","Webpack"];e("#resume ul.skills li span").each(function(n){e(this).delay(3e3).addClass(t[n])}),this.destroy()},offset:"23%"}),new Waypoint({element:document.getElementById("contact"),handler:function(){setTimeout(function(){e("#contact .touchIcon").addClass("spin")},1e3),this.destroy()},offset:"15%"});var a=function(){for(var t=e(window).height(),n=["header","about","resume","portfolio","contact"],o=0;o<n.length;o++)e("#"+n[o]).css({"min-height":t})};a(),e(window).on("resize",function(){a()}),e(window).on("scroll",function(){var t=e("header").height(),n=e(window).scrollTop(),o=e("#nav-wrap");n>.2*t&&n<t&&e(window).outerWidth()>768?o.fadeOut("fast"):n<.2*t?o.fadeIn(1e3).removeClass("opaque"):o.fadeIn(1e3).addClass("opaque")})});