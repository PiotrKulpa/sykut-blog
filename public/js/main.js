(function ($) {
    "use strict";

    //Header Search
    $('a[href="#header-search"]').on("click", function (event) {
        event.preventDefault();
        $("#header-search").addClass("open");
        $('#header-search > form > input[type="search"]').focus();
    });

    $("#header-search, #header-search button.close").on("click keyup", function (
        event
    ) {
        if (
            event.target === this ||
            event.target.className === "close" ||
            event.keyCode === 27
        ) {
            $(this).removeClass("open");
        }
    });

    $("form").on('submit', function (event) {
        event.preventDefault();
        $("#header-search").removeClass("open");
        return false;
    });

    /*-------------------------------------
      On Scroll
      -------------------------------------*/
    $(window).on("scroll", function () {
        //imageFunction();

        // Menu Sticky Header 1
        if ($(window).scrollTop() > 145) {
            $("#header_1").addClass("menu-sticky");
        } else {
            $("#header_1").removeClass("menu-sticky");
        }

        // Menu Sticky Header 2
        if ($(window).scrollTop() > 220) {
            $("#header_2").addClass("menu-sticky");
        } else {
            $("#header_2").removeClass("menu-sticky");
        }
    });

    /***************************************
     jquery Scollup activation code
     ***************************************/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });


    $(function () {

        /***************************************
         Multiscroll activation code
         ***************************************/
        if ($.fn.multiscroll !== undefined) {
            $('#multiscroll').multiscroll({
                verticalCentered: true,
                anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
                menu: '#msmenu',
                navigation: false,
                css3: true,
                navigationTooltips: ['First', 'Two', 'Three'],
                responsiveWidth: 992, // made responsive
                responsiveExpand: true, // made responsive
                loopBottom: false,
                loopTop: false,
                onLeave: function (index, nextIndex, direction) {},
                afterLoad: function (anchorLink, index) {},
                afterRender: function () {}
            });
        }

        /***************************************
         Single Scroll activation code
         ***************************************/
        if ($.fn.fullpage !== undefined) {
            $('#fullpage').fullpage({
                //options here
                sectionsColor: [],
                anchors: ['firstPage', 'secondPage', '3rdPage'],
                menu: '#fpsmenu',
                responsiveExpand: true, // made responsive
                responsiveWidth: 1400,
                continuousVertical: true,
                navigation: false,
                verticalCentered: false
            });

            //methods
            $.fn.fullpage.setAllowScrolling(true);
        }

        /*-------------------------------------
        Theia Side Bar
        -------------------------------------*/
        if (typeof ($.fn.theiaStickySidebar) !== "undefined") {
            $('section.fixed-side-bar .fixed-bar-coloum').theiaStickySidebar();
        }

        /*-------------------------------------
        Swiper js Initiat
        -------------------------------------*/
        //initialize swiper when document ready
        $('.swiper-container').each(function () {
            var swiper = $(this),
                autoplay = swiper.data('autoplay'),
                autoplayTimeout = swiper.data('autoplay-timeout') || '',
                speed = swiper.data('speed') || '',
                loop = swiper.data('loop') || true,
                slidesPerView = swiper.data('slides-per-view') || 3,
                spaceBetween = swiper.data('space-between'),
                centeredSlides = swiper.data('centered-slides'),
                rXsmall = swiper.data("r-x-small"),
                rSmall = swiper.data("r-small"),
                rMedium = swiper.data("r-medium"),
                rLarge = swiper.data("r-large"),
                rXlarge = swiper.data("r-x-large");

            var $swiper = new Swiper(swiper, {
                // Optional parameters
                autoplay: autoplay ? true : false,
                autoplayTimeout: autoplayTimeout ? autoplayTimeout : 10000,
                speed: speed ? speed : 1000,
                loop: loop ? true : false,
                slidesPerView: slidesPerView ? slidesPerView : 2,
                spaceBetween: spaceBetween ? spaceBetween : 30,
                centeredSlides: centeredSlides ? true : false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: rXsmall ? rXsmall : 1,
                    },
                    576: {
                        slidesPerView: rSmall ? rSmall : 2,
                    },
                    768: {
                        slidesPerView: rMedium ? rMedium : 3,
                    },
                    992: {
                        slidesPerView: rLarge ? rLarge : 4,
                    },
                    1200: {
                        slidesPerView: rXlarge ? rXlarge : 5,
                    }
                }
            });
        });

        /*-------------------------------------
          Counter
          -------------------------------------*/
        var counterContainer = $(".counter");
        if (counterContainer.length) {
            counterContainer.counterUp({
                delay: 50,
                time: 5000
            });
        }

        /*-------------------------------------
          MeanMenu activation code
          --------------------------------------*/
        $("nav#dropdown").meanmenu({
            siteLogo: "<div class='mobile-menu-nav-back'><a class='logo-mobile' href='/'><img src='/images/jsykutlogo.svg' alt='logo' class='img-fluid'/></a></div>"
        });

        // Countdown activation code
        var eventCounter = $(".countdown");
        if (eventCounter.length) {
            eventCounter.countdown("2019/10/21", function (e) {
                $(this).html(
                    e.strftime(
                        "<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Second</div> </div></div>"
                    )
                );
            });
        }
    });

    // Youtube Video
    if ($.fn.YTPlayer !== undefined) {
        $('.youtube-video').each(function () {
            var self = $(this),
                videoId = self.data("video-id");
            self.YTPlayer({
                mute: false,
                fitToBackground: true,
                videoId: videoId,
                playerVars: {
                    modestbranding: 0,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    branding: 0,
                    frameborder: 0,
                    loop: 1,
                    rel: 0,
                    autohide: 0,
                    start: 30,
                    height: 1,
                }
            });
        })
    }

    /*************************
     Nice select
     *************************/
    if (typeof ($.fn.niceSelect) !== 'undefined') {
        $('select').niceSelect();
    }

    /*-------------------------------------
       Circle Bars - Knob
       -------------------------------------*/
    if (typeof ($.fn.knob) !== undefined) {
        $('.knob.knob-percent.dial').each(function () {
            var $this = $(this),
                knobVal = $this.attr('data-rel');
            $this.knob({
                'draw': function () {},
                'format': function (value) {
                    return value + '%';
                }
            });
            $this.appear(function () {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, {
                accX: 0,
                accY: -150
            });
        });
    }

    /*-------------------------------------
    // Google Map
    -------------------------------------*/
    if ($("#googleMap").length) {
        window.onload = function () {
            var styles = [{
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#b7d0ea'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#c2c2aa'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#b6d1b0'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            }];
            var options = {
                mapTypeControlOptions: {
                    mapTypeIds: ['Styled']
                },
                center: new google.maps.LatLng(-37.81618, 144.95692),
                zoom: 10,
                disableDefaultUI: true,
                mapTypeId: 'Styled'
            };
            var div = document.getElementById('googleMap');
            var map = new google.maps.Map(div, options);
            var styledMapType = new google.maps.StyledMapType(styles, {
                name: 'Styled'
            });
            map.mapTypes.set('Styled', styledMapType);

            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/map-marker.png',
                map: map
            });
        };
    }

    /* -------------------------------------
      Offcanvas Menu activation code
      -------------------------------------*/
    $("#wrapper").on("click", ".offcanvas-menu-btn", function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass("menu-status-open")) {
            $this.removeClass("menu-status-open").addClass("menu-status-close");
        } else {
            $this.removeClass("menu-status-close").addClass("menu-status-open");
        }
        return true;
    });

    // Isotope initialization with all btn
    var $container = $(".isotope-wrap");
    if ($container.length > 0) {
        var $isotope;
        var blogGallerIso = $(".featuredContainer", $container).imagesLoaded(function () {
            $isotope = $(".featuredContainer", $container).isotope({
                filter: "*",
                transitionDuration: "1s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    transform: "scale(1)",
                    opacity: 1
                }
            });
        });
        $container.find(".isotope-classes-tab").on("click", "a", function () {
            var $this = $(this);
            $this
                .parent(".isotope-classes-tab")
                .find("a")
                .removeClass("current");
            $this.addClass("current");
            var selector = $this.attr("data-filter");
            $isotope.isotope({
                filter: selector
            });
            return false;
        });
    }

    // Price range filter
    var priceSlider = document.getElementById('price-range-filter');
    if (priceSlider) {
        noUiSlider.create(priceSlider, {
            start: [1000, 35000],
            connect: true,
            range: {
                'min': 0,
                'max': 2000
            },
            format: wNumb({
                decimals: 0
            }),
        });
        var marginMin = document.getElementById('price-range-min'),
            marginMax = document.getElementById('price-range-max');
        priceSlider.noUiSlider.on('update', function (values, handle) {
            if (handle) {
                marginMax.innerHTML = "$" + values[handle];
            } else {
                marginMin.innerHTML = "$" + values[handle];
            }
        });
    }

    /*-------------------------------------
     Quantity Holder
     -------------------------------------*/
    $('#quantity-holder, #quantity-holder2').on('click', '.quantity-plus', function () {

        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(), 10);
        if ($.isNumeric($quantity) && $quantity > 0) {
            $quantity = $quantity + 1;
            $target.val($quantity);
        } else {
            $target.val($quantity);
        }

    }).on('click', '.quantity-minus', function () {

        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(), 10);
        if ($.isNumeric($quantity) && $quantity >= 2) {
            $quantity = $quantity - 1;
            $target.val($quantity);
        } else {
            $target.val(1);
        }
    });

    // Gallery Popup
    if ($(".zoom-gallery").length) {
        $(".zoom-gallery").each(function () {
            $(this).magnificPopup({
                delegate: "a.popup-zoom",
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });
    }

    // Popup
    var yPopup = $(".popup-youtube");
    if (yPopup.length) {
        yPopup.magnificPopup({
            disableOn: 100,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    // ElevateZoom
    $(".tab-nav a").on('click', function () {
        $(this).tab('show');
        $('.zoom_01').elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 0
        });
    });


    /* ---------------------------------------
      Parallax
      --------------------------------------- */
    if ($(".parallaxie").length) {
        $(".parallaxie").parallaxie({
            speed: 0.5,
            offset: 0
        });
    }


    // Page Preloader
    // $("#preloader").fadeOut("slow", function () {
    //     $(this).remove();
    // });

    // Masonry
    var galleryIsoContainer = $("#no-equal-gallery");
    if (galleryIsoContainer.length) {
        var blogGallerIso = galleryIsoContainer.imagesLoaded(function () {
            blogGallerIso.isotope({
                itemSelector: ".no-equal-item",
                masonry: {
                    columnWidth: ".no-equal-item"
                }
            });
        });
    }

    /*-------------------------------------
    Accordion
    -------------------------------------*/
    var accordion = $("#accordion");
    accordion
        .on("show.bs.collapse", function (e) {
            $(e.target)
                .prev(".panel-heading")
                .addClass("active");
        })
        .on("hide.bs.collapse", function (e) {
            $(e.target)
                .prev(".panel-heading")
                .removeClass("active");
        });

    $(".panel-heading a", accordion).on("click", function (e) {
        if (
            $(this)
            .parents(".panel")
            .children(".panel-collapse")
            .hasClass("show")
        ) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    /*-------------------------------------
      On click loadmore functionality
      -------------------------------------*/
    $(".loadmore").on("click", "a", function (e) {
        e.preventDefault();
        var _this = $(this),
            _count = parseInt(_this.parent(".loadmore").data("count"), 10) || 1,
            _parent = _this.parents(".menu-list-wrapper"),
            _target = _parent.find(".menu-list"),
            _set = _target.find(".menu-item.hidden").slice(0, _count);
        if (_set.length) {
            _set.animate({
                opacity: 0
            });
            _set.promise().done(function () {
                _set.removeClass("hidden");
                _set.show().animate({
                        opacity: 1

                    },
                    1000
                );
            });
        } else {
            _this.text("No more item to display");
        }
        return false;
    });

    

})(jQuery);