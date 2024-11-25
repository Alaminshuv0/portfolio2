// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 120) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Responsive Navigation Menu
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

if (menu && navlist) {
    menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navlist.classList.toggle("active");
    };
}

// Dynamic Skill Circles
const circles = document.querySelectorAll(".circle");

circles.forEach((elem) => {
    const dots = parseInt(elem.getAttribute("data-dots"), 10) || 0;
    const marked = parseInt(elem.getAttribute("data-percent"), 10) || 0;
    const percent = Math.floor((dots * marked) / 100);
    const rotate = 360 / dots;
    let pointsHTML = "";

    for (let i = 0; i < dots; i++) {
        pointsHTML += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = pointsHTML;

    const pointsMarked = elem.querySelectorAll(".points");
    pointsMarked.forEach((point, index) => {
        if (index < percent) {
            point.classList.add("Marked");
        }
    });
});
