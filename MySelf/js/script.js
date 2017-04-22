$(function () {
    //导航栏锚点滚动
    $(".scroll_move").click(function (event) {
        event.preventDefault();  //不执行与事件关联的默认动作
        //scrollTo滚动位置 hash锚点属性  offset()元素偏移（包含top和left）
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000); //滚动到锚点的顶部

    });
    //导航栏锚点滚动
    window.onscroll = function () {
        var off = $(window).scrollTop();
        //梦想区域动画
        if (off > $("#con_area2").offset().top - 400) {
            $(".dream_work").animate({
                left: "33.3%"
            }, 1000)
            $(".dream_tour").animate({
                left: "66.6%"
            }, 1000)
        }
        //梦想区域动画
        //经验区域动画
        if (off > $("#con_area3").offset().top - 300) {
            $(".area3_love p").css({ "animation-play-state": "running" });
        }
        //经验区域动画
        //经验区域图片效果
        $('.fancy').fancybox();
        $('.fancybox-thumbs').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            arrows: false,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        })
        //经验区域图片效果
    }

    //火箭置顶
    var e = $("#rocket-to-top"),
    t = $(document).scrollTop(),
    n,
    r,
    i = !0;
    $(window).scroll(function () {
        var t = $(document).scrollTop();
        //确定火箭何时出现
        t > $("#con_area1").offset().top - 1 ? e.fadeIn("slow") : e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
            marginTop: "-1000px"
        },
        "normal",
        function () {
            e.css({
                "margin-top": "-125px",
                display: "none"
            }),
            i = !0
        }))
    }),
    e.hover(function () {
        $(".level-2").stop(!0).animate({
            opacity: 1
        })
    },
    function () {
        $(".level-2").stop(!0).animate({
            opacity: 0
        })
    }),
    $(".level-3").click(function () {
        function t() {
            var t = e.css("background-position");
            if (e.css("display") == "none" || i == 0) {
                clearInterval(n),
                e.css("background-position", "0px 0px");
                return
            }
            switch (t) {
                case "0px 0px":
                    e.css("background-position", "-298px 0px");
                    break;
                case "-298px 0px":
                    e.css("background-position", "-447px 0px");
                    break;
                case "-447px 0px":
                    e.css("background-position", "-596px 0px");
                    break;
                case "-596px 0px":
                    e.css("background-position", "-745px 0px");
                    break;
                case "-745px 0px":
                    e.css("background-position", "-298px 0px");
            }
        }
        if (!i) return;
        n = setInterval(t, 50),
        $("html,body").animate({ scrollTop: 0 }, "slow");
    });
});
