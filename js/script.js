let inpName = document.getElementById("name");
let inpPass = document.getElementById("pass");
let btn = document.getElementById("start-btn");
let container = document.querySelector(".container");

let error = null;

function createError(message) {
    error = document.createElement("div");
    error.classList.add("error");

    let errorText = document.createElement("p");
    errorText.innerHTML = `<i style="color:red;" class="bi bi-exclamation-circle"></i> ${message}!`;

    let errorClose = document.createElement("span");
    errorClose.classList.add("close");
    errorClose.innerHTML = `<i class="bi bi-x-circle"></i>`;

    errorClose.addEventListener("click", () => {
        document.body.removeChild(error);
        error = null;
    });

    let errorTimeer = document.createElement("div");
    errorTimeer.classList.add("timer");


    error.appendChild(errorText);

    error.appendChild(errorClose);
    error.appendChild(errorTimeer);

    document.body.appendChild(error);

    document.body.insertBefore(error, container.nextSibling);

    setTimeout(() => {
        if (error !== null) {
            document.body.removeChild(error);
            error = null;
        }
    }, 5100);
}


// btn.addEventListener("click", (e) => {

//     e.preventDefault();

//     let name = inpName.value;
//     let pass = inpPass.value;


//     if (error === null) {

//         if (name === "" || pass === "") {

//             createError("Please fill in all fields");
//             return;
//         }

//         if (name !== "" && pass !== "") {

//             if (name === "admin" && pass === "admin123") {
//                 window.location.href = "game.html";
//             } else {
//                 createError("Invalid username or password");
//                 return;
//             }

//         }
//     }

// })

function generateToken(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let name = inpName.value;
    let pass = inpPass.value;

    if (error === null) {
        if (name === "" || pass === "") {
            createError("Please fill in all fields");
            return;
        }

        if (name === "admin" && pass === "admin123") {
            const token = generateToken(); // Təsadüfi token
            sessionStorage.setItem("auth", "true");
            sessionStorage.setItem("token", token);
            window.location.replace(`game.html?token=${token}`);
        } else {
            createError("Invalid username or password");
        }
    }
});
