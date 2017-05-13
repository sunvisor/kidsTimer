/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.done.Done', {
    extend: 'Ext.Container',

    requires: [
        'Ext.layout.Fit',
        'KidsTimer.view.done.DoneController',
        'KidsTimer.view.done.DoneModel'
    ],

    xtype: 'kt-done',

    viewModel: {
        type: 'kt-done'
    },

    controller: 'kt-done',

    listeners: {
        message: 'onMessage'
    },

    layout  : {
        type    : 'vbox',
        align   : 'stretch'
    },

    padding: 16,

    items: [{
        xtype: 'panel',
        flex: 1,
        cls: 'kt-done',
        tpl: [
            '<div class="kt-done-icon"><i class="fa {icon}"></i></div>',
            '<div class="kt-done-message">{message}</div>'
        ].join('\n'),
        bind: {
            data: {
                icon: '{icon}',
                message: '{message}'
            }
        }
    }, {
        xtype: 'button',
        height: 100,
        ui: 'confirm',
        text: 'もういちど',
        handler: 'onRetryButton'
    }]
});