"use strict";

const mailer = require("../../config/mail");
const User = require("../../models/User");

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    privacy: (req, res) => {
        res.render('home/privacy');
    },
    bug: (req, res) => {
        res.render('home/bug');
    },
    project: (req, res) => {
        res.render('home/project');
    },
    apocalypse: (req, res) => {
        res.render('home/apocalypse');
    },
    teleporter: (req, res) => {
        res.render('home/teleporter');
    },
    status: (req, res) => {
        res.render('home/status');
    },
    apocalypseResoure: (req, res) => {
        res.download('resoure/home/Apocalypse.zip');
    },
    login: (req, res) => {
        res.render('home/login');
    },
    forgetPasswd: (req, res) => {

    },
    register: (req, res) => {
        res.render('home/register');
    },
};

const proccess = {
    bug: (req, res) => {
        const email = req.body.email,
            desc = req.body.desc;

        let emailParam = {
            toEmail: email,
            desc: desc               // 메일 내용
        };

        mailer.sendGmail(emailParam);

        res.status(200).send("성공");
    },
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    forgetPasswd: (req, res) => {

    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    proccess,
}