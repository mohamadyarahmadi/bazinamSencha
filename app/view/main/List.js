/**
 * This view is an example list of people.
 */
Ext.define('bazinam.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'list',
    requires: [
        'bazinam.store.News',
        'bazinam.model.GlobalPersianVar',
        'bazinam.view.main.ListController'
    ],

    title: 'News',

    store: {
        type: 'newsstore'
    },
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            listeners: {
                beforeEdit: function (e, eOpts)
                {
                    console.log('beforeEdit');
                },
                edit: 'editCell',
                validateedit: function (editor, e)
                {
                    console.log('validateedit');
                }
            }
        })
    ],

    columns: [
        {
            text: 'Id',
            dataIndex: 'NewsID',
            hidden: true
        },
        {
            text: bazinam.model.GlobalPersianVar.news_onvan,
            dataIndex: 'Title',
            filter:'string',
            editor: {
                allowBlank: false,
                type: 'string'
            }
        },
        {
            text: bazinam.model.GlobalPersianVar.news_Content,
            dataIndex: 'Content'
        },
        {
            text: bazinam.model.GlobalPersianVar.news_ReleaseDate,
            dataIndex: 'ReleaseDate',
            width:200
        },
        {
            xtype : 'actioncolumn',
            header : 'ویرایش خبر',
            text: 'ویرایش خبر',
            width : 100,
            align : 'center',
            items :
            [
                {
                    glyph: 'f044@FontAwesome',
                    /*iconCls : 'fa fa-pencil-square-o',*/
                    tooltip : 'ویرایش',
                    handler :'editNews'
                }
            ]
        },
        {
            xtype : 'actioncolumn',
            header : 'حذف خبر',
            width : 100,
            align : 'center',
            items :
                [
                    {
                        glyph: 'f00d@FontAwesome',
                        /*iconCls : 'fa fa-pencil-square-o',*/
                        tooltip : 'حذف',
                        handler : 'deleteNews'
                    }
                ]
        }
    ],

    listeners: {
        //select: 'onItemSelected'
    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'newsstore',
        dock: 'bottom',
        displayInfo: true
    }]

});
