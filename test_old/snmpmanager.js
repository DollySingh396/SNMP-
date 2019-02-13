const snmp = require("net-snmp");
const snmpConfig = require('./config');

var session = null;

createSnmpSession = () => {
  if (session)
    return session;
  session = snmp.createSession(snmpConfig.destIp, snmpConfig.community, snmpConfig.options);
  console.log("Session Created", session.target);
}

closeSnmpSession = () => {
  if (session)
    session.close();
}

SnmpGetRequest = async (obj) => {
  
  return new Promise(function (resolve, reject) {
    session.get([obj.oid], function (error, varbinds) {
      if (error) {
        console.error("session get error", error.toString());
        reject("Error in input");
      } else {
        if (varbinds[0].type != snmp.ErrorStatus.NoSuchObject &&
          varbinds[0].type != snmp.ErrorStatus.NoSuchInstance &&
          varbinds[0].type != snmp.ErrorStatus.EndOfMibView) {
          var sysName = varbinds[0].value;
          console.log("Response", varbinds[0].value);
          var snmpRes = varbinds[0].value.toString();
          resolve(obj.parser(snmpRes));
        } else {
          console.error(snmp.ObjectType[varbinds[0].type] + ": " +
            varbinds[0].oid + " : " + snmp.ObjectType[varbinds[0]]);
          reject("Error in output");
        }
      }
    });
  });

}


module.exports = {
  createSnmpSession: createSnmpSession,
  closeSnmpSession: closeSnmpSession,
  session: session,
  SnmpGetRequest: SnmpGetRequest
}