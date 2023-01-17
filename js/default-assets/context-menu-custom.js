(function ($) {
    "use strict";

    $.contextMenu({
        selector: '#context-menu-1',
        callback: function (key, options) {
            const m = "点击了: " + key;
           /* window.console && console.log(m) || alert(m);*/
        },
        items: {
            "编辑": {name: "编辑", 图标: "fa-edit", accesskey: "e"},
            "剪切": {name: "剪切", 图标: "fa-beer", accesskey: "c"},
            "复制": {name: "复制", 图标: "copy"},
            "粘贴": {name: "粘贴", 图标: "paste"},
            "删除": {name: "删除", 图标: "delete"},
            "分割线": "---------",
            "退出": {
                name: "退出", 图标: function () {
                    return 'context-menu-icon context-menu-icon-quit';
                }
            }
        }
    });

    $.contextMenu({
        selector: '#context-menu-2',
        callback: function (key, options) {
            const m = "点击了: " + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            "编辑": {name: "编辑", 图标: "fa-edit", accesskey: "e"},
            "剪切": {name: "剪切", 图标: "fa-beer", accesskey: "c"},
            "复制": {name: "复制", 图标: "copy"},
            "粘贴": {name: "粘贴", 图标: "paste"},
            "删除": {name: "删除", 图标: "delete"},
            "分割线1": "---------",
            "退出": {
                name: "退出", 图标: function () {
                    return 'context-menu-icon context-menu-icon-quit';
                }
            },
            "分割线2": "---------",
            "子菜单": {
                name: "子菜单",
                items: {
                    "子菜单1": { name: "子菜单1"},
                    "子菜单2": { name: "子菜单2"},
                    "子菜单3": { name: "子菜单3" },
                }
            }
        }
    });


})(jQuery);