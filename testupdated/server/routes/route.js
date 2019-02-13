const express = require('express');
const router = express.Router();


const c = require('../controllers/oid.controller');
router.get('/oidtest', c.test);
router.post('/oidcreate', c.new_create);
router.get('/oid/:id', c.oid_details);
router.put('/:id/oidupdate', c.oid_update);
router.delete('/:id/oiddelete', c.oid_delete);


const cc = require('../controllers/currentalarms.controller');
router.get('/currentalarmtest', cc.test);
router.post('/currentalarmcreate', cc.currentalarmscreate);
router.get('/ca/:id', cc.currentalarmsdetails);
router.put('/:id/currentalarmupdate', cc.currentalarmsupdate);
router.delete('/:id/currentalarmdelete', cc.currentalarmsdelete);


const h = require('../controllers/historyalarms.controller');
router.get('/historyalarmtest', h.test);
router.post('/historyalarmcreate', h.historyalarmscreate);
router.get('/ha/:id', h.historyalarmsdetails);
router.put('/:id/historyalarmupdate', h.historyalarmsupdate);
router.delete('/:id/historyalarmdelete', h.historyalarmsdelete);


var cmOidMap = require("../controllers/cm.controller");
router.get('/cmtest', cmOidMap.test);
router.post('/cmcreate', cmOidMap.cm_create);
router.get('/:oidString', cmOidMap.cm);
//router.get('/cm/:id', cmOidMap.cm_details);
router.get('/cmfe', cmOidMap.cm_details);
router.put('/:id/cmupdate', cmOidMap.cm_update);
router.delete('/:id/cmdelete', cmOidMap.cm_delete);



var fmOidMap = require("../controllers/fm.controller");
router.get('/fmtest', fmOidMap.test);
router.post('/fmcreate', fmOidMap.fm_create);
router.get('/:oidString', fmOidMap.fm);
router.get('/fm/:id', fmOidMap.fm_details);
router.put('/:id/fmupdate', fmOidMap.fm_update);
router.delete('/:id/fmdelete', fmOidMap.fm_delete);


module.exports = router;