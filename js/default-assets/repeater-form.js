(function ($) {
    "use strict";
    
    // :: 表单转发器激活代码
    $('.repeater-default').repeater({
        show: function () {
            $(this).slideDown('slow');
        }
    });
    $('.default-repeater').repeater({
        defaultValues: {
            features: ['abs'],
            make: '福特',
            model: '野马'
        }
    });
    $('.repeater-slide').repeater({
        defaultValues: {
            'textarea-input': 'foo',
            'text-input': 'bar',
            'select-input': 'B',
            'checkbox-input': ['A', 'B'],
            'radio-input': 'B'
        },
        hide: function (deleteElement) {
            if (confirm('您确定要删除此元素吗？')) {
                $(this).slideUp(deleteElement);
            }
        }
    });
    
})(jQuery);