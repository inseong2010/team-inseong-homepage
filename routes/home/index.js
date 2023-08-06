"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get('/', ctrl.output.hello);
router.get('/privacy', ctrl.output.privacy);
router.get('/bug', ctrl.output.bug);
router.get('/project', ctrl.output.project);
router.get('/apocalypse', ctrl.output.apocalypse);
router.get('/teleporter', ctrl.output.teleporter);
router.get('/status', ctrl.output.status);
router.get('/resoure/apocalypse', ctrl.output.apocalypseResoure);

module.exports = router;