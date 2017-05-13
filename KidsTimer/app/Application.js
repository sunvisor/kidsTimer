/**
 * The Main Application Class.
 */
Ext.define('KidsTimer.Application', {
    extend: 'Ext.app.Application',
    
    name: 'KidsTimer',

    onAppUpdate: function () {
        window.location.reload();
    }
});
