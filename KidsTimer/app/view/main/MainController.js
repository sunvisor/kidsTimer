/**
 * Main Controller
 */
Ext.define('KidsTimer.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onStartTimer: function () {
        var me = this,
            timer = me.lookup('kt-timer');

        me.getView().setActiveItem(timer);
        timer.fireEvent('startTimer', timer);
    },

    onStopTimer: function (view, message) {
        var me = this,
            done = me.lookup('kt-done');

        done.fireEvent('message', done, message);
        me.getView().setActiveItem(done);
    },

    onRetry: function () {
        var me = this,
            start = me.lookup('kt-start');

        me.getView().setActiveItem(start);
    }
});
