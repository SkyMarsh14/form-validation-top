import "./styles.css";
import  validateForm from "./formValidation";
import hidePw from "./dom-management"

hidePw();
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  console.log("You made it!")
});
