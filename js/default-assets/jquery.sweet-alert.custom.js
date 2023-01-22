!function ($) {
    "use strict";

    const SweetAlert = function () {
    };

    // 示例
    SweetAlert.prototype.init = function () {

        // 基础
        $('#sa-basic').click(function () {
            swal("这是一条消息！");
        });

        // 标题下有文字
        $('#sa-title').click(function () {
            swal("这是一条消息！", "易卜生曾经说过，伟大的事业，需要决心，能力，组织和责任感。")
        });

        // 成功信息
        $('#sa-success').click(function () {
            swal("做得好！", "易卜生曾经说过，伟大的事业，需要决心，能力，组织和责任感。", "success")
        });

        // 警告信息
        $('#sa-warning').click(function () {
            swal({
                title: "你确定吗？",
                text: "你将无法恢复这个虚构的文件！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dd6b55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
            }, function () {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });
        });

        // 范围
        $('#sa-params').click(function () {
            swal({
                title: "你确定吗？",
                text: "你将无法恢复这个虚构的文件！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dd6b55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });
        });

        // 自定义图片
        $('#sa-image').click(function () {
            swal({
                title: "戈文达！",
                text: "最近加入推特",
                imageUrl: "../../images/avatar.png"
            });
        });

        //Auto Close Timer
        $('#sa-close').click(function () {
            swal({
                title: "自动关闭警报！",
                text: "我将在 2 秒内关闭。",
                timer: 2000,
                showConfirmButton: false
            });
        });


    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing 
    function ($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);