/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.timer.TimerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.kt-timer',

    data: {
        moving: false,
        done: 0,
        limitTime: 10
    },

    formulas: {
        remain: function(get) {
            return get('limitTime') - get('done');
        },
        remainTime: function (get) {
            var s = get('limitTime') - get('done'),
                t = new Date;

            t.setTime(0);
            t.setSeconds(s);
            return Ext.Date.format(t, 'i:s');
        }
    },

    stores: {
        timerStore: {
            fields: ['name', 'data'],
            data: [{
                name: 'done',
                data: '{done}'
            }, {
                name: 'remain',
                data: '{remain}'
            }]
        }
    },

    clearTimer: function () {
        var me = this;

        me.set('done', 0);
    },

    countUp: function() {
        var me = this;

        me.set('done', me.get('done') + 1);
    },

    getRemain: function () {
        return this.get('limitTime') - this.get('done');
    }
});