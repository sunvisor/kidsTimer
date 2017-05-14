/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.start.StartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kt-start',

    onStartButton: function () {
        var me = this,
            field = me.lookup('targetTime');

        me.lookup('startSound').play();
        me.fireViewEvent('startTimer', field.getValue());
    }
});