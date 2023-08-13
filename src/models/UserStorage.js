"use strict";

const fs = require('fs').promises;

class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
            const idx = users.email.indexOf(id);
            const userInfo = Object.keys(users).reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});

            return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/user/users.json")
        .then(data => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static save(body) {
        return { success: true};
    }
}

module.exports = UserStorage;