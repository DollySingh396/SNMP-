var cmOidMap = new Map();
var o_id = require('../models/cm.model');
var snmpManager = require("../snmpManager");

cmOidMap.set("cmNetworkElementHWConfiguration", {
    oid: "1.3.6.1.4.1.5380.3.2.5.2.1.1",
    parser: function (resp) {
        console.log("cmNetworkElementHWConfiguration Parser ", resp);
        return {
            "Value": resp
        };
    }
});

cmOidMap.set("cmOtnInterfaceInfo", {
    oid: "1.3.6.1.4.1.5380.3.2.5.2.1.2",
    parser: function (resp) {
        console.log("cmOtnInterfaceInfo Parser ", resp)
        return {
            "Value": resp
        };
    }
});

cmOidMap.set("cmWaveLength", {
    oid: "1.3.6.1.4.1.5380.3.2.5.2.1.13",
    parser: function (resp) {
        console.log("cmWaveLength Parser ", resp)
        return {
            "value": resp
        };
    }
});


exports.test = function (req, res) {
    console.log("route is called from react");
    res.send('Greetings from the Test controller- CM table!');
    
};


exports.cm_create = function (req, res) {
    console.log('HERE', req.body);


    var o = new o_id(
        {
            nw_configuration: req.body.nw_configuration,
            interfaceinfo: req.body.interfaceinfo,
            wavelength: req.body.wavelength
        }
    );

    o.save(function (err) {
        if (err) {
            console.log(err);
            return err;
        }
       // res.send('Object ID Created successfully - CM table');
    });
};



exports.cm = function (req, res, next) {
   // req.params.oidString='1.3.6.1.4.1.5380.3.2.5.2.1.13';
    console.log('inside cm function get', req.params, " and ", req.params.oidString)
   // console.log("HERERE===> ",cmOidMap.get(req.params.oidString));
    
    snmpManager.SnmpGetRequest(cmOidMap.get(req.params.oidString))
        .then(function (data) {
            // console.log("Promise Resolved", data);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
            res.end();
        }).catch(function (err) {
            console.log(err);
        });
};

//console.log("*****");

exports.cm_details = function (req, res) {
    o_id.findOne(req, function (err, o) {
        if (err)
            return err;
            console.log("*****");  
        res.send("u have reaceived this data: ",o);
    })
};

exports.cm_update = function (req, res) {
    o_id.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, o) {
        if (err) return err;
        res.send('Table udpated.');
    });
};

exports.cm_delete = function (req, res) {
    o_id.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};


//module.exports = cmOidMap;

