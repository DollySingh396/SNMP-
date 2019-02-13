var fmOidMap = new Map();
var o_id= require('../models/fm.model');
var snmpManager = require("../snmpManager");

fmOidMap.set("fmGetCurrentAlarm", {
    oid: "1.3.6.1.4.1.5380.3.2.5.9.1.1",
    parser: function (resp) {
        console.log("fmGetCurrentAlarm Parser ", resp);
        return {
            "Value": resp
        };
    }
});

fmOidMap.set("fmGetHistoryAlarm", {
       oid:"1.3.6.1.4.1.5380.3.2.5.9.1.2",
   // oid: "1.3.6.1.4.1.5380.3.2.5.8.1.2",
    parser: function (resp) {
        console.log("fmGetHistoryAlarm Parser ",resp)
    return {
        "Value":resp
    };
    }
});

fmOidMap.set("fmGetAlarm", {
    oid:"1.3.6.1.4.1.5380.3.2.5.8.1",
   // oid: "1.3.6.1.4.1.5380.3.2.5.8.1.4",
    parser: function (resp) {
        console.log("fmGetAlarm Parser ",resp)
        return {
            "value":resp
        };
    }
});

fmOidMap.set("fmGetDBcurrentAlarm", {
    oid:  "1.3.6.1.4.1.5380.3.2.5.8.1.5",
    parser: function (resp) {
        console.log("fmGetDBcurrentAlarm Parser",resp)
        return{
            "value":resp
        };
    }
});

fmOidMap.set("fmgetDBHistoryAlaram", {
    oid: "1.3.6.1.4.1.5380.3.2.5.8.1.6",
    parser: function (resp) {
        console.log("fmgetDBHistoryAlaram Parser",resp)
        return {
            "value":resp
        };
    }
});

fmOidMap.set("fmgetcurrentAlaramRSS", {
    oid: "1.3.6.1.4.1.5380.3.2.5.8.1.7",
    parser: function (resp) {
        console.log("fmgetcurrentAlaramRSS Parser",resp)
        return {
            "value":resp
        };
    }
});

fmOidMap.set("fmgetHistoryAlaramRSS", {
    oid: "1.3.6.1.4.1.5380.3.2.5.8.1.8",
    parser: function (resp) {
        console.log("fmgetHistoryAlaramRSS Parser",resp)
        return {
            "value":resp
        };
    }
});



exports.test = function (req, res) {
    res.send('Greetings from the Test controller- FM table!');
};


exports.fm_create = function (req, res) {
    console.log('HERE',req.body);
    var o = new o_id(
        {   
            currentalarms: req.body.currentalarms,
            historyalarms: req.body.historyalarms,
            getalarms: req.body.getalarms,
            dbcurrentalarms: req.body.dbcurrentalarms,
            dbhistoryalarms: req.body.dbhistoryalarms,
            currentalarmsrss: req.body.currentalarmsrss,
            historyalarmsrss: req.body.historyalarmsrss
            
        }
  
    );

    o.save(function (err) {
        if (err) {
            console.log(err);
            return err;
        }
        res.send('Object ID Created successfully - FM table');
    });
};

exports.fm = function (req, res, next) {
    console.log(fmOidMap.get(req.params.oidString));
  
    snmpManager.SnmpGetRequest(fmOidMap.get(req.params.oidString))
      .then(function (data) {
        // console.log("Promise Resolved", data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
        res.end();
      }).catch(function (err) {
        console.log(err);
      });
  
    
  };


exports.fm_details = function (req, res) {
    o_id.findById(req.params.id, function (err, o) {
        if (err) 
        return err;
        res.send(o);
    })
};

exports.fm_update = function (req, res) {
    o_id.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, o) {
        if (err) return err;
        res.send('Table udpated.');
    });
};


exports.fm_delete = function (req, res) {
    o_id.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};

//module.exports = fmOidMap;

