/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.timer.Timer', {
    extend: 'Ext.Container',

    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.layout.Fit',
        'KidsTimer.view.timer.TimerController',
        'KidsTimer.view.timer.TimerModel'
    ],

    xtype: 'kt-timer',

    viewModel: {
        type: 'kt-timer'
    },

    controller: 'kt-timer',

    listeners: {
        startTimer: 'onStartTimer',
    },

    layout: 'fit',

    items: [{
        xtype: 'polar',
        bind: {
            store: '{timerStore}'
        },
        series: {
            type: 'pie',
            highlight: true,
            angleField: 'data',
            label: {
                field: 'name',
                display: 'rotate'
            },
            donut: 30
        }
    }, {
        xtype: 'button',
        docked: 'bottom',
        ui: 'decline',
        text: 'やめる',
        handler: 'onQuitButton'
    }, {
        xtype: 'button',
        docked: 'bottom',
        ui: 'alt',
        text: 'できた',
        handler: 'onDoneButton'
    }]
});