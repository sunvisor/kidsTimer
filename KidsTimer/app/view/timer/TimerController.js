/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.timer.TimerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kt-timer',

    onStartTimer: function () {
        var me = this,
            vm = me.getViewModel();

        vm.clearTimer();
        vm.set('moving', true);
        me.timer = Ext.Function.interval(function() {
            vm.countUp();
            if (!vm.getRemain()) {
                me.stopTimer('時間切れです');
            }
        }, 1000);
    },

    onDoneButton: function () {
        var me = this,
            vm = me.getViewModel();

        me.stopTimer('時間内にできました');
        vm.clearTimer();
    },

    onQuitButton: function () {
        var me = this,
            vm = me.getViewModel();

        me.stopTimer('あきらめました');
        vm.clearTimer();
    },

    stopTimer: function (message) {
        var me = this,
            vm = me.getViewModel();

        vm.set('moving', false);
        clearInterval(this.timer);
        me.fireViewEvent('stopTimer', message);
    }
});