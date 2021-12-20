jQuery(document).ready((function() {
    $("#slider-range").slider({
            range: !0,
            min: 1e6,
            max: 3e6,
            values: [128e4, 24e5],
            slide: function(e, a) {
                $("#amount").val(a.values[0] + " - " + a.values[1])
            }
        }),

        $("#amount").val($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1)), $(window).width() < 992 && $(".nav a").on("click", (function() {
            $(".nav").slideToggle(), $(".ham").removeClass("active")
        })),

        $(".nav--btn").on("click", (function() {
            $(".nav").slideToggle()
        })),

        $("#tab1").on("click", (function() {
            $(".tab__heading").removeClass("active"), $(this).addClass("active"), $(".tab__body").removeClass("active"), $("#tab1body").addClass("active")
        })),

        $("#tab2").on("click", (function() {
            $(".tab__heading").removeClass("active"), $(this).addClass("active"), $(".tab__body").removeClass("active"), $("#tab2body").addClass("active")
        })),

        $("#tab3").on("click", (function() {
            $(".tab__heading").removeClass("active"), $(this).addClass("active"), $(".tab__body").removeClass("active"), $("#tab3body").addClass("active")
        })),

        $(".select2").select2(),
        $(".select3").select2(),
        $(".select4").select2(),
        $(".select5").select2(),

        new Swiper(".indexslide__swiper", {
            slidesPerView: 1,
            autoplay: !0,
            speed: 500
        }),

        new Swiper(".banks__slider", {
            loop: !0,
            speed: 500,
            slidesPerView: 2,
            autoplay: !0,
            breakpoints: {
                530: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                690: {
                    slidesPerView: 4,
                    spaceBetween: 15
                }
            }
        })

    $('.tab__triggername').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.tab__additionalname').hide();
            $(this).removeClass('active');
        } else {
            $('.tab__trigger').removeClass('active');
            ($(this).addClass('active'));
            $('.tab__additional').hide();
            $(this).parent().next().children('.tab__additionalname').css({ 'display': 'table-cell' });
        }
    })

    $('.tab__triggerprice').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.tab__additionalprice').hide();
            $(this).removeClass('active');
        } else {
            $('.tab__trigger').removeClass('active');
            ($(this).addClass('active'));
            $('.tab__additional').hide();
            $(this).parent().next().children('.tab__additionalprice').css({ 'display': 'table-cell' });
        }
    })
}));