var posters=document.querySelectorAll(".posters__item"),container=document.querySelector(".content__menu"),selectedTag="";function onChooseBtn(e){if("BUTTON"===e.target.nodeName){var t=document.querySelector(".menu__active--btn");null==t||t.classList.remove("menu__active--btn");var n=e.target;n.classList.add("menu__active--btn"),selectedTag=n.value,posters.forEach((function(e){var t=e.querySelector(".posters__subtitle").textContent;e.style.display=t!==selectedTag&&"Усі"!==selectedTag?"none":"block"}))}}container.addEventListener("click",onChooseBtn);
//# sourceMappingURL=portfolio.067c4ac1.js.map
