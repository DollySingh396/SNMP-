var o_id1= require('../models/currentalarms.model');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!-current alarms table');
};

exports.currentalarmscreate = function (req, res) {
    console.log('HERE',req.body);
    var o = new o_id1(
        {   
           cardId:req.body.cardId,
           alarmId:req.body.alarmId,
           categoery: req.body.categoery,
           direction: req.body.direction,
           wavelength: req.body.wavelength,
           severity:req.body.severity,
           occDate: req.body.occDate,
           occTime: req.body. occTime,
           maskbit: req.body.maskbit,
           cardKey: req.body.cardKey
        }
    );

    o.save(function (err) {
        if (err) {
            console.log(err);
            return err;
        }
        res.send('Object ID of current alarms table is Created successfully ');
    });
};

exports.currentalarmsdetails = function (req, res) {
    o_id1.findById(req.params.id, function (err, o) {
        if (err) 
        return err;
        res.send(o);
    })
};

exports.currentalarmsupdate = function (req, res) {
    o_id1.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, o) {
        if (err) return err;
        res.send('Product udpated.');
    });
};

exports.currentalarmsdelete = function (req, res) {
    o_id1.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};