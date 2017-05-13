/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.timer.Timer', {
    extend: 'Ext.Container',

    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.layout.VBox',
        'KidsTimer.view.timer.TimerController',
        'KidsTimer.view.timer.TimerModel'
    ],

    xtype: 'kt-timer',

    viewModel: {
        type: 'kt-timer'
    },

    controller: 'kt-timer',

    listeners: {
        startTimer: 'onStartTimer'
    },

    layout  : {
        type    : 'vbox',
        align   : 'stretch'
    },

    padding: 16,

    items: [{
        xtype: 'polar',
        flex: 1,
        bind: {
            store: '{timerStore}'
        },
        animation: false,
        series: {
            type: 'pie',
            highlight: true,
            angleField: 'data',
            colors: ['#aa0000', '#444444'],
            donut: 30
        }
    }, {
        xtype: 'component',
        height: 60,
        bind: {
            html: '<div class="kt-timer-remain-time">{remainTime}</div>'
        },
        margin: 16
    }, {
        xtype: 'button',
        ui: 'decline',
        text: 'やめる',
        height: 60,
        handler: 'onQuitButton',
        margin: '0 0 16 0'
    }, {
        xtype: 'button',
        ui: 'confirm',
        text: 'できた',
        height: 100,
        handler: 'onDoneButton'
    }]
});