/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.start.Start', {
    extend: 'Ext.Container',

    requires: [
        'Ext.field.Select',
        'Ext.layout.VBox',
        'KidsTimer.view.start.StartController',
        'KidsTimer.view.start.StartModel'
    ],

    xtype: 'kt-start',

    viewModel: {
        type: 'kt-start'
    },

    controller: 'kt-start',

    layout  : {
        type    : 'vbox',
        align   : 'stretch'
    },

    items: [{
        xtype: 'panel',
        html: 'きっずたいまー',
        flex: 1
    }, {
        xtype: 'selectfield',
        reference: 'targetTime',
        valueField: 'value',
        displayField: 'text',
        bind: {
            options: '{timeOptions}'
        },
        value: 300
    }, {
        xtype: 'button',
        ui: 'alt',
        text: 'すたーと',
        handler: 'onStartButton'
    }]
});