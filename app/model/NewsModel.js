/**
 * Created by mohamad on 4/24/2017.
 */
Ext.define('bazinam.model.News', {
    extend: 'Ext.data.Model',
    idProperty:'NewsID',
    fields:[
        { name: 'NewsID', type: 'int', convert: null },
        { name: 'Title', type: 'string' },
        { name: 'Content', type: 'string' },
        { name: 'ReleaseDate', type: 'string' }
    ]
});
