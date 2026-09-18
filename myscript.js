const colors = ["#b5acee", "#9f5896", "#6c87ff"];
const entryDate = document.querySelector("#entry-1-date");
entryDate.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
const prevBtn = document.querySelector("#entry-1-prev-btn");
const nextBtn = document.querySelector("#entry-1-next-btn");
const navBtns = document.querySelector("#entry-1-nav-btns");
navBtns.style.backgroundColor = entryDate.style.backgroundColor;
