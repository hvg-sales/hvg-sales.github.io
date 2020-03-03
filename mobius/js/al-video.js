/* 
 * Perspective ad v2.0 beta
 * @author Möbius <http://mobiusmobilemarketing.com/>
 * @author AL
 */



/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
; window.Modernizr = function(a, b, c){function z(a){j.cssText = a}function A(a, b){return z(m.join(a + ";") + (b || ""))}function B(a, b){return typeof a === b}function C(a, b){return!!~("" + a).indexOf(b)}function D(a, b){for (var d in a){var e = a[d]; if (!C(e, "-") && j[e] !== c)return b == "pfx"?e:!0}return!1}function E(a, b, d){for (var e in a){var f = b[a[e]]; if (f !== c)return d === !1?a[e]:B(f, "function")?f.bind(d || b):f}return!1}function F(a, b, c){var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" "); return B(b, "string") || B(b, "undefined")?D(e, b):(e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))}var d = "2.7.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function(a, c, d, e){var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body"); if (parseInt(d, 10))while (d--)j = b.createElement("div"), j.id = e?e[d]:h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m?l:n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n), g.style.overflow = k), !!i}, x = {}.hasOwnProperty, y; !B(x, "undefined") && !B(x.call, "undefined")?y = function(a, b){return x.call(a, b)}:y = function(a, b){return b in a && B(a.constructor.prototype[b], "undefined")}, Function.prototype.bind || (Function.prototype.bind = function(b){var c = this; if (typeof c != "function")throw new TypeError; var d = u.call(arguments, 1), e = function(){if (this instanceof e){var a = function(){}; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(u.call(arguments))); return Object(g) === g?g:f}return c.apply(b, d.concat(u.call(arguments)))}; return e}), q.csstransforms3d = function(){var a = !!F("perspective"); return a && "webkitPerspective"in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c){a = b.offsetLeft === 9 && b.offsetHeight === 3}), a}, q.csstransitions = function(){return F("transition")}; for (var G in q)y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v]?"":"no-") + v)); return e.addTest = function(a, b){if (typeof a == "object")for (var d in a)y(a, d) && e.addTest(d, a[d]); else{a = a.toLowerCase(); if (e[a] !== c)return e; b = typeof b == "function"?b():b, typeof f != "undefined" && f && (g.className += " " + (b?"":"no-") + a), e[a] = b}return e}, z(""), i = k = null, function(a, b){function l(a, b){var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)}function m(){var a = s.elements; return typeof a == "string"?a.split(" "):a}function n(a){var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b}function o(a, c, d){c || (c = b); if (k)return c.createElement(a); d || (d = n(c)); var g; return d.cache[a]?g = d.cache[a].cloneNode():f.test(a)?g = (d.cache[a] = d.createElem(a)).cloneNode():g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn?d.frag.appendChild(g):g}function p(a, c){a || (a = b); if (k)return a.createDocumentFragment(); c = c || n(a); var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; for (; e < g; e++)d.createElement(f[e]); return d}function q(a, b){b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c){return s.shivMethods?o(c, a, b):b.createElem(c)}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a){return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'}) + ");return n}")(s, b.frag)}function r(a){a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a}var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k; (function(){try{var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function(){b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"}()} catch (c){g = !0, k = !0}})(); var s = {elements:d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version:c, shivCSS:d.shivCSS !== !1, supportsUnknownElements:k, shivMethods:d.shivMethods !== !1, type:"default", shivDocument:r, createElement:o, createDocumentFragment:p}; a.html5 = s, r(b)}(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a){return D([a])}, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c){return b?F(a, b, c):F(a, "pfx")}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f?" js " + t.join(" "):""), e}(this, this.document), function(a, b, c){function d(a){return"[object Function]" == o.call(a)}function e(a){return"string" == typeof a}function f(){}function g(a){return!a || "loaded" == a || "complete" == a || "uninitialized" == a}function h(){var a = p.shift(); q = 1, a?a.t?m(function(){("c" == a.t?B.injectCss:B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)}, 0):(a(), h()):q = 0}function i(a, c, d, e, f, i, j){function k(b){if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)){"img" != a && m(function(){t.removeChild(l)}, 50); for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()}}var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t:d, s:c, e:f, a:i, x:j}; 1 === y[c] && (r = 1, y[c] = []), "object" == a?l.data = c:(l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function(){k.call(this, r)}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c]?(t.insertBefore(l, s?null:n), m(k, j)):y[c].push(l))}function j(a, b, c, d, f){return q = 0, b = b || "j", e(a)?i("c" == b?v:u, a, b, this.i++, c, d, f):(p.splice(this.i++, 0, a), 1 == p.length && h()), this}function k(){var a = B; return a.loader = {load:j, i:0}, a}var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s?l:n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r?"object":l?"script":"img", v = l?"script":u, w = Array.isArray || function(a){return"[object Array]" == o.call(a)}, x = [], y = {}, z = {timeout:function(a, b){return b.length && (a.timeout = b[0]), a}}, A, B; B = function(a){function b(a){var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url:c, origUrl:c, prefixes:a}, e, f, g; for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++)c = x[f](c); return c}function g(a, e, f, g, h){var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e)?e:e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead?i.instead(a, e, f, g, h):(y[i.url]?i.noexec = !0:y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift()?"c":c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function(){k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2})))}function h(a, b){function c(a, c){if (a){if (e(a))c || (j = function(){var a = [].slice.call(arguments); k.apply(this, a), l()}), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function(){var b = 0, c; for (c in a)a.hasOwnProperty(c) && b++; return b}(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j)?j = function(){var a = [].slice.call(arguments); k.apply(this, a), l()}:j[n] = function(a){return function(){var b = [].slice.call(arguments); a && a.apply(this, b), l()}}(k[n])), g(a[n], j, b, n, h))} else!c && l()}var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h?a.yep:a.nope, !!i), i && c(i)}var i, j, l = this.yepnope.loader; if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j)?g(j, 0, l, 0):w(j)?B(j):Object(j) === j && h(j, l); else Object(a) === a && h(a, l)}, B.addPrefix = function(a, b){z[a] = b}, B.addFilter = function(a){x.push(a)}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function(){b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j){var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d)k.setAttribute(o, d[o]); c = j?h:c || f, k.onreadystatechange = k.onload = function(){!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)}, m(function(){l || (l = 1, c(1))}, e), i?k.onload():n.parentNode.insertBefore(k, n)}, a.yepnope.injectCss = function(a, c, d, e, g, i){var e = b.createElement("link"), j, c = i?h:c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d)e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0))}}(this, document), Modernizr.load = function(){yepnope.apply(window, [].slice.call(arguments, 0))};
        /*
         _ _      _       _
         ___| (_) ___| | __  (_)___
         / __| | |/ __| |/ /  | / __|
         \__ \ | | (__|   < _ | \__ \
         |___/_|_|\___|_|\_(_)/ |___/
         |__/
         
         Version: 1.5.9
         Author: Ken Wheeler
         Website: http://kenwheeler.github.io
         Docs: http://kenwheeler.github.io/slick
         Repo: http://github.com/kenwheeler/slick
         Issues: http://github.com/kenwheeler/slick/issues
         
         */
        !function(a){"use strict"; "function" == typeof define && define.amd?define(["jquery"], a):"undefined" != typeof exports?module.exports = a(require("jquery")):a(jQuery)}(function(a){"use strict"; var b = window.Slick || {}; b = function(){function c(c, d){var f, e = this; e.defaults = {accessibility:!0, adaptiveHeight:!1, appendArrows:a(c), appendDots:a(c), arrows:!0, asNavFor:null, prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay:!1, autoplaySpeed:3e3, centerMode:!1, centerPadding:"50px", cssEase:"ease", customPaging:function(a, b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"}, dots:!1, dotsClass:"slick-dots", draggable:!0, easing:"linear", edgeFriction:.35, fade:!1, focusOnSelect:!1, infinite:!0, initialSlide:0, lazyLoad:"ondemand", mobileFirst:!1, pauseOnHover:!0, pauseOnDotsHover:!1, respondTo:"window", responsive:null, rows:1, rtl:!1, slide:"", slidesPerRow:1, slidesToShow:1, slidesToScroll:1, speed:500, swipe:!0, swipeToSlide:!1, touchMove:!0, touchThreshold:5, useCSS:!0, useTransform:!1, variableWidth:!1, vertical:!1, verticalSwiping:!1, waitForAnimate:!0, zIndex:1e3}, e.initials = {animating:!1, dragging:!1, autoPlayTimer:null, currentDirection:0, currentLeft:null, currentSlide:0, direction:1, $dots:null, listWidth:null, listHeight:null, loadIndex:0, $nextArrow:null, $prevArrow:null, slideCount:null, slideWidth:null, $slideTrack:null, $slides:null, sliding:!1, slideOffset:0, swipeLeft:null, $list:null, touchObject:{}, transformsEnabled:!1, unslicked:!1}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden?(e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange"):"undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)}var b = 0; return c}(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d){var e = this; if ("boolean" == typeof c)d = c, c = null; else if (0 > c || c >= e.slideCount)return!1; e.unload(), "number" == typeof c?0 === c && 0 === e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d === !0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c){a(c).attr("data-slick-index", b)}), e.$slidesCache = e.$slides, e.reinit()}, b.prototype.animateHeight = function(){var a = this; if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1){var b = a.$slides.eq(a.currentSlide).outerHeight(!0); a.$list.animate({height:b}, a.options.speed)}}, b.prototype.animateSlide = function(b, c){var d = {}, e = this; e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = - b), e.transformsEnabled === !1?e.options.vertical === !1?e.$slideTrack.animate({left:b}, e.options.speed, e.options.easing, c):e.$slideTrack.animate({top:b}, e.options.speed, e.options.easing, c):e.cssTransitions === !1?(e.options.rtl === !0 && (e.currentLeft = - e.currentLeft), a({animStart:e.currentLeft}).animate({animStart:b}, {duration:e.options.speed, easing:e.options.easing, step:function(a){a = Math.ceil(a), e.options.vertical === !1?(d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)):(d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))}, complete:function(){c && c.call()}})):(e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1?d[e.animType] = "translate3d(" + b + "px, 0px, 0px)":d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function(){e.disableTransition(), c.call()}, e.options.speed))}, b.prototype.asNavFor = function(b){var c = this, d = c.options.asNavFor; d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function(){var c = a(this).slick("getSlick"); c.unslicked || c.slideHandler(b, !0)})}, b.prototype.applyTransition = function(a){var b = this, c = {}; b.options.fade === !1?c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase:c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)}, b.prototype.autoPlay = function(){var a = this; a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))}, b.prototype.autoPlayClear = function(){var a = this; a.autoPlayTimer && clearInterval(a.autoPlayTimer)}, b.prototype.autoPlayIterator = function(){var a = this; a.options.infinite === !1?1 === a.direction?(a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)):(a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)):a.slideHandler(a.currentSlide + a.options.slidesToScroll)}, b.prototype.buildArrows = function(){var b = this; b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true", tabindex:"-1"}))}, b.prototype.buildDots = function(){var c, d, b = this; if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow){for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1)d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>"; d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")}}, b.prototype.buildOut = function(){var b = this; b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c){a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide?b.currentSlide:0), b.options.draggable === !0 && b.$list.addClass("draggable")}, b.prototype.buildRows = function(){var b, c, d, e, f, g, h, a = this; if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1){for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++){var i = document.createElement("div"); for (c = 0; c < a.options.rows; c++){var j = document.createElement("div"); for (d = 0; d < a.options.slidesPerRow; d++){var k = b * h + (c * a.options.slidesPerRow + d); g.get(k) && j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e), a.$slider.children().children().children().css({width:100 / a.options.slidesPerRow + "%", display:"inline-block"})}}, b.prototype.checkResponsive = function(b, c){var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width(); if ("window" === d.respondTo?g = j:"slider" === d.respondTo?g = i:"min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive){f = null; for (e in d.breakpoints)d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1?g < d.breakpoints[e] && (f = d.breakpoints[e]):g > d.breakpoints[e] && (f = d.breakpoints[e])); null !== f?null !== d.activeBreakpoint?(f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f]?d.unslick(f):(d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f):(d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f]?d.unslick(f):(d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f):null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])}}, b.prototype.changeSlide = function(b, c){var f, g, h, d = this, e = a(b.target); switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h?0:(d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message){case"previous":g = 0 === f?d.options.slidesToScroll:d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c); break; case"next":g = 0 === f?d.options.slidesToScroll:f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c); break; case"index":var i = 0 === b.data.index?0:b.data.index || e.index() * d.options.slidesToScroll; d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus"); break; default:return}}, b.prototype.checkNavigable = function(a){var c, d, b = this; if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1])a = c[c.length - 1]; else for (var e in c){if (a < c[e]){a = d; break}d = c[e]}return a}, b.prototype.cleanUpEvents = function(){var b = this; b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)}, b.prototype.cleanUpRows = function(){var b, a = this; a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))}, b.prototype.clickHandler = function(a){var b = this; b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())}, b.prototype.destroy = function(b){var c = this; c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style", a(this).data("originalStyling"))}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])}, b.prototype.disableTransition = function(a){var b = this, c = {}; c[b.transitionType] = "", b.options.fade === !1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)}, b.prototype.fadeSlide = function(a, b){var c = this; c.cssTransitions === !1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}), c.$slides.eq(a).animate({opacity:1}, c.options.speed, c.options.easing, b)):(c.applyTransition(a), c.$slides.eq(a).css({opacity:1, zIndex:c.options.zIndex}), b && setTimeout(function(){c.disableTransition(a), b.call()}, c.options.speed))}, b.prototype.fadeSlideOut = function(a){var b = this; b.cssTransitions === !1?b.$slides.eq(a).animate({opacity:0, zIndex:b.options.zIndex - 2}, b.options.speed, b.options.easing):(b.applyTransition(a), b.$slides.eq(a).css({opacity:0, zIndex:b.options.zIndex - 2}))}, b.prototype.filterSlides = b.prototype.slickFilter = function(a){var b = this; null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function(){var a = this; return a.currentSlide}, b.prototype.getDotCount = function(){var a = this, b = 0, c = 0, d = 0; if (a.options.infinite === !0)for (; b < a.slideCount; )++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow; else if (a.options.centerMode === !0)d = a.slideCount; else for (; b < a.slideCount; )++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow; return d - 1}, b.prototype.getLeft = function(a){var c, d, f, b = this, e = 0; return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0?(b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * - 1, e = d * b.options.slidesToShow * - 1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount?(b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * - 1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * - 1):(b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * - 1, e = b.slideCount % b.options.slidesToScroll * d * - 1))):a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0?b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth:b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1?a * b.slideWidth * - 1 + b.slideOffset:a * d * - 1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0?f[0]? - 1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()):0:f[0]? - 1 * f[0].offsetLeft:0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0?f[0]? - 1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()):0:f[0]? - 1 * f[0].offsetLeft:0, c += (b.$list.width() - f.outerWidth()) / 2)), c}, b.prototype.getOption = b.prototype.slickGetOption = function(a){var b = this; return b.options[a]}, b.prototype.getNavigableIndexes = function(){var e, a = this, b = 0, c = 0, d = []; for (a.options.infinite === !1?e = a.slideCount:(b = - 1 * a.options.slidesToScroll, c = - 1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b; )d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow; return d}, b.prototype.getSlick = function(){return this}, b.prototype.getSlideCount = function(){var c, d, e, b = this; return e = b.options.centerMode === !0?b.slideWidth * Math.floor(b.options.slidesToShow / 2):0, b.options.swipeToSlide === !0?(b.$slideTrack.find(".slick-slide").each(function(c, f){return f.offsetLeft - e + a(f).outerWidth() / 2 > - 1 * b.swipeLeft?(d = f, !1):void 0}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1):b.options.slidesToScroll}, b.prototype.goTo = b.prototype.slickGoTo = function(a, b){var c = this; c.changeSlide({data:{message:"index", index:parseInt(a)}}, b)}, b.prototype.init = function(b){var c = this; a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()}, b.prototype.initArrowEvents = function(){var a = this; a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {message:"previous"}, a.changeSlide), a.$nextArrow.on("click.slick", {message:"next"}, a.changeSlide))}, b.prototype.initDotEvents = function(){var b = this; b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {message:"index"}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))}, b.prototype.initializeEvents = function(){var b = this; b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {action:"start"}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {action:"move"}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {action:"end"}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {action:"end"}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)}, b.prototype.initUI = function(){var a = this; a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()}, b.prototype.keyHandler = function(a){var b = this; a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0?b.changeSlide({data:{message:"previous"}}):39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({data:{message:"next"}}))}, b.prototype.lazyLoad = function(){function g(b){a("img[data-lazy]", b).each(function(){var b = a(this), c = a(this).attr("data-lazy"), d = document.createElement("img"); d.onload = function(){b.animate({opacity:0}, 100, function(){b.attr("src", c).animate({opacity:1}, 200, function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})}, d.src = c})}var c, d, e, f, b = this; b.options.centerMode === !0?b.options.infinite === !0?(e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2):(e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide):(e = b.options.infinite?b.options.slidesToShow + b.currentSlide:b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow?(d = b.$slider.find(".slick-slide"), g(d)):b.currentSlide >= b.slideCount - b.options.slidesToShow?(d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)):0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice( - 1 * b.options.slidesToShow), g(d))}, b.prototype.loadSlider = function(){var a = this; a.setPosition(), a.$slideTrack.css({opacity:1}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()}, b.prototype.next = b.prototype.slickNext = function(){var a = this; a.changeSlide({data:{message:"next"}})}, b.prototype.orientationChange = function(){var a = this; a.checkResponsive(), a.setPosition()}, b.prototype.pause = b.prototype.slickPause = function(){var a = this; a.autoPlayClear(), a.paused = !0}, b.prototype.play = b.prototype.slickPlay = function(){var a = this; a.paused = !1, a.autoPlay()}, b.prototype.postSlide = function(a){var b = this; b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()}, b.prototype.prev = b.prototype.slickPrev = function(){var a = this; a.changeSlide({data:{message:"previous"}})}, b.prototype.preventDefault = function(a){a.preventDefault()}, b.prototype.progressiveLazyLoad = function(){var c, d, b = this; c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()}).error(function(){d.removeAttr("data-lazy"), b.progressiveLazyLoad()}))}, b.prototype.refresh = function(b){var d, e, c = this; e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow?c.currentSlide = 0:c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {currentSlide:d}), c.init(), b || c.changeSlide({data:{message:"index", index:d}}, !1)}, b.prototype.registerBreakpoints = function(){var c, d, e, b = this, f = b.options.responsive || null; if ("array" === a.type(f) && f.length){b.respondTo = b.options.respondTo || "window"; for (c in f)if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)){for (; e >= 0; )b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--; b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings}b.breakpoints.sort(function(a, c){return b.options.mobileFirst?a - c:c - a})}}, b.prototype.reinit = function(){var b = this; b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()}, b.prototype.resize = function(){var b = this; a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function(){b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()}, 50))}, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c){var d = this; return"boolean" == typeof a?(b = a, a = b === !0?0:d.slideCount - 1):a = b === !0?--a:a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1?!1:(d.unload(), c === !0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())}, b.prototype.setCSS = function(a){var d, e, b = this, c = {}; b.options.rtl === !0 && (a = - a), d = "left" == b.positionProp?Math.ceil(a) + "px":"0px", e = "top" == b.positionProp?Math.ceil(a) + "px":"0px", c[b.positionProp] = a, b.transformsEnabled === !1?b.$slideTrack.css(c):(c = {}, b.cssTransitions === !1?(c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)):(c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))}, b.prototype.setDimensions = function(){var a = this; a.options.vertical === !1?a.options.centerMode === !0 && a.$list.css({padding:"0px " + a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({padding:a.options.centerPadding + " 0px"})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1?(a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth === !0?a.$slideTrack.width(5e3 * a.slideCount):(a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length))); var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width(); a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)}, b.prototype.setFade = function(){var c, b = this; b.$slides.each(function(d, e){c = b.slideWidth * d * - 1, b.options.rtl === !0?a(e).css({position:"relative", right:c, top:0, zIndex:b.options.zIndex - 2, opacity:0}):a(e).css({position:"relative", left:c, top:0, zIndex:b.options.zIndex - 2, opacity:0})}), b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex - 1, opacity:1})}, b.prototype.setHeight = function(){var a = this; if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1){var b = a.$slides.eq(a.currentSlide).outerHeight(!0); a.$list.css("height", b)}}, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d){var f, g, e = this; if ("responsive" === b && "array" === a.type(c))for (g in c)if ("array" !== a.type(e.options.responsive))e.options.responsive = [c[g]]; else{for (f = e.options.responsive.length - 1; f >= 0; )e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--; e.options.responsive.push(c[g])} else e.options[b] = c; d === !0 && (e.unload(), e.reinit())}, b.prototype.setPosition = function(){var a = this; a.setDimensions(), a.setHeight(), a.options.fade === !1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(), a.$slider.trigger("setPosition", [a])}, b.prototype.setProps = function(){var a = this, b = document.body.style; a.positionProp = a.options.vertical === !0?"top":"left", "top" === a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex?a.options.zIndex < 3 && (a.options.zIndex = 3):a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1}, b.prototype.setSlideClasses = function(a){var c, d, e, f, b = this; d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0?(c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c?b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false"):(e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a?d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center"):a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")):a >= 0 && a <= b.slideCount - b.options.slidesToShow?b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"):d.length <= b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden", "false"):(f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0?b.options.slidesToShow + a:a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow?d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false"):d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()}, b.prototype.setupInfinite = function(){var c, d, e, b = this; if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)){for (e = b.options.centerMode === !0?b.options.slidesToShow + 1:b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned"); for (c = 0; e > c; c += 1)d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned"); b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id", "")})}}, b.prototype.setPaused = function(a){var b = this; b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a?b.autoPlayClear():b.autoPlay())}, b.prototype.selectHandler = function(b){var c = this, d = a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"), e = parseInt(d.attr("data-slick-index")); return e || (e = 0), c.slideCount <= c.options.slidesToShow?(c.setSlideClasses(e), void c.asNavFor(e)):void c.slideHandler(e)}, b.prototype.slideHandler = function(a, b, c){var d, e, f, g, h = null, i = this; return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow?void 0:(b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft?g:i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll)?void(i.options.fade === !1 && (d = i.currentSlide, c !== !0?i.animateSlide(g, function(){i.postSlide(d);
        }):i.postSlide(d))):i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll)?void(i.options.fade === !1 && (d = i.currentSlide, c !== !0?i.animateSlide(g, function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d?i.slideCount % i.options.slidesToScroll !== 0?i.slideCount - i.slideCount % i.options.slidesToScroll:i.slideCount + d:d >= i.slideCount?i.slideCount % i.options.slidesToScroll !== 0?0:d - i.slideCount:d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0?(c !== !0?(i.fadeSlideOut(f), i.fadeSlide(e, function(){i.postSlide(e)})):i.postSlide(e), void i.animateHeight()):void(c !== !0?i.animateSlide(h, function(){i.postSlide(e)}):i.postSlide(e))))}, b.prototype.startLoad = function(){var a = this; a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")}, b.prototype.swipeDirection = function(){var a, b, c, d, e = this; return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0?e.options.rtl === !1?"left":"right":360 >= d && d >= 315?e.options.rtl === !1?"left":"right":d >= 135 && 225 >= d?e.options.rtl === !1?"right":"left":e.options.verticalSwiping === !0?d >= 35 && 135 >= d?"left":"right":"vertical"}, b.prototype.swipeEnd = function(a){var c, b = this; if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10?!1:!0, void 0 === b.touchObject.curX)return!1; if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe)switch (b.swipeDirection()){case"left":c = b.options.swipeToSlide?b.checkNavigable(b.currentSlide + b.getSlideCount()):b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]); break; case"right":c = b.options.swipeToSlide?b.checkNavigable(b.currentSlide - b.getSlideCount()):b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})}, b.prototype.swipeHandler = function(a){var b = this; if (!(b.options.swipe === !1 || "ontouchend"in document && b.options.swipe === !1 || b.options.draggable === !1 && - 1 !== a.type.indexOf("mouse")))switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches?a.originalEvent.touches.length:1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action){case"start":b.swipeStart(a); break; case"move":b.swipeMove(a); break; case"end":b.swipeEnd(a)}}, b.prototype.swipeMove = function(a){var d, e, f, g, h, b = this; return h = void 0 !== a.originalEvent?a.originalEvent.touches:null, !b.dragging || h && 1 !== h.length?!1:(d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h?h[0].pageX:a.clientX, b.touchObject.curY = void 0 !== h?h[0].pageY:a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e?(void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1?1: - 1) * (b.touchObject.curX > b.touchObject.startX?1: - 1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY?1: - 1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1?b.swipeLeft = d + f * g:b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1?!1:b.animating === !0?(b.swipeLeft = null, !1):void b.setCSS(b.swipeLeft)):void 0)}, b.prototype.swipeStart = function(a){var c, b = this; return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow?(b.touchObject = {}, !1):(void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c?c.pageX:a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c?c.pageY:a.clientY, void(b.dragging = !0))}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function(){var a = this; null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())}, b.prototype.unload = function(){var b = this; a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")}, b.prototype.unslick = function(a){var b = this; b.$slider.trigger("unslick", [b, a]), b.destroy()}, b.prototype.updateArrows = function(){var b, a = this; b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")):a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")):a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))}, b.prototype.updateDots = function(){var a = this; null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))}, b.prototype.visibility = function(){var a = this; document[a.hidden]?(a.paused = !0, a.autoPlayClear()):a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())}, b.prototype.initADA = function(){var b = this; b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true", tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option", "aria-describedby":"slick-slide" + b.instanceUid + c})}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c){a(this).attr({role:"presentation", "aria-selected":"false", "aria-controls":"navigation" + b.instanceUid + c, id:"slick-slide" + b.instanceUid + c})}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()}, b.prototype.activateADA = function(){var a = this; a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})}, b.prototype.focusHandler = function(){var b = this; b.$slider.on("focus.slick blur.slick", "*", function(c){c.stopImmediatePropagation(); var d = a(this); setTimeout(function(){b.isPlay && (d.is(":focus")?(b.autoPlayClear(), b.paused = !0):(b.paused = !1, b.autoPlay()))}, 0)})}, a.fn.slick = function(){var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length; for (f = 0; e > f; f++)if ("object" == typeof c || "undefined" == typeof c?a[f].slick = new b(a[f], c):g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g)return g; return a}});
        /*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
         is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
         */
        var swfobject = function(){var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function(){var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y?/win/.test(Y):/win/.test(ah), ac = Y?/mac/.test(Y):/mac/.test(ah), af = /webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")):false, X = ! + "\v1", ag = [0, 0, 0], ab = null; if (typeof t.plugins != D && typeof t.plugins[S] == r){ab = t.plugins[S].description; if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)){T = true; X = false; ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1"); ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10); ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10); ag[2] = /[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10):0}} else{if (typeof O.ActiveXObject != D){try{var ad = new ActiveXObject(W); if (ad){ab = ad.GetVariable("$version"); if (ab){X = true; ab = ab.split(" ")[1].split(","); ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]}}} catch (Z){}}}return{w3:aa, pv:ag, wk:af, ie:X, win:ae, mac:ac}}(), k = function(){if (!M.w3){return}if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))){f()}if (!J){if (typeof j.addEventListener != D){j.addEventListener("DOMContentLoaded", f, false)}if (M.ie && M.win){j.attachEvent(x, function(){if (j.readyState == "complete"){j.detachEvent(x, arguments.callee); f()}}); if (O == top){(function(){if (J){return}try{j.documentElement.doScroll("left")} catch (X){setTimeout(arguments.callee, 0); return}f()})()}}if (M.wk){(function(){if (J){return}if (!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee, 0); return}f()})()}s(f)}}(); function f(){if (J){return}try{var Z = j.getElementsByTagName("body")[0].appendChild(C("span")); Z.parentNode.removeChild(Z)} catch (aa){return}J = true; var X = U.length; for (var Y = 0; Y < X; Y++){U[Y]()}}function K(X){if (J){X()} else{U[U.length] = X}}function s(Y){if (typeof O.addEventListener != D){O.addEventListener("load", Y, false)} else{if (typeof j.addEventListener != D){j.addEventListener("load", Y, false)} else{if (typeof O.attachEvent != D){i(O, "onload", Y)} else{if (typeof O.onload == "function"){var X = O.onload; O.onload = function(){X(); Y()}} else{O.onload = Y}}}}}function h(){if (T){V()} else{H()}}function V(){var X = j.getElementsByTagName("body")[0]; var aa = C(r); aa.setAttribute("type", q); var Z = X.appendChild(aa); if (Z){var Y = 0; (function(){if (typeof Z.GetVariable != D){var ab = Z.GetVariable("$version"); if (ab){ab = ab.split(" ")[1].split(","); M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]}} else{if (Y < 10){Y++; setTimeout(arguments.callee, 10); return}}X.removeChild(aa); Z = null; H()})()} else{H()}}function H(){var ag = o.length; if (ag > 0){for (var af = 0; af < ag; af++){var Y = o[af].id; var ab = o[af].callbackFn; var aa = {success:false, id:Y}; if (M.pv[0] > 0){var ae = c(Y); if (ae){if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)){w(Y, true); if (ab){aa.success = true; aa.ref = z(Y); ab(aa)}} else{if (o[af].expressInstall && A()){var ai = {}; ai.data = o[af].expressInstall; ai.width = ae.getAttribute("width") || "0"; ai.height = ae.getAttribute("height") || "0"; if (ae.getAttribute("class")){ai.styleclass = ae.getAttribute("class")}if (ae.getAttribute("align")){ai.align = ae.getAttribute("align")}var ah = {}; var X = ae.getElementsByTagName("param"); var ac = X.length; for (var ad = 0; ad < ac; ad++){if (X[ad].getAttribute("name").toLowerCase() != "movie"){ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")}}P(ai, ah, Y, ab)} else{p(ae); if (ab){ab(aa)}}}}} else{w(Y, true); if (ab){var Z = z(Y); if (Z && typeof Z.SetVariable != D){aa.success = true; aa.ref = Z}ab(aa)}}}}}function z(aa){var X = null; var Y = c(aa); if (Y && Y.nodeName == "OBJECT"){if (typeof Y.SetVariable != D){X = Y} else{var Z = Y.getElementsByTagName(r)[0]; if (Z){X = Z}}}return X}function A(){return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)}function P(aa, ab, X, Z){a = true; E = Z || null; B = {success:false, id:X}; var ae = c(X); if (ae){if (ae.nodeName == "OBJECT"){l = g(ae); Q = null} else{l = ae; Q = X}aa.id = R; if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)){aa.width = "310"}if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)){aa.height = "137"}j.title = j.title.slice(0, 47) + " - Flash Player Installation"; var ad = M.ie && M.win?"ActiveX":"PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title; if (typeof ab.flashvars != D){ab.flashvars += "&" + ac} else{ab.flashvars = ac}if (M.ie && M.win && ae.readyState != 4){var Y = C("div"); X += "SWFObjectNew"; Y.setAttribute("id", X); ae.parentNode.insertBefore(Y, ae); ae.style.display = "none"; (function(){if (ae.readyState == 4){ae.parentNode.removeChild(ae)} else{setTimeout(arguments.callee, 10)}})()}u(aa, ab, X)}}function p(Y){if (M.ie && M.win && Y.readyState != 4){var X = C("div"); Y.parentNode.insertBefore(X, Y); X.parentNode.replaceChild(g(Y), X); Y.style.display = "none"; (function(){if (Y.readyState == 4){Y.parentNode.removeChild(Y)} else{setTimeout(arguments.callee, 10)}})()} else{Y.parentNode.replaceChild(g(Y), Y)}}function g(ab){var aa = C("div"); if (M.win && M.ie){aa.innerHTML = ab.innerHTML} else{var Y = ab.getElementsByTagName(r)[0]; if (Y){var ad = Y.childNodes; if (ad){var X = ad.length; for (var Z = 0; Z < X; Z++){if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai, ag, Y){var X, aa = c(Y); if (M.wk && M.wk < 312){return X}if (aa){if (typeof ai.id == D){ai.id = Y}if (M.ie && M.win){var ah = ""; for (var ae in ai){if (ai[ae] != Object.prototype[ae]){if (ae.toLowerCase() == "data"){ag.movie = ai[ae]} else{if (ae.toLowerCase() == "styleclass"){ah += ' class="' + ai[ae] + '"'} else{if (ae.toLowerCase() != "classid"){ah += " " + ae + '="' + ai[ae] + '"'}}}}}var af = ""; for (var ad in ag){if (ag[ad] != Object.prototype[ad]){af += '<param name="' + ad + '" value="' + ag[ad] + '" />'}}aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>"; N[N.length] = ai.id; X = c(ai.id)} else{var Z = C(r); Z.setAttribute("type", q); for (var ac in ai){if (ai[ac] != Object.prototype[ac]){if (ac.toLowerCase() == "styleclass"){Z.setAttribute("class", ai[ac])} else{if (ac.toLowerCase() != "classid"){Z.setAttribute(ac, ai[ac])}}}}for (var ab in ag){if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie"){e(Z, ab, ag[ab])}}aa.parentNode.replaceChild(Z, aa); X = Z}}return X}function e(Z, X, Y){var aa = C("param"); aa.setAttribute("name", X); aa.setAttribute("value", Y); Z.appendChild(aa)}function y(Y){var X = c(Y); if (X && X.nodeName == "OBJECT"){if (M.ie && M.win){X.style.display = "none"; (function(){if (X.readyState == 4){b(Y)} else{setTimeout(arguments.callee, 10)}})()} else{X.parentNode.removeChild(X)}}}function b(Z){var Y = c(Z); if (Y){for (var X in Y){if (typeof Y[X] == "function"){Y[X] = null}}Y.parentNode.removeChild(Y)}}function c(Z){var X = null; try{X = j.getElementById(Z)} catch (Y){}return X}function C(X){return j.createElement(X)}function i(Z, X, Y){Z.attachEvent(X, Y); I[I.length] = [Z, X, Y]}function F(Z){var Y = M.pv, X = Z.split("."); X[0] = parseInt(X[0], 10); X[1] = parseInt(X[1], 10) || 0; X[2] = parseInt(X[2], 10) || 0; return(Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2]))?true:false}function v(ac, Y, ad, ab){if (M.ie && M.mac){return}var aa = j.getElementsByTagName("head")[0]; if (!aa){return}var X = (ad && typeof ad == "string")?ad:"screen"; if (ab){n = null; G = null}if (!n || G != X){var Z = C("style"); Z.setAttribute("type", "text/css"); Z.setAttribute("media", X); n = aa.appendChild(Z); if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0){n = j.styleSheets[j.styleSheets.length - 1]}G = X}if (M.ie && M.win){if (n && typeof n.addRule == r){n.addRule(ac, Y)}} else{if (n && typeof j.createTextNode != D){n.appendChild(j.createTextNode(ac + " {" + Y + "}"))}}}function w(Z, X){if (!m){return}var Y = X?"visible":"hidden"; if (J && c(Z)){c(Z).style.visibility = Y} else{v("#" + Z, "visibility:" + Y)}}function L(Y){var Z = /[\\\"<>\.;]/; var X = Z.exec(Y) != null; return X && typeof encodeURIComponent != D?encodeURIComponent(Y):Y}var d = function(){if (M.ie && M.win){window.attachEvent("onunload", function(){var ac = I.length; for (var ab = 0; ab < ac; ab++){I[ab][0].detachEvent(I[ab][1], I[ab][2])}var Z = N.length; for (var aa = 0; aa < Z; aa++){y(N[aa])}for (var Y in M){M[Y] = null}M = null; for (var X in swfobject){swfobject[X] = null}swfobject = null})}}(); return{registerObject:function(ab, X, aa, Z){if (M.w3 && ab && X){var Y = {}; Y.id = ab; Y.swfVersion = X; Y.expressInstall = aa; Y.callbackFn = Z; o[o.length] = Y; w(ab, false)} else{if (Z){Z({success:false, id:ab})}}}, getObjectById:function(X){if (M.w3){return z(X)}}, embedSWF:function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac){var X = {success:false, id:ah}; if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y){w(ah, false); K(function(){ae += ""; ag += ""; var aj = {}; if (af && typeof af === r){for (var al in af){aj[al] = af[al]}}aj.data = ab; aj.width = ae; aj.height = ag; var am = {}; if (ad && typeof ad === r){for (var ak in ad){am[ak] = ad[ak]}}if (Z && typeof Z === r){for (var ai in Z){if (typeof am.flashvars != D){am.flashvars += "&" + ai + "=" + Z[ai]} else{am.flashvars = ai + "=" + Z[ai]}}}if (F(Y)){var an = u(aj, am, ah); if (aj.id == ah){w(ah, true)}X.success = true; X.ref = an} else{if (aa && A()){aj.data = aa; P(aj, am, ah, ac); return} else{w(ah, true)}}if (ac){ac(X)}})} else{if (ac){ac(X)}}}, switchOffAutoHideShow:function(){m = false}, ua:M, getFlashPlayerVersion:function(){return{major:M.pv[0], minor:M.pv[1], release:M.pv[2]}}, hasFlashPlayerVersion:F, createSWF:function(Z, Y, X){if (M.w3){return u(Z, Y, X)} else{return undefined}}, showExpressInstall:function(Z, aa, X, Y){if (M.w3 && A()){P(Z, aa, X, Y)}}, removeSWF:function(X){if (M.w3){y(X)}}, createCSS:function(aa, Z, Y, X){if (M.w3){v(aa, Z, Y, X)}}, addDomLoadEvent:K, addLoadEvent:s, getQueryParamValue:function(aa){var Z = j.location.search || j.location.hash; if (Z){if (/\?/.test(Z)){Z = Z.split("?")[1]}if (aa == null){return L(Z)}var Y = Z.split("&"); for (var X = 0; X < Y.length; X++){if (Y[X].substring(0, Y[X].indexOf("=")) == aa){return L(Y[X].substring((Y[X].indexOf("=") + 1)))}}}return""}, expressInstallCallback:function(){if (a){var X = c(R); if (X && l){X.parentNode.replaceChild(l, X); if (Q){w(Q, true); if (M.ie && M.win){l.style.display = "block"}}if (E){E(B)}}a = false}}}}();
        function checStarterURL(starterContent) {
        return(starterContent.match(/\.(jpeg|jpg|gif|png)$/) !== null);
        }
function scrollY() {
return window.pageYOffset || docElem.scrollTop;
        }


var globalStarter = [],
        perspectiveWrapper = $('.perspective-wrapper'),
        container = $('.container'),
        docElem = window.document.documentElement,
        support = Modernizr.csstransitions,
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'},
transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ],
        docscroll = 0,
        contentWrapper = $('.wrapper');
window.onGoa3Event = function (jQueryEvent, goa3Event) {

    if (goa3Event.type === 'invoke') {



        zoneInfo = $.grep(globalStarter, function (e) {
            return e.zoneId === goa3Event.zone.id;
        });
        if (zoneInfo.length) {
            zoneInfo = zoneInfo[0];
            zoneInfo.startZone = $('#start-' + zoneInfo.zoneId);
            zoneInfo.parentZoneID = 'perspective-' + zoneInfo.zoneId;
            zoneInfo.zoneWidth = goa3Event.zone.width;
            zoneInfo.zoneHeight = goa3Event.zone.height;
            if (zoneInfo.type == 'html') {
                window.goAdverticum3.onReady(function (goa3) {
                    goa3.getjQuery()(zoneInfo.startZone).goa(zoneInfo.htmlId);
                });
            } else if (zoneInfo.type == 'image') {
                zoneInfo.startZone.html('<img src="' + zoneInfo.fileurl + '"/>');
            } else if (zoneInfo.type == 'flash') {
                adSwfUrl = zoneInfo.fileurl;
                zoneInfo.startZone.html('<span id="flash-' + zoneInfo.zoneId + '"/><span class="flash-overlay"></span>');
                swfobject.embedSWF(adSwfUrl, "flash-" + zoneInfo.zoneId, zoneInfo.zoneWidth, zoneInfo.zoneHeight, "9.0.0", null, null, null, {wmode: 'opaque'});
            } else {
                zoneInfo.startZone.html('<img src="' + zoneInfo.fileurl + '"/>');
            }

            $('<iframe src="" frameborder="0" scrolling="no" data-counter-zone-id="' + zoneInfo.zoneId + '" id="ctcounter-' + zoneInfo.zoneId + '"></iframe>').appendTo('body');
            if (zoneInfo.autoplay === 1) {

                autoCookie = zoneInfo.autoPlayInt * 24 / zoneInfo.autoPlayCount;
                cookieVal = "autoOpen-" + zoneInfo.zoneId;
                if ($.cookie(cookieVal) || zoneInfo.autoPlayCount === 0 || zoneInfo.autoPlayInt === 0) {
                    zoneInfo.autoplayStart = 0;
                    zoneInfo.autoplay = 0;
                } else {
                    var cookieDate = new Date();
                    cookieDate.setTime(cookieDate.getTime() + (autoCookie * 60 * 60 * 1000));
                    $.cookie("autoOpen-" + zoneInfo.zoneId, true, {expires: cookieDate, path: '/'});
                }
            } else {
                zoneInfo.autoplayStart = 0;
            }
            zoneInfo.startZone.adPerspective({
                target: '#creative-' + zoneInfo.targetId,
                orientation: zoneInfo.targetOrientation,
                animSpeed: zoneInfo.animSpeed,
                autoplay: zoneInfo.autoplay,
                trigger: zoneInfo.trigger,
                autoplayClose: zoneInfo.autoplayClose,
                autoplayStart: zoneInfo.autoplayStart,
                opacity: zoneInfo.opacity,
                loaded: 0,
                zoneInfo: zoneInfo
            });
        }
    }
};
(function ($) {



    $.fn.bgLoaded = function (custom) {

        var self = this;
        // Default plugin settings
        var defaults = {
            afterLoaded: function () {
                this.addClass('bg-loaded');
            }
        };
        // Merge default and user settings
        var settings = $.extend({}, defaults, custom);
        // Loop through element
        self.each(function () {
            var $this = $(this),
                    bgImgs = $this.css('background-image').split(', ');
            $this.data('loaded-count', 0);
            $.each(bgImgs, function (key, value) {
                var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                $('<img/>').attr('src', img).load(function () {
                    $(this).remove(); // prevent memory leaks
                    $this.data('loaded-count', $this.data('loaded-count') + 1);
                    if ($this.data('loaded-count') >= bgImgs.length) {
                        settings.afterLoaded.call($this);
                    }
                });
            });
        });
    };
    $.fn.adPerspective = function (options) {

        $('body').on('click', '.ad-perspective-container .link', function () {
            console.log('Nagy kép CT');
        });
        var zoneSettings = $.extend({}, $.fn.adPerspective.defaults, options);
        zoneSettings.zoneInfo.targetIframe = $("iframe[data-counter-zone-id='" + zoneSettings.zoneInfo.zoneId + "']");
        if (zoneSettings.autoplay === 1) {
            setTimeout(function () {
                adOpenEvent(zoneSettings);
            }, zoneSettings.zoneInfo.autoplayStart);
        }

        if (zoneSettings.trigger === 'mouseenter') {
            $(this).append('<span id="hover-countdown" data-count="3"></span>');
            var intervalID;
            var count = 3;
            function targetHover() {
                count = count - 1;
                if (count === 0) {
                    adOpenEvent(zoneSettings);
                    count = 3;
                    $('#hover-countdown').removeClass('counting');
                }
                $('#hover-countdown').attr('data-count', count);
            }
            ;
            this.hover(function () {
                $('#hover-countdown').addClass('counting');
                intervalID = setInterval(targetHover, 1000);
            },
                    function () {
                        count = 3;
                        $('#hover-countdown').removeClass('counting');
                        $('#hover-countdown').attr('data-count', count);
                        window.clearInterval(intervalID);
                    });
        } else if (zoneSettings.trigger === 'click') {

            this.on('click', function () {
                adOpenEvent(zoneSettings);
            });
        }


    };
    function countCt(ctUrl, targetIframe) {
        targetIframe.attr('src', '');
        targetIframe.attr('src', ctUrl);
        console.log('Mérés vége');
    }

    function closePerspectiveEvent(e) {
        e.preventDefault();
        if (e.target.className === 'container') {
            console.log('close-container');
            countCt(e.data.ctUrl, e.data.targetIframe);
        } else if (e.delegateTarget.className === 'close-popup' && e.target.offsetParent.offsetParent.id === 'creative-' + e.data.targetId) {
            console.log('close-button');
            countCt(e.data.ctUrl, e.data.targetIframe);
        }
        closePerspective();
    }
    function adOpenEvent(zoneSettings) {

        function loadTargetZone(zoneInfo) {

            var checkExist = setInterval(function () {
                if ($('#creative-' + zoneInfo.targetId).length) {
                    zoneSettings.loaded = 1;
                    backgroundImageUrl = $(zoneSettings.target).data('background');
                    $(zoneSettings.target).attr('data-orientation', zoneSettings.orientation).attr('data-effect', zoneSettings.effect).addClass('active-template').show();
                    perspectiveWrapper.attr('data-speed', zoneSettings.animSpeed);
                    $(zoneSettings.target).css('background-image', 'url(' + backgroundImageUrl + ')');
                    $(zoneSettings.target).bgLoaded({
                        afterLoaded: function () {
                            openCycle();
                            $(this).addClass('bg-loaded');
                        }
                    });
                    clearInterval(checkExist);
                }
            }, 100);
        }

        function openCycle() {

            if (zoneSettings.zoneInfo.autoplay === 1) {
                console.log('open-auto');
                countCt(zoneSettings.zoneInfo.ctAutoOpen, zoneSettings.zoneInfo.targetIframe);
                zoneSettings.zoneInfo.autoplay = 0;
                $(zoneSettings.target).addClass('ad-active');
                if ($(zoneSettings.target).data('type') === 'video') {

                    var videoCreative = document.getElementById("video-" + zoneSettings.zoneInfo.targetId);
                    videoCreative.muted = "muted";
                    videoCreative.onplay = function () {
                        console.log('video-play');
                        countCt(zoneSettings.zoneInfo.ctVideoStart, zoneSettings.zoneInfo.targetIframe);
                    };
                    videoCreative.onpause = function () {
                        console.log('video-stop');
                        countCt(zoneSettings.zoneInfo.ctVideoStop, zoneSettings.zoneInfo.targetIframe);   
                        setTimeout(function () {
                            closePerspective();
                        }, zoneSettings.zoneInfo.autoplayClose);
                    };
                    videoCreative.onended = function () {
                        console.log('video-end');
                        countCt(zoneSettings.zoneInfo.ctVideoEnd, zoneSettings.zoneInfo.targetIframe);
                        setTimeout(function () {
                            closePerspective();
                        }, zoneSettings.zoneInfo.autoplayClose);
                    };
                    
                
                    $("#video-" + zoneSettings.zoneInfo.targetId).click(function (e) {       
                        // get click position 
                        var clickY = (e.pageY - $(this).offset().top);
                        var height = parseFloat($(this).height());
                        // avoids interference with controls
                        if (clickY > 0.82 * height)
                            return;
                  
                            videoClick(this.paused); 
                        e.preventDefault();                
                    });
                    
                    function videoClick(paused){
                        paused ? videoCreative.play() : videoCreative.pause();           
                    }
                    
                } else if ($(zoneSettings.target).data('type') === 'gallery') {


                    if ($(zoneSettings.target).data('item-type') === 'portrait') {

                        slidesToShow = 3;
                    } else {

                        slidesToShow = 1;
                    }

                    $('.gallery').slick({
                        centerMode: true,
                        slide: 'a',
                        swipe: false,
                        speed: 200,
                        centerPadding: '5%',
                        slidesToShow: slidesToShow,
                        cssEase: 'ease-in-out',
                        prevArrow: $('.slick-prev'),
                        nextArrow: $('.slick-next')
                    });
                    $('[data-ct]').on('click.ct', function () {
                        dataCt = $(this).attr('data-ct');
                        $.each(zoneSettings.zoneInfo.ctGallery, function (index, value) {
                            if (dataCt === index) {
                                if(value!==''){
                                countCt(value, zoneSettings.zoneInfo.targetIframe);
                                console.log('CT ' + dataCt);
                                }
                            }
                        });
                    });
                }
            } else {
                console.log('open-click');
                countCt(zoneSettings.zoneInfo.ctOpen, zoneSettings.zoneInfo.targetIframe);
            }

            /*$(zoneSettings.target).addClass('ad-active');
            if ($(zoneSettings.target).data('type') === 'video') {

                var videoCreative = document.getElementById("video-" + zoneSettings.zoneInfo.targetId);
                videoCreative.muted = "muted";
                videoCreative.onplay = function () {
                    console.log('video-play');
                    countCt(zoneSettings.zoneInfo.ctVideoStart, zoneSettings.zoneInfo.targetIframe);
                };
                videoCreative.onpause = function () {
                    console.log('video-stop');
                    countCt(zoneSettings.zoneInfo.ctVideoStop, zoneSettings.zoneInfo.targetIframe);
                };
                videoCreative.onended = function () {
                    console.log('video-end');
                    countCt(zoneSettings.zoneInfo.ctVideoEnd, zoneSettings.zoneInfo.targetIframe);
                };
                
            
                $("#video-" + zoneSettings.zoneInfo.targetId).click(function (e) {       
                    // get click position 
                    var clickY = (e.pageY - $(this).offset().top);
                    var height = parseFloat($(this).height());
                    // avoids interference with controls
                    if (clickY > 0.82 * height)
                        return;
              
                        videoClick(this.paused); 
                    e.preventDefault();                
                });
                
                function videoClick(paused){
                    paused ? videoCreative.play() : videoCreative.pause();           
                }
                
            } else if ($(zoneSettings.target).data('type') === 'gallery') {


                if ($(zoneSettings.target).data('item-type') === 'portrait') {

                    slidesToShow = 3;
                } else {

                    slidesToShow = 1;
                }

                $('.gallery').slick({
                    centerMode: true,
                    slide: 'a',
                    swipe: false,
                    speed: 200,
                    centerPadding: '5%',
                    slidesToShow: slidesToShow,
                    cssEase: 'ease-in-out',
                    prevArrow: $('.slick-prev'),
                    nextArrow: $('.slick-next')
                });
                $('[data-ct]').on('click.ct', function () {
                    dataCt = $(this).attr('data-ct');
                    $.each(zoneSettings.zoneInfo.ctGallery, function (index, value) {
                        if (dataCt === index) {
                            if(value!==''){
                            countCt(value, zoneSettings.zoneInfo.targetIframe);
                            console.log('CT ' + dataCt);
                            }
                        }
                    });
                });
            }*/



            docscroll = scrollY();
            contentWrapper.css('top', docscroll * -1 + 'px');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            perspectiveWrapper.addClass('modalview').addClass('advorient-' + zoneSettings.orientation);
            setTimeout(function () {
                perspectiveWrapper.addClass('animate');
            }, 25);
            setTimeout(function () {
                container.css('opacity', zoneSettings.opacity);
            }, 60);
            container.on('click.container', {
                ctUrl: zoneSettings.zoneInfo.ctClose,
                targetIframe: zoneSettings.zoneInfo.targetIframe,
                zoneId: zoneSettings.zoneInfo.zoneId,
                targetId: zoneSettings.zoneInfo.targetId
            }, closePerspectiveEvent);
            $('.close-popup').on('click.close', {
                ctUrl: zoneSettings.zoneInfo.ctCloseBtn,
                targetIframe: zoneSettings.zoneInfo.targetIframe,
                zoneId: zoneSettings.zoneInfo.zoneId,
                targetId: zoneSettings.zoneInfo.targetId
            }, closePerspectiveEvent);
        }


        window.goAdverticum3.onReady(function (goa3) {
            if (zoneSettings.loaded !== 0) {
                $("#" + zoneSettings.zoneInfo.parentZoneID).remove();
            }
            $("#perspective").append("<div id='" + zoneSettings.zoneInfo.parentZoneID + "'></div>");
            goa3.getjQuery()('#' + zoneSettings.zoneInfo.parentZoneID).goa(zoneSettings.zoneInfo.targetId, {}, loadTargetZone(zoneSettings.zoneInfo));
        });
    }


    function closePerspective() {
        if (perspectiveWrapper.hasClass('animate')) {
            var onEndTransFn = function (event) {
                if (support && (event.target.className !== 'container' || event.originalEvent.propertyName.indexOf('transform') === -1))
                    return;
                $(this).off(transEndEventName, onEndTransFn);
                perspectiveWrapper.attr('class', 'perspective-wrapper');
                document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                contentWrapper.css('top', '0px');
            };
            if (support) {
                perspectiveWrapper.on(transEndEventName, onEndTransFn);
            } else {
                onEndTransFn.call();
            }

            $('video').each(function () {
                $(this).get(0).pause();
            });
            container.css('opacity', 1);
            perspectiveWrapper.removeClass('animate');
            $('.ad-perspective-container').removeClass('ad-active');
            container.off('click.container');
            $('.close-popup').off('click.close');
            $('[data-ct]').off('click.ct');
        }


    }

    $.fn.adPerspective.defaults = {
        trigger: 'click',
        orientation: 'bottom',
        effect: 'slide',
        autoplay: false,
        autoplayStart: 0,
        autoplayClose: 0,
        animSpeed: 500,
        opacity: 1,
        loaded: 0
    };
}(jQuery));