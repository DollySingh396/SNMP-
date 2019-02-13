var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oid_Schema = new Schema({
    name: [{type: String, required: true, max: 100}],
    oid_value: [{type: Number, required: true}]
});


//since mongoose pluralise collection
//oid_Schema.set( 'collection','o_id' );

var o_id = mongoose.model('o_id',oid_Schema );

module.exports = o_id;