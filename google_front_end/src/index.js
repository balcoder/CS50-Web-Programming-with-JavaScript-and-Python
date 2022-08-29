import "./styles/main.scss";
import google from "./assets/google_logo.svg";

const googleImg = document.getElementById("google");
googleImg.src = google;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", () => {
  console.log("Clicked");
  generateJoke();
});

generateJoke();
