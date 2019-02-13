var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oid_Schema2 = new Schema({

  cardId:{type: Number, required:true},
	alarmId:{type: Number, required:true},
	categoery: {type: String, required:true},
	direction: {type: String, required:true},
	wavelength: {type: Number, required:true},
	severity: {type: Number, required:true},
	occDate: {type: Date, required:true},
	occTime: {type: Number, required:true},
	clrDate:{type: Date, required:true}, 
	clrTime:{type: String, required:true}, 
	cardKey: {type: Number, required:true}

});


//since mongoose pluralise collection
//oid_Schema.set( 'collection','o_id' );

var o_id2 = mongoose.model('historyalarms',oid_Schema2 );

module.exports = o_id2;