// 避免在缺少控制台的浏览器中出现 `console` 错误。
// 不检查 JSUnusedLocalSymbols,JSUnresolvedVariable

(function () {
    let method;
    const noop = function noop() {
    };
    const methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    let length = methods.length;
    const console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // 只对未定义的方法进行存根。
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

document.write('<script src="https://cdn.staticfile.org/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js"><\/script>');
/* Tree()
 * ======
 * 将嵌套列表转换为多级列表
 * 树视图菜单。
 *
 * @Usage: $('.my-menu').tree(选项)
 * 或将 [data-widget="tree"] 添加到 ul 元素
 * 将任何选项作为 data-option="value" 传递
 */
+ function ($) {
    'use strict';

    const DataKey = 'lte.tree';
    const Default = {
        animationSpeed: 500,
        accordion: true,
        followLink: false,
        trigger: '.treeview a'
    };

    const Selector = {
        tree: '.tree',
        treeview: '.treeview',
        treeviewMenu: '.treeview-menu',
        open: '.menu-open, .active',
        li: 'li',
        data: '[data-widget="tree"]',
        active: '.active'
    };

    const ClassName = {
        open: 'menu-open',
        tree: 'tree'
    };

    const Event = {
        collapsed: 'collapsed.tree',
        expanded: 'expanded.tree'
    };

    // 树类定义
    // =====================
    const Tree = function (element, options) {
        this.element = element;
        this.options = options;
        $(this.element).addClass(ClassName.tree);
        $(Selector.treeview + Selector.active, this.element).addClass(ClassName.open);
        this._setUpListeners();
    };

    Tree.prototype.toggle = function (link, event) {
        const treeviewMenu = link.next(Selector.treeviewMenu);
        const parentLi = link.parent();
        const isOpen = parentLi.hasClass(ClassName.open);

        if (!parentLi.is(Selector.treeview)) {
            return;
        }

        if (!this.options.followLink || link.attr('href') === '#') {
            event.preventDefault();
        }

        if (isOpen) {
            this.collapse(treeviewMenu, parentLi);
        } else {
            this.expand(treeviewMenu, parentLi);
        }
    };

    Tree.prototype.expand = function (tree, parent) {
        const expandedEvent = $.Event(Event.expanded);

        if (this.options.accordion) {
            const openMenuLi = parent.siblings(Selector.open);
            const openTree = openMenuLi.children(Selector.treeviewMenu);
            this.collapse(openTree, openMenuLi);
        }

        parent.addClass(ClassName.open);
        tree.slideDown(this.options.animationSpeed, function () {
            $(this.element).trigger(expandedEvent);
        }.bind(this));
    };

    Tree.prototype.collapse = function (tree, parentLi) {
        const collapsedEvent = $.Event(Event.collapsed);

        //tree.find(Selector.open).removeClass(ClassName.open);
        parentLi.removeClass(ClassName.open);
        tree.slideUp(this.options.animationSpeed, function () {
            //tree.find(Selector.open + ' > ' + Selector.treeview).slideUp();
            $(this.element).trigger(collapsedEvent);
        }.bind(this));
    };

    // 私有

    Tree.prototype._setUpListeners = function () {
        const that = this;

        $(this.element).on('click', this.options.trigger, function (event) {
            that.toggle($(this), event);
        });
    };

    // 插件定义
    // =================
    function Plugin(option) {
        return this.each(function () {
            const $this = $(this);
            const data = $this.data(DataKey);

            if (!data) {
                const options = $.extend({}, Default, $this.data(), typeof option == 'object' && option);
                $this.data(DataKey, new Tree($this, options));
            }
        });
    }

    const old = $.fn.tree;

    $.fn.tree = Plugin;
    $.fn.tree.Constructor = Tree;

    // 无冲突模式
    // ================
    $.fn.tree.noConflict = function () {
        $.fn.tree = old;
        return this;
    };

    // 树数据 API
    // =============
    $(window).on('load', function () {
        $(Selector.data).each(function () {
            Plugin.call($(this));
        });
    });

}(jQuery);

// **********************************************
// ** Classy Nav - 1.1.0
// ** 响应式 超级菜单 插件
// ** Copyright (c) 2019 Designing World
// **********************************************
(function ($) {
    $.fn.classyNav = function (options) {

        // 变量
        const navContainer = $('.classy-nav-container');
        const classy_nav = $('.classynav ul');
        const classy_navli = $('.classynav > ul > li');
        const navbarToggler = $('.classy-navbar-toggler');
        const closeIcon = $('.classycloseIcon');
        const navToggler = $('.navbarToggler');
        const classyMenu = $('.classy-menu');
        const var_window = $(window);

        // 默认选项
        const defaultOpt = $.extend({
            breakpoint: 991,
            openCloseSpeed: 500,
            megaopenCloseSpeed: 800
        }, options);

        return this.each(function () {

            // 导航栏切换器
            navbarToggler.on('click', function () {
                navToggler.toggleClass('active');
                classyMenu.toggleClass('menu-on');
            });

            // 关闭图标
            closeIcon.on('click', function () {
                classyMenu.removeClass('menu-on');
                navToggler.removeClass('active');
            });

            // 在父 li 类中添加下拉菜单和大型菜单类
            classy_navli.has('.dropdown').addClass('cn-dropdown-item');
            classy_navli.has('.megamenu').addClass('megamenu-item');

            // 向有子项的 li 项添加切换按钮
            classy_nav.find('li a').each(function () {
                if ($(this).next().length > 0) {
                    $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
                }
            });

            // 每次点击时展开下拉菜单
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
                $(this).parent('li').toggleClass('active');
            });

            // 在下拉菜单和大型菜单项中添加填充
            $('.megamenu-item').removeClass('has-down');

            // 每次点击都会展开超级菜单
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
            });

            // 实时检查浏览器宽度
            function breakpointCheck() {
                const windoWidth = window.innerWidth;
                if (windoWidth <= defaultOpt.breakpoint) {
                    navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
                } else {
                    navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
                }
            }

            breakpointCheck();

            var_window.on('resize', function () {
                breakpointCheck();
            });

            // 侧边栏菜单启用
            if (defaultOpt.sideMenu === true) {
                navContainer.addClass('sidebar-menu-on').removeClass('breakpoint-off');
            }
        });
    };

}(jQuery));

document.write('<script src="https://cdn.staticfile.org/OwlCarousel2/2.3.4/owl.carousel.min.js"><\/script>');
document.write('<script src="https://cdn.staticfile.org/wow/1.1.2/wow.min.js"><\/script>');
document.write('<script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/waypoints/2.0.5/waypoints.min.js"><\/script>');
document.write('<script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/countup.js/1.9.3/countUp.min.js"><\/script>');
document.write('<script src="https://cdn.staticfile.org/jquery.imagesloaded/4.1.4/imagesloaded.min.js"><\/script>');
document.write('<script src="https://cdn.staticfile.org/jquery.isotope/3.0.6/isotope.pkgd.min.js"><\/script>');
document.write('<script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/jarallax/1.10.6/jarallax.min.js"><\/script>');
document.write('<script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/jarallax/1.12.8/jarallax-video.min.js"><\/script>');
document.write('<script src="https://cdn.staticfile.org/jquery.countdown/2.2.0/jquery.countdown.min.js"><\/script>');
document.write('<script src="https://cdn.staticfile.org/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"><\/script>');
document.write('<script src="https://cdn.staticfile.org/jqueryui/1.13.2/jquery-ui.min.js"><\/script>');