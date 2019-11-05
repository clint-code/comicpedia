$(document).ready(function () {

    $('.slideContainer').owlCarousel({
        autoplayTimeout: 3500,
        autoplay: true,
        dots: true,
        nav:true,
        loop: true,
        pagination: true,
        navText : ["", ""],
        items: 1
    });

    //toggle DC and Marvel slides

    //hide the second slider when the page loads
    $(".characterSlide").hide();

    $(".characterSlide:first").fadeToggle();

    $(".content-filter li").click(toggleTab);

    let tabTarget = '';

    function toggleTab(){

        tabTarget = $(this).data('target');

        $(".content-filter li").removeClass('active');
        $(this).addClass('active');

        $(".characterSlide").hide();
        $(".characterSlide."+tabTarget).fadeToggle();
       
    }

    //indicators
    

     
    
    });