/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.timer.TimerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kt-timer',

    requires: [
        'Ext.util.DelayedTask'
    ],

    interval: 1000,

    onStartTimer: function (view, t) {
        var me = this,
            vm = me.getViewModel();

        vm.clearTimer();
        vm.set('limitTime', t);
        vm.set('moving', true);
        me.task = Ext.create('Ext.util.DelayedTask', function() {
            vm.countUp();
            if (!vm.getRemain()) {
                me.lookup('timeUpSound').play();
                me.stopTimer('時間切れです', 'fa-hourglass-o');
            }
            //noinspection JSCheckFunctionSignatures
            me.task.delay(me.interval);
        }, me);
        //noinspection JSCheckFunctionSignatures
        me.task.delay(me.interval);
    },

    onDoneButton: function () {
        var me = this,
            vm = me.getViewModel();

        me.lookup('doneSound').play();
        me.stopTimer('時間内にできました', 'fa-thumbs-o-up');
        vm.clearTimer();
    },

    onQuitButton: function () {
        var me = this,
            vm = me.getViewModel();

        me.lookup('quitSound').play();
        me.stopTimer('あきらめました', 'fa-thumbs-down');
        vm.clearTimer();
    },

    stopTimer: function (message, icon) {
        var me = this,
            vm = me.getViewModel();

        vm.set('moving', false);
        me.task.cancel();
        me.fireViewEvent('stopTimer', message, icon);
    }
});