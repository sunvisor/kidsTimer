/**
 * Main View
 */
Ext.define('KidsTimer.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.layout.Card',
        'KidsTimer.view.done.Done',
        'KidsTimer.view.main.MainController',
        'KidsTimer.view.main.MainModel',
        'KidsTimer.view.start.Start',
        'KidsTimer.view.timer.Timer'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'card',

    items: [{
        xtype: 'kt-start',
        reference: 'kt-start',
        listeners: {
            startTimer: 'onStartTimer'
        }
    }, {
        xtype: 'kt-timer',
        reference: 'kt-timer',
        listeners: {
            stopTimer: 'onStopTimer'
        }
    }, {
        xtype: 'kt-done',
        reference: 'kt-done',
        listeners: {
            retry: 'onRetry'
        }
    }]
});
