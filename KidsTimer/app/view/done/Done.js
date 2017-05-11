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

    layout: 'fit',

    items: [{
        xtype: 'panel',
        cls: 'kt-done',
        bind: {
            html: '<div class="kt-done-message">{message}</div>'
        }
    }, {
        xtype: 'button',
        text: 'もういちど',
        docked: 'bottom',
        handler: 'onRetryButton'
    }]
});