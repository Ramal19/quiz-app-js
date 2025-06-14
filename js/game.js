
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");
const sessionToken = sessionStorage.getItem("token");
const isAuth = sessionStorage.getItem("auth");

if (isAuth !== "true" || token !== sessionToken) {
    window.location.replace("index.html");
}

// Game initialization


let home = document.getElementById("home-link");
const animationShow = document.querySelector(".animation");
const hedader = document.querySelector("header");
const logo = document.querySelector(".logo");

home.style.cursor = "pointer";
logo.style.cursor = "pointer";

home.addEventListener("click", () => {
    window.location.replace("index.html");
});

setTimeout(() => {
    animationShow.style.display = "none";
    hedader.style.display = "block";
}, 2000);

logo.addEventListener("click", () => {
    window.location.replace("index.html");
});