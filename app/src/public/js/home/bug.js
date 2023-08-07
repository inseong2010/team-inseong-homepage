"use strict";

const email = document.querySelector("#email"),
    desc = document.querySelector("#desc"),
    submitBtn = document.querySelector("#btn");

    submitBtn.addEventListener("click", submit);

function submit() {
    if (!email.value) return alert("이메일를 입력해주세요");
    if (!desc.value) return alert("내용을 입력해주세요");
     
    const req = {
        email: email.value,
        desc: desc.value
    };

    fetch("/bug", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}