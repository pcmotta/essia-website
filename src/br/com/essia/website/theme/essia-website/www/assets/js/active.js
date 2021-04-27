(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        // Menu Trigger
        $('.menu-trigger').on('click', function() {
            $('.mobile-menu').slideToggle();
        });

        $(".main-menu .fa-search").on("click", function() {
            $(".search-box").addClass("d-block").removeClass("d-none");
            $(".main-menu").removeClass("anim");
            $(".main-menu").addClass("d-none").removeClass("d-block");

        });

        $(".search-close .fa-close").on("click", function() {
            $(".main-menu").addClass("d-block").removeClass("d-none");
            $(".main-menu").addClass("anim");
            $(".search-box").addClass("d-none").removeClass("d-block");
        });

        $(".search-trigger .fa-search").on("click", function() {
            $(".search-mobile").addClass("d-block").removeClass("d-none");
            $(".menu-trigger").addClass("d-none").removeClass("d-block");
            $(".menu-trigger").addClass("anim");
            $(this).addClass("d-none").removeClass("d-block");
        });

        $(".search-close .fa-close").on("click", function() {
            $(".search-trigger .fa-search").addClass("d-block").removeClass("d-none");
            $(".menu-trigger").addClass("d-block").removeClass("d-none");
            $(".menu-trigger").removeClass("anim");
            $(".search-mobile").addClass("d-none").removeClass("d-block");
        });


    });


    jQuery(window).on("load", function() {

    });

})(jQuery);