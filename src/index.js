import "./styles.css";
import { checkEmail } from "./formValidation";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
});
