//noinspection JSUnusedGlobalSymbols
/**
 * Created by sunvisor on 2017/05/11.
 */
Ext.define('KidsTimer.view.start.StartModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.kt-start',

    data: {
        targetTime: 300
    },

    formulas: {
        timeOptions: function() {
            var r = [], t;
            for (t=1; t<=10; t++) {
                r.push({text: Ext.String.format('{0} 分', [t]), value: t * 60});
            }
            for (t=15; t<=120; t+=5) {
                r.push({text: Ext.String.format('{0} 分', [t]), value: t * 60});
            }
            return r;
        }
    }
});