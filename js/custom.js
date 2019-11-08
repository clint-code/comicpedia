$(document).ready(function () {


    $('.charactersContainer .characterSlide').each(function (index) {

        $(this).owlCarousel({
            autoplay: 3500,
            dots: true,
            nav: true,
            loop: false,
            rewind: true,
            animateOut: 'fadeOut',
            //pagination: true,
            navText: ["", ""],
            items: 1,
            onInitialize: function () {

                $(".characterSlide .character").each(function (index, value) {

                   
                    pageIndex = index+1;
                    

                    console.log("Value is: " + index);
                    console.log("pageIndex is: " + pageIndex);
                    
                    //console.log($(this).find('h5').text());

                    $(".owl-dots .owl-dot:eq("+index+")").html("<span>"+pageIndex+"</span><h6>"+$(this).find('h5').text()+"</h6>")
            

                });
            },

            onChange: function () {

                $(".characterSlide .character").each(function (index, value) {

                    pageIndex = index + 1;
                    
                    /*console.log("Value is: " + value);
                    console.log("pageIndex is: " + pageIndex);*/

                    

                    $(".owl-dots .owl-dot:eq("+index+")").html("<span>" + pageIndex + "</span><h6>" + $(this).find('h5').text() + "</h6>")

                });
               
                 $(".owl-item.active").find('.character-img').animate({
                    "right":"35%"
                 });

            }

        });

    });


    //toggle DC and Marvel slides

    //hide the second slider when the page loads
    $(".characterSlide").hide();

    $(".characterSlide:first").fadeIn();

    //toggle tab
    $(".content-filter li").click(toggleTab);

    let tabTarget = '';

    function toggleTab() {

        tabTarget = $(this).data('target');

        $(".content-filter li").removeClass('active');
        $(this).addClass('active');

        $(".characterSlide").hide();
        $(".characterSlide." + tabTarget).fadeToggle();
    }

});