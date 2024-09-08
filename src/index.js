import "./styles.css";
import  validateForm from "./formValidation";
import * as domManagement from "./dom-management";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  console.log("You made it!")
});
