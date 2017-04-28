/**
 * Created by mohamad on 4/25/2017.
 */
Ext.define('bazinam.view.main.News', {
    extend: 'Ext.window.Window',
    xtype: 'composenews',
    title: 'خبر',
    bodyPadding: 10,
    requires:[
        'bazinam.view.main.NewsController'
    ],
    controller: 'news',
    constructor : function(config){
        this.callParent([config]);
        this.initConfig(config);
        console.log(config.myRec);
    },
    config: {
        myRec: null
    },
    publishes : ['myRec'],
    items: [
        {
            xtype:'textfield',
            fieldLabel: 'First Name',
            name: 'title',
            id:'title'
        },
        {
            xtype:'textfield',
            fieldLabel: 'Last Name',
            name: 'lastName',

        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'birthDate'
        },
        {
            xtype: 'button',
            name: 'syncNewsBut',
            cls: 'btn-orange',
            text: 'ثبت',
            maxWidth: 50,
            listeners: {
                click: function(){
                    var me = this;
                    console.log(me.ownerCt.myRec);
                    // var store = Ext.getStore('newsstore');
                    // var value = e.record.data;
                    // store.each(function(record, idx) {
                    //     val = record.get('NewsID');
                    //     if (val == value.NewsID) {
                    //         //Ext.getBody().mask('Loading...');
                    //         record.set('Title', value.Title);
                    //         store.sync({
                    //             success: function() {
                    //                 record.commit();
                    //                 store.commitChanges();
                    //                 //Ext.getBody().unmask();
                    //             },
                    //             failure: function(rec, op) {
                    //                 //Ext.getBody().unmask();
                    //             }
                    //         });
                    //
                    //     }
                    // });
                }
            }
        }
    ],
    showWithData: function(data) {
        Ext.getCmp('title').setValue(data.data.Title);
        this.show();
    }
});
/*
* var store = Ext.getStore('newsstore');
*  var value = e.record.data;
 store.each(function(record, idx) {
 val = record.get('NewsID');
 if (val == value.NewsID) {
 //Ext.getBody().mask('Loading...');
 record.set('Title', value.Title);
 store.sync({
 success: function() {
 record.commit();
 store.commitChanges();
 //Ext.getBody().unmask();
 },
 failure: function(rec, op) {
 //Ext.getBody().unmask();
 }
 });

 }
 });
* */