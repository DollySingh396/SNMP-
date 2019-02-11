var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var oid_Schema1 = new Schema({

  
  cardId:{type: Number, required:true},
	alarmId:{type: Number, required:true},
	categoery: {type: String, required:true},
	direction: {type: String, required:true},
	wavelength: {type: Number, required:true},
	severity: {type: Number, required:true},
	occDate: {type: Date, required:true},
	occTime: {type: Number, required:true},
	maskbit: {type: Number, required:true},
	cardKey: {type: Number, required:true}

});


//since mongoose pluralise collection
//oid_Schema.set( 'collection','o_id' );

var o_id1 = mongoose.model('currentalarms',oid_Schema1 );

module.exports = o_id1;