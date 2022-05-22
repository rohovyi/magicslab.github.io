window.DARKNESS = {};

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWeb();
flsFunctions.burgerMenu();

import * as nav_Button from "./modules/nav.js";
nav_Button.navButton();

import * as navigation_Page from "./modules/nav_page.js";
navigation_Page.navigationPage();

import * as swipers from "./modules/swiper.js";
swipers.swipers();

for (let i = 0; i < 16; i++) {
    let box = document.querySelector('.__box');
    let card = document.createElement("div");
    let card_text = document.createElement("span");
    
    box.appendChild(card);
    card.appendChild(card_text);
    card_text.innerHTML = 'we make ice cream the way it used to be.';
}