"use strict";

const mailer = require("../../config/mail");
const fs = require("fs");

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
    test: (req, res) => {
        fs.readFile(`./src/config/application.properties`, 'utf8', function(err, description) {
            if (err) throw err;
            const html = `
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Apocalypse</title>
                <link rel="stylesheet" href="/css/home/html.css">
                <link rel="stylesheet" href="/css/home/project.css">
            </head>
            <body>
                <h1>${description}</h1>
            </body>
            </html>`;
            res.send(html);
        });
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