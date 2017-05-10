/**
 * The Main Application Class.
 */
Ext.define('KidsTimer.Application', {
    extend: 'Ext.app.Application',
    
    name: 'KidsTimer',

    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
