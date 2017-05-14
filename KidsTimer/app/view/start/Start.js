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

    padding: 16,

    items: [{
        xtype: 'panel',
        html: [
            '<div class="kt-start">',
            '<span class="kt-start-title">きっずたいまー</span>',
            '</div>',
            '<div class="kt-start kt-start-icon">',
            '<i class="fa fa-clock-o"></i>',
            '</div>'
        ].join('\n'),
        flex: 2
    }, {
        label: 'もくひょうタイム',
        labelAlign: 'top',
        textAlign: 'center',
        xtype: 'selectfield',
        reference: 'targetTime',
        valueField: 'value',
        displayField: 'text',
        bind: {
            options: '{timeOptions}'
        },
        defaultPhonePickerConfig: {
            doneButton: 'えらぶ',
            cancelButton: 'やめる'
        },
        value: 300
    }, {
        xtype: 'component',
        flex: 1
    }, {
        xtype: 'button',
        height: 100,
        ui: 'alt',
        text: 'スタート',
        handler: 'onStartButton'
    }, {
        xtype: 'audio',
        reference: 'startSound',
        hidden: true,
        url: 'resources/switch1.mp3'
    }]
});