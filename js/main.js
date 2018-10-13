$(function () {

   
    $('.list1').on("click", function () {
        $(".colmain4-11").css("display", "block");
        $(".colmain4-22").css("display", "none");
        $(".colmain4-33").css("display", "none");
        $(".colmain4-44").css("display", "none");
        $(".colmain4-55").css("display", "none");
    }) 
    $("#js-rotating-words").Morphext({
        animation: "fadeInUp",
        separator: ",",
        speed: 2000,
        complete: function () {
        }
    });
 
    $('.main6main .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        dots:true,
        autoplay: true,
        autoplayTimeout: 1000,
        dots:true
    });
    $('.active').on("click",function(){
        $(this).css("background","#71787b");
    });

    $('.list2').on("click", function () {
        $(".colmain4-11").css("display", "none");
        $(".colmain4-22").css("display", "block");
        $(".colmain4-33").css("display", "none");
        $(".colmain4-44").css("display", "none");
        $(".colmain4-55").css("display", "none");
    })
    $('.list3').on("click", function () {
        $(".colmain4-11").css("display", "none");
        $(".colmain4-22").css("display", "none");
        $(".colmain4-33").css("display", "block");
        $(".colmain4-44").css("display", "none");
        $(".colmain4-55").css("display", "none");
    })
    $('.list4').on("click", function () {
        $(".colmain4-11").css("display", "none");
        $(".colmain4-22").css("display", "none");
        $(".colmain4-33").css("display", "none");
        $(".colmain4-44").css("display", "block");
        $(".colmain4-55").css("display", "none");
    })
    $('.list5').on("click", function () {
        $(".colmain4-11").css("display", "none");
        $(".colmain4-22").css("display", "none");
        $(".colmain4-33").css("display", "none");
        $(".colmain4-44").css("display", "none");
        $(".colmain4-55").css("display", "block");
    })
    $('.main8main .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        dots:true
    });
    $('.active').on("click",function(){
        $(this).css("background","#71787b");
    })
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
      $(".div3 .breadcrumb li").eq(0).click(function(e){
        e.preventDefault();        
        $('.grid').isotope({ filter: '' });
      })
      $(".div3 .breadcrumb li").eq(1).click(function(e){
        e.preventDefault();
        $('.grid').isotope({ filter: '.business'});
      })
      $(".div3 .breadcrumb li").eq(2).click(function(e){
        e.preventDefault();
        
        $('.grid').isotope({ filter: '.creative'});
      })
      $(".div3 .breadcrumb li").eq(3).click(function(e){
        e.preventDefault();
        
        $('.grid').isotope({ filter: '.design' });
      })
      $(".div3 .breadcrumb li").eq(4).click(function(e){
        e.preventDefault();
        
        $('.grid').isotope({ filter: '.photography' });
      })

      $(".grid-item").hover(function(){
          $(this).find(".myShow").animate({"top":"-60px"}, 300);
          $(this).find(".myHide").animate({"bottom": "0"}, 300);
      }, function(){
        $(this).find(".myShow").animate({"top":"0px"}, 300);
        $(this).find(".myHide").animate({"bottom": "-60px"}, 300);
      })
})
$(function () {
    
        var body = $('html, body');
    
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('.top:hidden').stop(true, true).fadeIn();
            } else {
                $('.top').stop(true, true).fadeOut();
            }
        });
    
        $('.top').click(function () {
            body.animate({ scrollTop: 0 }, 500, 'swing');
        })
    })


    



