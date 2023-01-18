(function ($) {
    "use strict";
    
    // :: Notify Message 激活代码
    function notify(message, type) {
        $.notify({
            message: message
        }, {
            type: type,
            allow_dismiss: false,
            label: 'Cancel',
            className: 'btn-xs btn-inverse',
            placement: {
                from: 'top',
                align: 'right'
            },
            delay: 6000,
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
    notify('您好，欢迎回来！ - Admetro 仪表板', 'inverse');
    
})(jQuery);