"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index.ejs");
    },

    privacy: (req, res) => {
        res.render('home/privacy.ejs');
    },

    bug: (req, res) => {
        res.render('home/bug.ejs');
    },

    project: (req, res) => {
        res.render('home/project.ejs');
    },

    apocalypse: (req, res) => {
        res.render('home/apocalypse.ejs');
    },


    teleporter: (req, res) => {
        res.render('home/teleporter.ejs');
    },

    status: (req, res) => {
        res.render('home/status.ejs');
    },

    apocalypseResoure: (req, res) => {
        res.download('resoure/home/Apocalypse.zip');
    },
};

module.exports = {
    output,
}