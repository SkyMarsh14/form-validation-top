function checkEmail() {
  const email = document.querySelector("#email");

  const constraints = [
    "^[A-Za-z][^&*%#^\\/]{1,}@[a-z0-9-]{1,}.[a-z]{2,}",
    "Please enter a valid email.",
  ];
  const constraint = new RegExp(constraints[0]);

  if (constraint.test(email.value.toLowerCase())) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity(constraints[1]);
  }
  email.reportValidity();
}

export { checkEmail };
