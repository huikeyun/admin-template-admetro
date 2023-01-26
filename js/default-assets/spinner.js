(function ($) {
    "use strict";
    
    $('.has-spinner').click(function () {
        const btn = $(this);
        $(btn).buttonLoader('start');
        setTimeout(function () {
            $(btn).buttonLoader('stop');
        }, 3000);
    });
    
})(jQuery);