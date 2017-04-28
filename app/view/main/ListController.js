/**
 * Created by mohamad on 4/25/2017.
 */
Ext.define('bazinam.view.main.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.list',

    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    editNews: function (grid, rowIndex, colIndex, item, e, record) {
        // var parent = grid.ownerCt.ownerCt;
        // parent.animate({
        //     duration: 1000,
        //     to: {
        //         opacity: 0
        //     },
        //     listeners: {
        //         afteranimate: function() {
        //              // Execute my custom method after the animation
        //             console.log("remove");
        //             parent.removeAll();
        //             var newPanel=Ext.create('bazinam.view.main.News');
        //             parent.add(newPanel);
        //         }
        //      }
        // });
        var editWindows=Ext.create('bazinam.view.main.News',{myRec:record});
        editWindows.showWithData(record);
        // console.log(rowIndex);
    },
    deleteNews: function (grid, rowIndex, colIndex, item, e, record) {
        console.log(rowIndex);
    },
    editCell:function (theEditor, e, eOpts)
    {
        var grid = Ext.getCmp('mainlist');
        var store = Ext.getStore('newsstore');
        var value = e.record.data;
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
        // store.sync();
        console.log(store);
    }
});