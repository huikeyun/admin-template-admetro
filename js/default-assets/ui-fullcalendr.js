(function ($) {
    'use strict';

    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();

    const eventList = [{
        title: '全天的活动',
        start: new Date(y, m, d - 12),
        backgroundColor: 'rgba(88, 103, 221, 0.8)'

    },
        {
            title: '长期事件',
            start: new Date(y, m, d - 8),
            end: new Date(y, m, d - 5),
            className: 'fc-event-warning',
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            id: 999,
            title: '重复事件',
            start: new Date(y, m, d - 6, 16, 0),
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            id: 999,
            title: '重复事件',
            start: new Date(y, m, d + 1, 16, 0),
            className: 'fc-event-success',
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '发布会',
            start: new Date(y, m, d - 4),
            end: new Date(y, m, d - 2),
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '会议',
            start: new Date(y, m, d - 3, 10, 30),
            end: new Date(y, m, d - 3, 12, 30),
            className: 'fc-event-danger'
        },
        {
            title: '午饭',
            start: new Date(y, m, d - 3, 12, 0),
            className: 'fc-event-info',
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '会议',
            start: new Date(y, m, d - 3, 14, 30),
            className: 'fc-event-dark',
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '欢乐时光',
            start: new Date(y, m, d - 3, 17, 30),
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '晚餐',
            start: new Date(y, m, d - 3, 20, 0),
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '生日聚会',
            start: new Date(y, m, d - 2, 7, 0),
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '后台事件',
            start: new Date(y, m, d + 5),
            end: new Date(y, m, d + 7),
            rendering: 'background',
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        },
        {
            title: '点击跳转到谷歌',
            url: 'http://google.com/',
            start: new Date(y, m, d + 13),
            backgroundColor: 'rgba(88, 103, 221, 0.8)'
        }];

    // Default view
    $('#fullcalendar-default-view').fullCalendar({
        themeSystem: 'bootstrap4',
        bootstrapFontAwesome: {
            close: ' ion ion-md-close',
            prev: ' fa fa-angle-left scaleX--1-rtl',
            next: ' fa fa-angle-right scaleX--1-rtl',
            prevYear: ' fa fa-angle-left scaleX--1-rtl',
            nextYear: ' fa fa-angle-right scaleX--1-rtl'
        },

        header: {
            left: 'title',
            center: 'month,agendaWeek,agendaDay',
            right: 'prev,next today'
        },

        defaultDate: today,
        navLinks: true,
        selectable: true,
        selectHelper: true,
        weekNumbers: true,
        nowIndicator: true,
        firstDay: 1,
        businessHours: {
            dow: [1, 2, 3, 4, 5],
            start: '9:00',
            end: '18:00',
        },
        editable: true,
        eventLimit: true,
        events: eventList,
        select: function (start, end) {
            $('#fullcalendar-default-view-modal')
                .on('shown.bs.modal', function () {
                    $(this).find('input[type="text"]').trigger('focus');
                })
                .on('hidden.bs.modal', function () {
                    $(this)
                        .off('shown.bs.modal hidden.bs.modal submit')
                        .find('input[type="text"], select').val('');
                    $('#fullcalendar-default-view').fullCalendar('unselect');
                })
                .on('submit', function (e) {
                    e.preventDefault();
                    const title = $(this).find('input[type="text"]').val();
                    const className = $(this).find('select').val() || null;

                    if (title) {
                        const eventData = {
                            title: title,
                            start: start,
                            end: end,
                            className: className
                        };
                        $('#fullcalendar-default-view').fullCalendar('renderEvent', eventData, true);
                    }

                    $(this).modal('hide');
                })
                .modal('show');
        },
        eventClick: function (calEvent, jsEvent, view) {
            alert('Event: ' + calEvent.title);
        }
    });

    // List view
    $('#fullcalendar-list-view').fullCalendar({
        themeSystem: 'bootstrap4',
        bootstrapFontAwesome: {
            close: ' ion ion-md-close',
            prev: ' fa fa-angle-left scaleX--1-rtl',
            next: ' fa fa-angle-right scaleX--1-rtl',
            prevYear: ' fa fa-angle-left scaleX--1-rtl',
            nextYear: ' fa fa-angle-right scaleX--1-rtl'
        },

        header: {
            left: 'title',
            center: 'listDay,listWeek,month',
            right: 'prev,next today'
        },

        views: {
            listDay: {
                buttonText: 'list day'
            },
            listWeek: {
                buttonText: 'list week'
            }
        },

        defaultView: 'listWeek',
        defaultDate: today,
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: eventList
    });

})(jQuery);