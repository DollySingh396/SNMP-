var o_id2= require('../models/historyalarms.model');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!-history alarms table');
};

exports.historyalarmscreate = function (req, res) {
    console.log('HERE',req.body);
    var o = new o_id2(
        {   
           cardId: req.body.cardId,
          alarmId:req.body.alarmId,
          categoery: req.body.categoery,
           direction: req.body.direction,
           wavelength: req.body.wavelength,
           severity:req.body.severity,
           occDate: req.body.occDate,
           occTime: req.body. occTime,
           clrDate:req.body.clrDate, 
	       clrTime: req.body.clrTime,
           cardKey: req.body.cardKey
        }
    );

    o.save(function (err) {
        if (err) {
            console.log(err);
            return err;
        }
        res.send('Object ID Created successfully');
    });
};

exports.historyalarmsdetails = function (req, res) {
    o_id2.findById(req.params.id, function (err, o) {
        if (err) 
        return err;
        res.send(o);
    })
};

exports.historyalarmsupdate = function (req, res) {
    o_id2.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, o) {
        if (err) return err;
        res.send('Product udpated.');
    });
};

exports.historyalarmsdelete = function (req, res) {
    o_id2.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};