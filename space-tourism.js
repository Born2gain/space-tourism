"use strict";
let nav = document.getElementById("nav");

function open_btn() {
    nav.style.transform = "translateX(0%)";
}

function close_btn() {
    nav.style.transform = "translateX(100%)";
}

/* destination sub_nav */

let slideIndex = 1,
    i,
    destination_content = document.getElementsByClassName("destination_content"),
    tech_content = document.getElementsByClassName("tech_content");
showSlides(slideIndex);
showTechSlides(slideIndex);

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    if (n > destination_content.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = destination_content.length;
    }
    for (let slide of destination_content) {
        slide.style.display = "none";
    }
    destination_content[slideIndex - 1].style.display = "flex";
}

/* tech slide show */

function presentSlide(n) {
    showTechSlides((slideIndex = n));
}

function showTechSlides(n) {
    if (n > tech_content.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = tech_content.length;
    }
    for (let slide of tech_content) {
        slide.style.display = "none";
    }
    tech_content[slideIndex - 1].style.display = "block";
}