function positionItem() {
    var a = $(".animate-gallery").find(".gallery-item:first-child").width(), b = $(".animate-gallery").find(".gallery-item:first").height(), c = $(".animate-gallery").find(".gallery-container").width(), d = ($(".animate-gallery").find(".gallery-item.show-item").length, 
    0), e = 0, f = -1, g = -1;
    d = a + itemHorizontalSpace > c ? 1 : Math.floor(c / (a + itemHorizontalSpace)), 
    $(".animate-gallery").find(".gallery-item.show-item").each(function(c) {
        var e = 0, h = 0;
        g = c % d, 0 != g ? (e = g * (a + itemHorizontalSpace), h = f * (b + itemVerticalSpace)) : (f++, 
        e = 0, h = f * (b + itemVerticalSpace)), $(this).css("display", "block").animate({
            left: e,
            top: h,
            opacity: 1
        }, 500);
    }), e = f + 1;
    var h = d * (a + itemHorizontalSpace) - itemHorizontalSpace, i = e * (b + itemVerticalSpace) - itemVerticalSpace;
    $(".animate-gallery").find(".item-container").css({
        width: h,
        height: i
    }), $(".animate-gallery").find(".tab-container").css("width", h);
}

function checkWindowSize() {
    console.log("check");
    var a = $(".animate-gallery").find(".gallery-item:first-child").width(), b = $(".animate-gallery").find(".gallery-container").width(), c = $(".animate-gallery").find(".item-container").width();
    (c > b || b + a > c) && positionItem();
}

function filterItem(a) {
    var b = $(".animate-gallery").find(".gallery-item");
    "all" == a ? b.addClass("show-item") : b.each(function() {
        var b = $(this).data("tag");
        -1 != b.indexOf(a) ? $(this).addClass("show-item") : $(this).removeClass("show-item").css("display", "none");
    }), positionItem();
}

!function(a, b) {
    a.fn.parallaxScroll = function(c) {
        return this.each(function() {
            var d = a(this), e = {
                scrollSpeed: 1.2
            }, f = a.extend({}, e, c), g = d.offset().top, h = g + d.height(), i = 100;
            a(b).scroll(function() {
                var b = a(this).scrollTop(), c = a(this).height();
                if (c > g) {
                    if (b >= g - i && h - i >= b) {
                        var e = (b - g) / f.scrollSpeed;
                        d.css("background-position", "50% " + e + "px");
                    }
                } else if (b + c >= g && h >= b) {
                    var e = Math.floor((b - g) / f.scrollSpeed);
                    d.css("background-position", "50% " + e + "px");
                }
            });
        });
    };
}(jQuery, window);

var itemVerticalSpace = 20, itemHorizontalSpace = 20;

$(document).ready(function() {
    var a = $(window).height();
    $("#welcome").css("height", a);
    $(".parallax-scroll").parallaxScroll(), $(".welcome-nav .menu").on("click", function() {
        var a = $(".side-info");
        $("body,html").css("overflow", "hidden"), a.animate({
            right: 0
        }, 500);
    }), $(".side-info .close-icon").on("click", function() {
        var a = $(".side-info"), b = a.outerWidth();
        $("body,html").css("overflow", "scroll"), a.animate({
            right: -b
        }, 500);
    }), $(".expand-icon").on("click", function() {
        var a = $(this).parent().find(".left-mask"), b = $(this).parent().find(".right-mask");
        a.animate({
            left: "-50%"
        }, 800), b.animate({
            right: "-50%"
        }, 800), $(this).fadeOut(1e3);
    }), $(window).scroll(function() {
        var a = $(window).scrollTop(), b = $(".timeline-container .timeline-node");
        b.each(function() {
            var b = $(this).offset().top;
            a > b - 300 ? $(this).find(".timeline-progress").addClass("timeline-active") : $(this).find(".timeline-progress").removeClass("timeline-active");
        });
    }), $(".expand-icon").trigger("click"), $("#skill").on("click", ".down-icon,.up-icon", function() {
        if ($(this).hasClass("down-icon")) {
            $(this).closest(".hidding-panel").removeClass("show-it");
            var a = $(this).closest(".hidding-panel");
            setTimeout(function() {
                a.find(".skill-progress").css("width", "0");
            }, 500);
        } else {
            $(this).closest(".hidding-panel").addClass("show-it");
            var a = $(this).closest(".hidding-panel");
            setTimeout(function() {
                a.find(".progress-animating").progressAnimating();
            }, 500);
        }
    }), $(".animate-gallery").find(".gallery-item").addClass("show-item"), positionItem(), 
    $(window).resize(checkWindowSize), $(".animate-gallery").on("click", ".tab-container a", function(a) {
        a.preventDefault(), $(".animate-gallery a[data-keyword]").removeClass("tab-selected");
        var b = $(this).data("keyword");
        $(this).addClass("tab-selected"), filterItem(b);
    });
}), function(a) {
    a.fn.progressAnimating = function(b) {
        var c = {
            speed: 2e3,
            delay: 100
        }, d = a.extend({}, b, c);
        return this.each(function() {
            var b = a(this).find("[data-progress]");
            b.each(function(b) {
                var c = a(this), e = c.attr("data-progress");
                0 > e ? e = 0 : e > 100 && (e = 100), setTimeout(function() {
                    c.animate({
                        width: e + "%"
                    }, d.speed);
                }, b * d.delay, "easeOutQuad");
            });
        });
    };
}(jQuery), function(a) {
    var b;
    a.fn.typingBox = function(c) {
        return this.each(function() {
            var d = a(this), e = {
                delay_after_typing: 7,
                typing_interval: 100,
                interval_for_word: 1500,
                keep_final_word: !0,
                cursor_interval: 500,
                delay: 1e3,
                infinite: !0,
                contents: [ "Designer", "Developer", "Interative Designer" ]
            }, f = a.extend({}, e, c), g = {
                setCursor: function() {
                    var b = !0;
                    d.after("<span class='box-cursor'>|</span>"), setInterval(function() {
                        b ? (a(".box-cursor").css("opacity", 0), b = !1) : (a(".box-cursor").css("opacity", "0.9"), 
                        b = !0);
                    }, f.cursor_interval);
                },
                typingWord: function(b, c) {
                    var d = 0, e = !1, g = 0;
                    setInterval(function() {
                        d < b.length && !e ? (a(".typing-box").text(b.slice(0, d + 1)), d++) : (e = !0, 
                        c && clearInterval(this), !c && e && d > 0 ? (g <= f.delay_after_typing ? g++ : d--, 
                        a(".typing-box").text(b.slice(0, d))) : clearInterval(this));
                    }, f.typing_interval);
                },
                showWords: function(a, b, c) {
                    setTimeout(function() {
                        g.typingWord(a, c);
                    }, b);
                },
                init: function() {
                    f.contents;
                    b = [ f.delay ];
                    for (var a = f.delay, c = 0; c < f.contents.length; c++) {
                        var d = f.contents[c];
                        a += d.length * f.typing_interval + f.delay_after_typing * f.typing_interval + d.length * f.typing_interval + f.interval_for_word, 
                        b.push(a);
                    }
                    for (var c = 0; c < b.length - 1; c++) {
                        var e = !1;
                        c == f.contents.length - 1 && (e = f.keep_final_word), g.showWords(f.contents[c], b[c], e);
                    }
                    f.infinite && setTimeout(function() {
                        g.init();
                    }, b[b.length - 1]);
                }
            };
            g.setCursor(), g.init();
        });
    };
}(jQuery);