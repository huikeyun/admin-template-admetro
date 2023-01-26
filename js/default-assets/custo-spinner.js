(function ($) {
    "use strict";
    $('.has-spinner').click(function () {
        const btn = $(this);
        $(btn).buttonLoader('start');
        setTimeout(function () {
            $(btn).buttonLoader('stop');
        }, 3000);
    });
    // Bind normal buttons
    Ladda.bind('.button-demo button', {
        timeout: 2000
    });

    // Bind progress buttons and simulate loading progress
    Ladda.bind('.progress-demo button', {
        callback: function (instance) {
            let progress = 0;
            const interval = setInterval(function () {
                progress = Math.min(progress + Math.random() * 0.1, 1);
                instance.setProgress(progress);

                if (progress === 1) {
                    instance.stop();
                    clearInterval(interval);
                }
            }, 200);
        }
    });
})(jQuery);