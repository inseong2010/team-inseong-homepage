"use strict";

const email = document.querySelector("#email"),
    passwd = document.querySelector("#passwd"),
    loginBtn = document.querySelector("#btn");

loginBtn.addEventListener("click", login);

function login() {
    if (!email.value) return alert("Please enter your email.");
    if (!passwd.value) return alert("Please enter your password.");
     
    const req = {
        email: email.value,
        passwd: passwd.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) =>{
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
}