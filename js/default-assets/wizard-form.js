(function ($) {
    'use strict';

    const form = $("#example-form");
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        enableKeyNavigation:true,
        onFinished: function (event, currentIndex) {
            alert("已提交！");
        },
        labels: {
            cancel: "取消",
            current: "当前步骤：",
            pagination: "分页",
            finish: "完成",
            next: "下一步",
            previous: "上一步",
            loading: "加载中 ..."
        }
    });
    const validationForm = $("#example-validation-form");
    validationForm.val({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });
    validationForm.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {
            validationForm.val({
                ignore: [":disabled", ":hidden"]
            })
            return validationForm.val();
        },
        onFinishing: function (event, currentIndex) {
            validationForm.val({
                ignore: [':disabled']
            })
            return validationForm.val();
        },
        onFinished: function (event, currentIndex) {
            alert("已提交！");
        }
    });
    const verticalForm = $("#example-vertical-wizard");
    verticalForm.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        stepsOrientation: "vertical",
        onFinished: function (event, currentIndex) {
            alert("已提交！");
        },
        labels: {
            cancel: "取消",
            current: "当前步骤：",
            pagination: "分页",
            finish: "完成",
            next: "下一步",
            previous: "上一步",
            loading: "加载中 ..."
        }
    });

})(jQuery);