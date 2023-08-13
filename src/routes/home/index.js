"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//get
router.get('/', ctrl.output.hello);
router.get('/privacy', ctrl.output.privacy);
router.get('/bug', ctrl.output.bug);
router.get('/project', ctrl.output.project);
router.get('/project/apocalypse', ctrl.output.apocalypse);
router.get('/project/teleporter', ctrl.output.teleporter);
router.get('/project/status', ctrl.output.status);
router.get('/resoure/apocalypse', ctrl.output.apocalypseResoure);
router.get('/login', ctrl.output.login);
router.get('/forget/password', ctrl.output.forgetPasswd);
router.get('/register', ctrl.output.register);

//post
router.post('/bug', ctrl.proccess.bug);
router.post('/login', ctrl.proccess.login);
router.post('/forget/password', ctrl.output.forgetPasswd);
router.post('/register', ctrl.output.register);


module.exports = router;