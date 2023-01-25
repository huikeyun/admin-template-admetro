(function ($) {
    "use strict";

    // :: Notify Message 激活代码
    function notify(message, type) {
        $.notify({
            icon: 'ti-bell',
            title: '萨曼莎莎拉',
            message: message,
            url: 'https://github.com/mouse0270/bootstrap-notify',
            target: '_blank',
        }, {
            type: type,
            label: 'Cancel',
            className: 'btn-xs btn-inverse',
            placement: {
                from: 'top',
                align: 'right'
            },
            delay: 4000,
            z_index: 99999,
            spacing: 5,
            showProgressbar: false, //显示进度条
            allow_dismiss: true, //显示删除按钮
            animate: {
                enter: 'animated fadeInRight',
                exit: 'animated fadeOutRight'
            },
            offset: {
                x: 30,
                y: 80
            }
        });
    }

    notify('您好，欢迎回来！ - Admetro 仪表板', 'info');

})(jQuery);