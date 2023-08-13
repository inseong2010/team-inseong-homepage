"use strict";


const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { email, passwd } = UserStorage.getUserInfo(body.email);

        if (email) {
            if (email === body.email && passwd === body.passwd) {
                return { success: true};
            }
            return { success: false, msg: "ID or password is incorrect." };
        }
        return { success: false, msg: "ID does not exist." };
    }
}

module.exports = User;