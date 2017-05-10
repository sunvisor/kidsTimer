/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.start.Start', {
    extend: 'Ext.Container',

    requires: [
        'KidsTimer.view.start.StartModel',
		'KidsTimer.view.start.StartController'
    ],

    xtype: 'kt-start',

    viewModel: {
        type: 'kt-start'
    },

    controller: 'kt-start',

    items: [{
        xtype: 'button',
        text: 'すたーと',
        handler: 'onStartButton'
    }]
});