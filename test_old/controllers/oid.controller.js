 var o_id= require('../models/oid.model');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller-Object Id table!');
};

exports.new_create = function (req, res) {
    console.log('HERE',req.body);
    var o = new o_id(
        {   
            name: req.body.name,
            oid_value: req.body.oid_value
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

exports.oid_details = function (req, res) {
    o_id.findById(req.params.id, function (err, o) {
        if (err) 
        return err;
        res.send(o);
    })
};

exports.oid_update = function (req, res) {
    o_id.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, o) {
        if (err) return err;
        res.send('Product udpated.');
    });
};

exports.oid_delete = function (req, res) {
    o_id.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};