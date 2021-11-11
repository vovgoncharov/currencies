"use strict";
let cards = document.querySelectorAll(".card");
const getCardActive = () => {
    cards.forEach((data) => {
        data.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("active");
        });
    });
};

getCardActive();
