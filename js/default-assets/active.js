(function ($) {
    "use strict";

    // :: 变量
    const admetro_window = $(window);
    const dd = $("dd");
    const pageWrapper = $(".admetro-page-wrapper");
    const sideMenuArea = $(".admetro-sidemenu-area");

    // :: 预加载器激活代码
    admetro_window.on("load", function () {
        $("#preloader").fadeOut("1000", function () {
            $(this).remove();
        });
    });

    // :: slimscroll 激活代码
    if ($.fn.slimscroll) {
        $('#admetroSideNav').slimscroll({
            height: '100%',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 15
        });
    }

    // :: slimscroll 激活代码
    if ($.fn.slimscroll) {
        $('#messageBox, #notificationsBox').slimscroll({
            height: '340px',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 15
        });
    }

    // :: slimscroll 激活代码
    if ($.fn.slimscroll) {
        $('#notificationsBox2').slimscroll({
            height: '300px',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 15
        });
    }

    // :: slimscroll 激活代码
    if ($.fn.slimscroll) {
        $('#dashboardtodoList').slimscroll({
            height: '370px',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 15
        });
    }

    // :: slimscroll 激活代码
    if ($.fn.slimscroll) {
        $('#pageVisitorTable').slimscroll({
            height: '300px',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 15
        });
    }

    // :: slimscroll 激活代码
    if ($.fn.slimscroll) {
        $('#chooseLayout').slimscroll({
            height: '100%',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 15
        });
    }

    // :: 菜单激活代码
    $("#menuCollasped").on("click", function () {
        pageWrapper.toggleClass("menu-collasped-active");
    });

    $("#mobileMenuOpen").on("click", function () {
        pageWrapper.toggleClass("mobile-menu-active");
    });

    sideMenuArea.on("mouseenter", function () {
        pageWrapper.addClass("sidemenu-hover-active");
        pageWrapper.removeClass("sidemenu-hover-deactive");
    });

    sideMenuArea.on("mouseleave", function () {
        pageWrapper.removeClass("sidemenu-hover-active");
        pageWrapper.addClass("sidemenu-hover-deactive");
    });

    $("#settingTrigger").on("click", function () {
        $(".choose-layout-area").toggleClass("active");
    });

    // :: Wow 激活代码
    if (admetro_window.width() > 767) {
        new WOW().init();
    }

    // :: Gallery 激活代码
    if ($.fn.imagesLoaded) {
        $('.gallery_full_width_images_area').imagesLoaded(function () {

            // 初始化同位素
            const $grid = $('.gallery_full_width_images_area').isotope({
                itemSelector: '.portfolio_gallery_iteam',
                percentPosition: true
            });
            // 在按钮点击时筛选项目
            $('.portfolio-menu').on('click', 'button', function () {
                const filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
        });
    }

    // :: 图库菜单样式代码
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu .btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Tooltip 激活代码
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: Popover 激活代码
    if ($.fn.popover) {
        $('[data-toggle="popover"]').popover();
    }

    // :: FooTable 激活代码
    if ($.fn.footable) {
        $(".footable").footable();
    }

    // :: Nice Select 激活代码
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: Dropdown 激活代码
    if ($.fn.dropdown) {
        $("dropdown-toggle").dropdown();
    }

    // :: 写邮件 激活代码
    if ($.fn.wysihtml5) {
        $("#compose-textarea").wysihtml5();
    }

    // :: Jarallax 激活代码
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: 手风琴 激活代码
    dd.filter(":nth-child(n+3)").hide();
    $("dl").on("click", "dt", function () {
        $(this).next().slideDown(500).siblings("dd").slideUp(500);
    });

    // :: 防止默认点击
    $('a[href="#"]').on("click", function ($) {
        $.preventDefault();
    });

    // :: 倒计时 激活代码
    if ($.fn.countdown) {
        $("#clock").countdown("2029/12/24", function (event) {
            $(this).html(event.strftime("<div>%D <span>天</span></div> <div>%H <span>小时</span></div> <div>%M <span>分</span></div> <div>%S <span>秒</span></div>"));
        });
    }

    // :: 时间线 激活代码
    $('#leftVersion').on('click', function (event) {
        event.preventDefault();
        $('#vertical-timeline').toggleClass('center-orientation');
    });

})(jQuery);