var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oid_Schema = new Schema({
  currentalarms: {type: String, required: true, max: 100},
    historyalarms: {type: String, required: true},
    getalarms: {type: String, required: true},
    dbcurrentalarms: {type: String, required: true},
    dbhistoryalarms: {type: String, required: true},
    currentalarmsrss: {type: String, required: true},
    historyalarmsrss: {type: String, required: true},
});


//since mongoose pluralise collection
//oid_Schema.set( 'collection','o_id' );

var o_id = mongoose.model('fm',oid_Schema );

module.exports = o_id;