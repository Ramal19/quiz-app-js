
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");
const sessionToken = sessionStorage.getItem("token");
const isAuth = sessionStorage.getItem("auth");

if (isAuth !== "true" || token !== sessionToken) {
    window.location.replace("index.html");
}

// Game initialization


const home = document.getElementById("home-link");
const animationShow = document.querySelector(".animation");
const hedader = document.querySelector("header");
const logo = document.querySelector(".logo");
const addBox = document.querySelector(".add-box");
const overlay = document.querySelector(".overlay");
let section = document.querySelector("section");
let quizAdd = null;
let quizTitle = null;
let quizBox = null;
let count = 1;

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

addBox.addEventListener('click', () => {

    document.body.style.overflow = "hidden";

    if (quizAdd === null) {

        overlay.style.display = "block";

        quizAdd = document.createElement("div");
        quizAdd.className = "quiz-add";

        let quizForm = document.createElement("div");
        quizForm.className = "quiz-form";
        quizForm.innerHTML = `
            <h2>Add a new quiz</h2>
            <i class="bi bi-x-circle close-quiz-add"></i>
            <form id="quiz-form">
                <div class="quiz-title">
                    <label for="quiz-title-inp">Quiz Title:</label>
                    <input type="text" value="salam" id="quiz-title-inp" placeholder="Quiz Title" >
                </div>

                <div class="quiz-description">
                    <h4>Quiz Description:</h4>
                    
                    <div class="quiz-question-item">
                        <div class="quiz-description-questions">
                        <label for="quiz-descrption-inp">Question ${count}:</label>
                        <input type="text" id="quiz-descrption-inp" placeholder="Question ${count}" >
                        </div>

                        <div class="quiz-description-answers">
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div>
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div>
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div> 
                        </div>
                    </div>

                    <div class="quiz-question-item">
                        <div class="quiz-description-questions">
                        <label for="quiz-descrption-inp">Question ${count + 1}:</label>
                        <input type="text" id="quiz-descrption-inp" placeholder="Question ${count + 1}" >
                        </div>

                        <div class="quiz-description-answers">
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div>
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div>
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div> 
                        </div>
                    </div>


                    <div class="quiz-question-item">
                        <div class="quiz-description-questions">
                        <label for="quiz-descrption-inp">Question ${count + 2}:</label>
                        <input type="text" id="quiz-descrption-inp" placeholder="Question ${count + 2}" >
                        </div>

                        <div class="quiz-description-answers">
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div>
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div>
                            <div class="quiz-description-answers-item">
                                <input type="radio" id="quiz-answer-correct" name="quiz-answer-correct">
                                <input type="text" id="quiz-answer-inp" placeholder="Answer" >
                            </div> 
                        </div>
                    </div>

                    <button type="button" id="add-btn">Add</button>
                </div>

                <button type="button" id="submit-btn">Submit</button>
            </form>
        `;

        let closeQuizAdd = quizForm.querySelector(".close-quiz-add");
        closeQuizAdd.addEventListener("click", () => {
            overlay.style.display = "none";
            document.body.style.overflow = "auto";

            if (quizAdd && quizAdd.parentNode === document.body) {
                document.body.removeChild(quizAdd);
            }

            quizAdd = null;
        });

        quizAdd.appendChild(quizForm);
        document.body.appendChild(quizAdd);

        if (quizAdd !== null) {

            overlay.addEventListener("click", () => {
                overlay.style.display = "none";
                document.body.style.overflow = "auto";

                if (quizAdd && quizAdd.parentNode === document.body) {
                    document.body.removeChild(quizAdd);
                }

                quizAdd = null;
            });

        }

        const inpRadio = document.getElementById("quiz-answer-correct");

        quizForm.addEventListener("click", (e) => {
            if (e.target !== inpRadio && inpRadio.checked) {
                inpRadio.checked = false;
            }
        });

        quizTitle = document.getElementById("quiz-title-inp").value;
        const btnSubmit = document.getElementById("submit-btn");

        btnSubmit.addEventListener("click", () => {

            overlay.style.display = "none";
            document.body.style.overflow = "auto";

            if (quizAdd && quizAdd.parentNode === document.body) {
                document.body.removeChild(quizAdd);
            }

            quizAdd = null;

            if (quizBox === null) {

                quizBox = document.createElement("div");

                quizBox.innerHTML = `
                    <div class="create-quiz">
                         <div class="add-box">
                            <i class="bi bi-plus"></i>
                        </div>
                        <h2>${quizTitle}</h2>
                        <button>
                            <i class="bi bi-arrow-down-right"></i>
                            <span>Start</span>
                        </button>
                    </div>`;

                section.appendChild(quizBox);

                section.insertBefore(quizBox, section.firstChild);

            }

        })
    }


})


