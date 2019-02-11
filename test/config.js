var snmp = require ("net-snmp");
// Snmp Constants
const DEST_IP_ADDRESS="192.168.115.16";
// const PORT="161";
const SNMP_COMMUNITY="public";
const SNMP_VERSION=snmp.Version2c;
const SNMP_TIMEOUT=2000000000;

module.exports.destIp=DEST_IP_ADDRESS;
module.exports.community=SNMP_COMMUNITY;

module.exports.options={
  port:161,
  retries: 3,
  timeout: SNMP_TIMEOUT,
  transport: "udp4",
  trapPort: 162,
  version: SNMP_VERSION,
  idBitsSize: 32};




