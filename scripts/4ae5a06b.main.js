!function(a,b){a.Slider=function(b,c){this.$el=a(c),this._init(b)},a.Slider.defaults={current:0,bgincrement:50,autoplay:!1,interval:4e3},a.Slider.prototype={_init:function(b){this.options=a.extend(!0,{},a.Slider.defaults,b),this.$slides=this.$el.children("div.da-slide"),this.slidesCount=this.$slides.length,this.current=this.options.current,(this.current<0||this.current>=this.slidesCount)&&(this.current=0),this.$slides.eq(this.current).addClass("da-slide-current");for(var c=a('<nav class="da-dots"/>'),d=0;d<this.slidesCount;++d)c.append("<span/>");c.appendTo(this.$el),this.$pages=this.$el.find("nav.da-dots > span"),this.$navNext=this.$el.find("span.da-arrows-next"),this.$navPrev=this.$el.find("span.da-arrows-prev"),this.isAnimating=!1,this.bgpositer=0,this.cssAnimations=Modernizr.cssanimations,this.cssTransitions=Modernizr.csstransitions,this.cssAnimations&&this.cssAnimations||this.$el.addClass("da-slider-fb"),this._updatePage(),this._loadEvents(),this.options.autoplay&&this._startSlideshow()},_navigate:function(a,b){var c,d=this.$slides.eq(this.current),e=this;if(this.current===a||this.isAnimating)return!1;this.isAnimating=!0;var f,g,h;if(h=b||(a>this.current?"next":"prev"),this.cssAnimations&&this.cssAnimations&&("next"===h?(f="da-slide-toleft",g="da-slide-fromright",++this.bgpositer):(f="da-slide-toright",g="da-slide-fromleft",--this.bgpositer),this.$el.css("background-position",this.bgpositer*this.options.bgincrement+"% 0%")),this.current=a,c=this.$slides.eq(this.current),this.cssAnimations&&this.cssAnimations){var i="da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright";d.removeClass(i),c.removeClass(i),d.addClass(f),c.addClass(g),d.removeClass("da-slide-current"),c.addClass("da-slide-current")}this.cssAnimations&&this.cssAnimations||(c.css("left","next"===h?"100%":"-100%").stop().animate({left:"0%"},1e3,function(){e.isAnimating=!1}),d.stop().animate({left:"next"===h?"-100%":"100%"},1e3,function(){d.removeClass("da-slide-current")})),this._updatePage()},_updatePage:function(){this.$pages.removeClass("da-dots-current"),this.$pages.eq(this.current).addClass("da-dots-current")},_startSlideshow:function(){var a=this;this.slideshow=setTimeout(function(){var b=b=a.current<a.slidesCount-1?a.current+1:0;a._navigate(b,"next"),a.options.autoplay&&a._startSlideshow()},this.options.interval)},page:function(a){if(a>=this.slidesCount||a<0)return!1;this.options.autoplay&&(clearTimeout(this.slideshow),this.options.autoplay=!1),this._navigate(a)},_loadEvents:function(){var b=this;this.$pages.on("click.cslider",function(c){return b.page(a(this).index()),!1}),this.$navNext.on("click.cslider",function(a){b.options.autoplay&&(clearTimeout(b.slideshow),b.options.autoplay=!1);var c=c=b.current<b.slidesCount-1?b.current+1:0;return b._navigate(c,"next"),!1}),this.$navPrev.on("click.cslider",function(a){b.options.autoplay&&(clearTimeout(b.slideshow),b.options.autoplay=!1);var c=c=b.current>0?b.current-1:b.slidesCount-1;return b._navigate(c,"prev"),!1}),this.cssTransitions&&(this.options.bgincrement?this.$el.on("webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider",function(a){a.target.id===b.$el.attr("id")&&(b.isAnimating=!1)}):this.$el.on("webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider",function(a){"toRightAnim4"!==a.originalEvent.animationName&&"toLeftAnim4"!==a.originalEvent.animationName||(b.isAnimating=!1)}))}};var c=function(a){this.console&&console.error(a)};a.fn.cslider=function(b){if("string"==typeof b){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var e=a.data(this,"cslider");return e?a.isFunction(e[b])&&"_"!==b.charAt(0)?void e[b].apply(e,d):void c("no such method '"+b+"' for cslider instance"):void c("cannot call methods on cslider prior to initialization; attempted to call method '"+b+"'")})}else this.each(function(){a.data(this,"cslider")||a.data(this,"cslider",new a.Slider(b,this))});return this}}(jQuery),function(a){"use strict";jQuery(document).ready(function(){a("#cform").submit(function(){var b=a(this).attr("action");return a("#message").slideUp(750,function(){a("#message").hide(),a("#submit").before('<img src="images/ajax-loader.gif" class="contact-loader" />').attr("disabled","disabled"),a.post(b,{name:a("#name").val(),email:a("#email").val(),comments:a("#comments").val()},function(b){var c=b.message;document.getElementById("message").innerHTML=c,a("#message").slideDown("slow"),a("#cform img.contact-loader").fadeOut("slow",function(){a(this).remove()}),a("#submit").removeAttr("disabled"),null!=c.match("success")&&a("#cform").slideUp("slow")},"json")}),!1})})}(jQuery),function(a){a(document).ready(function(){var b,c,d=[],e=[],f=0,g="",h="",i="",j=null,k=0,l=0,m=0,n=0;a(window).scroll(function(b){var c=a(this).scrollTop();g=c>f?"down":"up",f=c}),a.fn.stickUp=function(c){a(this).addClass("stuckMenu");var d=0;if(null!=c){for(var f in c.parts)c.parts.hasOwnProperty(f)&&(e[d]=c.parts[d],d++);0==d&&console.log("error:needs arguments"),h=c.itemClass,i=c.itemHover,null!=c.topMargin?"auto"==c.topMargin?n=parseInt(a(".stuckMenu").css("margin-top")):isNaN(c.topMargin)&&c.topMargin.search("px")>0?n=parseInt(c.topMargin.replace("px","")):isNaN(parseInt(c.topMargin))?(console.log("incorrect argument, ignored."),n=0):n=parseInt(c.topMargin):n=0,j=a("."+h).size()}k=parseInt(a(this).height()),l=parseInt(a(this).css("margin-bottom")),m=parseInt(a(this).next().closest("div").css("margin-top")),b=parseInt(a(this).offset().top)},a(document).on("scroll",function(){function f(b){contentView=.4*a("#"+e[b]).height(),testView=d[b]-contentView,c>testView?(a("."+h).removeClass(i),a("."+h+":eq("+b+")").addClass(i)):c<100&&(a("."+h).removeClass(i),a("."+h+":eq(0)").addClass(i))}if(c=parseInt(a(document).scrollTop()),null!=j)for(var o=0;o<j;o++)d[o]=a("#"+e[o]).offset().top,"down"==g&&c>d[o]-100&&c<d[o]+100&&(a("."+h).removeClass(i),a("."+h+":eq("+o+")").addClass(i)),"up"==g&&f(o);b<c+n&&(a(".wrapper").addClass("spHeight"),a(".stuckMenu").addClass("isStuck"),a(".stuckMenu").next().closest("div").css({"margin-top":k+l+m+"px"},10),a(".stuckMenu").css("position","fixed"),a(".isStuck").css({top:"0px"},10,function(){})),c+n<b&&(a(".wrapper").removeClass("spHeight"),a(".stuckMenu").removeClass("isStuck"),a(".stuckMenu").next().closest("div").css({"margin-top":m+"px"},10),a(".stuckMenu").css("position","relative"))})})}(jQuery),$(function(){var a=$(".toggle a"),b=$(".code");a.on("click",function(c){c.preventDefault();var d=$(this);d.hasClass("active")||(a.removeClass("active"),d.addClass("active"),b.hide().filter(this.hash).show())}),a.first().click()}),function(a){a(document).ready(function(){a(".banner").prepend('<div class="patternOverlay"></div>')}),a(window).load(function(){a("#status").fadeOut(),a("#preloader").delay(350).fadeOut("slow")}),a(window).load(function(){a("button.navbar-toggle").click(function(){a(this).toggleClass("active"),a(".navbar-collapse").slideToggle()})});var b=(a(window).width(),a(window).height());a(".banner").css({height:b}),a(window).load(function(){var b=a(".portfolioContainer");b.isotope({filter:"*",animationOptions:{duration:750,easing:"linear",queue:!1}}),a(".portfolioFilter a").click(function(){a(".portfolioFilter .current").removeClass("current"),a(this).addClass("current");var c=a(this).attr("data-filter");return b.isotope({filter:c,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1}),jQuery(function(){a("a[id^=theme-]")})}),a(function(){a("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);if(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length)return a("html,body").animate({scrollTop:b.offset().top-17},1e3),!1}})}),a(window).load(function(){a(".flexslider").flexslider({animation:"fade",animationLoop:!0,slideshow:!0,pauseOnAction:!1,slideshowSpeed:7e3,controlNav:!0,start:function(b){a("body").removeClass("loading")}})}),a(window).load(function(){a(window).width()>960?a(".worklogo").flexslider({animation:"slide",slideshow:!1,itemWidth:320,itemMargin:0}):a(".worklogo").flexslider({animation:"slide",slideshow:!1,itemWidth:320,itemMargin:-2})})}(jQuery),function(a){a(document).ready(function(){a(".navbar-wrapper").stickUp({parts:{0:"banner",1:"services",2:"kaits",3:"events",4:"aboutus",5:"contact"},itemClass:"menuItem",itemHover:"active",topMargin:"auto"})})}(jQuery);