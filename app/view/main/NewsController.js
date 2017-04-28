/**
 * Created by mohamad on 4/25/2017.
 */
Ext.define('bazinam.view.main.NewsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.news',
    syncNews: function(data) {
        console.log(data);
    }
});