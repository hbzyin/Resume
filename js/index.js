//动画
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
};//
//service
$(document).scroll(function(){
    var top=$(window).scrollTop();
    var add=$(".circle1").css("opacity");
    if(top>=2600&&add==0){
        $(".circle1").animate({opacity:"1"},500,function(){
            $(".center-line1").animate({height:"22px"},500,function(){
                $(".circle2").animate({opacity:"1"},500,function(){
                    $(".line-x1").animate({width:"500px"},1000,function(){
                        $(".circle-min1").animate({opacity:"1"},500,function(){
                            $(".title1").animate({opacity:"1",top:"44px"},500,function(){
                                $(".subtitle1").animate({opacity:"1",top:"84px"},500,function(){
                                    $(".center-line2").animate({height:"118px"},500,function(){
                                        $(".circle3").animate({opacity:"1"},500,function(){
                                            $(".line-min1").animate({width:"68px"},500,function(){
                                                $(".circle-min4").animate({opacity:"1"},500,function(){
                                                    $(".service-text-content1").animate({opacity:"1",left:"250px"},500,function(){
                                                        $(".line-x2").animate({width:"500px"},500,function(){
                                                            $(".circle-min8").animate({opacity:"1"},500,function(){
                                                                $(".title3").animate({opacity:"1",top:"162px"},500,function(){
                                                                    $(".subtitle3").animate({opacity:"1",top:"204px"},500,function(){
                                                                        $(".center-line3").animate({height:"170px"},500,function(){
                                                                            $(".circle4").animate({opacity:"1"},500,function(){
                                                                                $(".line-min2").animate({width:"68px"},500,function(){
                                                                                    $(".circle-min6").animate({opacity:"1"},500,function(){
                                                                                        $(".service-text-content2").animate({opacity:"1",left:"700px"},500,function(){
                                                                                            $(".line-x3").animate({width:"500px"},500,function(){
                                                                                                $(".circle-min2").animate({opacity:"1"},500,function(){
                                                                                                    $(".title2").animate({opacity:"1",top:"374px"},500,function(){
                                                                                                        $(".subtitle2").animate({opacity:"1",top:"410px"},500,function(){
                                                                                                            $(".center-line4").animate({height:"80px"},500,function(){
                                                                                                                $(".circle5").animate({opacity:"1"},500,function(){
                                                                                                                    $(".line-min3").animate({width:"68px"},500,function() {
                                                                                                                        $(".circle-min5").animate({opacity:"1"},500,function() {
                                                                                                                            $(".service-text-content3").animate({opacity:"1",left:"250px"},500,function() {
                                                                                                                                $(".line-x4").animate({width:"500px"},500,function() {
                                                                                                                                    $(".circle-min9").animate({opacity:"1"},500,function() {
                                                                                                                                        $(".title4").animate({opacity:"1",top:"490px"},500,function() {
                                                                                                                                            $(".subtitle4").animate({opacity:"1",top:"526px"},500,function() {
                                                                                                                                                $(".center-line5").animate({height:"180px"},500,function() {
                                                                                                                                                    $(".circle6").animate({opacity:"1"},500,function() {
                                                                                                                                                        $(".line-min4").animate({width:"68px"},500,function() {
                                                                                                                                                             $(".circle-min7").animate({opacity:"1"},500,function() {
                                                                                                                                                                $(".service-text-content4").animate({opacity:"1",left:"700px"},500,function() {
                                                                                                                                                                    $(".line-x5").animate({width:"500px"},500,function() {
                                                                                                                                                                        $(".circle-min3").animate({opacity:"1"},500,function() {
                                                                                                                                                                            $(".center-line6").animate({height:"80px"},500,function() {
                                                                                                                                                                                $(".circle7").animate({opacity:"1"},500,function() {
                                                                                                                                                                                    $(".line-x6").animate({width:"500px"},500,function() {
                                                                                                                                                                                        $(".circle-min10").animate({opacity:"1"},500,function() {
                                                                                                                                                                                            $(".center-line7").animate({height:"32px"},500,function() {
                                                                                                                                                                                                $(".circle8").animate({opacity:"1"},500,function() {
                                                                                                                                                                                                })
                                                                                                                                                                                            })
                                                                                                                                                                                        })
                                                                                                                                                                                    })
                                                                                                                                                                                })
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    })
                                                                                                                                                                })
                                                                                                                                                             })
                                                                                                                                                         })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                     })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    }
    var offset = $(document).scrollTop();
    if(offset>30){
        $(".top").addClass("top_bg")
    }else{
        $(".top").removeClass("top_bg")
    }
});

//滚轮

$(document).ready(
    function() {
        //$("html").getNiceScroll().hide()
        //$("html").getNiceScroll().resize();
        $("html").niceScroll({
            cursorwidth: 8,
            cursorborder: "0px solid #f2424f",
            mousescrollstep:"20",
            cursorfixedheight:"80",
            cursorcolor:"#15b7d1",
            autohidemode:false,
            cursorborderradius: '0'
      });
  });
//头部
$(".top-main > ul > li > a").bind('click', function(event) {
    var $anchor = $(this);
    //停止当前所有动画，并执行自定义动画
    $('html, body').stop().animate({
        //设定垂直滚动条值    获取匹配元素相对滚动条顶部的偏移
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

//$(window).bind('scroll', function(){
//    var offset = $(document).scrollTop();
//    if(offset>30){
//        $(".top").animate({backgroundColor:" "},200)
//    }
//}