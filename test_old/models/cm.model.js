var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oid_Schema = new Schema({
  nw_configuration: {type: String, required: true, max: 100},
  interfaceinfo:{type: String, required: true},
  wavelength:{type: Number, required: true}

    

});


//since mongoose pluralise collection
//oid_Schema.set( 'collection','o_id' );

var o_id = mongoose.model('cm',oid_Schema );

module.exports = o_id;