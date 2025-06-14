;
const menu = document.querySelector(".menu");
const header = document.querySelector("header")
let ul = document.querySelector("ul");
let overlay = document.querySelector(".overlay");
let quit = null;

function showList(choose1, choose2, choose3) {
    menu.style.display = `${choose1}`;
    header.style.display = `${choose2}`;
    overlay.style.display = `${choose3}`;
}

menu.addEventListener('click', () => {

    showList("none", "block", "block");

    if (quit === null) {

        quit = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = "Quit";

        quit.appendChild(a);
        ul.appendChild(quit);
        quit.style.cursor = "pointer";

        quit.addEventListener("click", () => {
            showList("block", "none", "none");
            if (quit !== null) {
                ul.removeChild(quit);
                quit = null;
            }
        });

        overlay.addEventListener("click", () => {
            showList("block", "none", "none");
            if (quit !== null) {
                ul.removeChild(quit);
                quit = null;
            }
        });
    }
})