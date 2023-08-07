"use strict";

const mailer = require("../../config/mail");

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
};

module.exports = {
    output,
    proccess,
}