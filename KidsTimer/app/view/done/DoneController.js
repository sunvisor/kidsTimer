/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.done.DoneController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kt-done',

    onRetryButton: function () {
        var me = this;

        me.fireViewEvent('retry');
    },

    onMessage: function (view, message) {
        var me = this;

        me.getViewModel().set('message', message);
    }
});