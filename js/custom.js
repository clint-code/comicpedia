$(document).ready(function () {

    $('.charactersContainer .characterSlide').each(function (index) {

        $(this).owlCarousel({
            autoplay: true,
            dots: true,
            nav: true,
            loop: true,
            animateOut: 'fadeOut',
            pagination: true,
            addClassActive: true,
            navText: ["", ""],
            items: 1,
            onInitialize: function () {

                $(".characterSlide .character").each(function (index) {

                    pageIndex = index + 1;
                    $(".owl-dots .owl-dot:eq("+index+")").html("<span>"+pageIndex+"</span><h6>"+$(this).find('h5').text()+"</h6>")
                
                });
            },

            onChanged: function () {

                $(".characterSlide .character").each(function (index) {

                    pageIndex = index + 1;
                    $(".owl-dots .owl-dot:eq("+index+")").html("<span>" + pageIndex + "</span><h6>" + $(this).find('h5').text() + "</h6>")

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