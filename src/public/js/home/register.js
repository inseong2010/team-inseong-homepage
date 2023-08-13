"use strict";

const lastName = document.querySelector("#lastName"),
    secondName= document.querySelector("#name"),
    email = document.querySelector("#email"),
    passwd = document.querySelector("#passwd"),
    confirmPasswd = document.querySelector("#confirm-passwd"),
    registerBtn = document.querySelector("#btn");

registerBtn.addEventListener("click", register);

function register() {
    if (!lastName.value) return alert("Please enter your last name.");
    if (!secondName.value) return alert("Please enter your secondName.");
    if (!email.value) return alert("Please enter your email.");
    if (!passwd.value) return alert("Please enter your password.");
    if (!confirmPasswd.value) return alert("Please one more enter your password.");
    if (passwd.value !== confirmPasswd.value) return alert("Password does not match.");

    const req = {
        lastName: lastName.value,
        secondName: secondName.value,
        email: email.value,
        passwd: passwd.value
    };

    fetch("/register", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = '/login';
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}