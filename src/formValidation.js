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

function checkZipCode(){
    const constraints={
        us:{regex:/^\d{5}-?(\d{4})?$/,
            errorMessage:"US ZIPs must be either five digits or five digits followed a hyphen(dash) and another four digits. e.g. 12345-123"
        },
        jp:{
            regex:/^\d{3}-?\d{4}$/,
            errorMessage:"JP ZIPs must be seven-digit numbers. e.g. 200-6000"
        },
        ca:{
            regex:/[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/,
            errorMessage:"Canada ZIPs must be six-character string consisiting of three lettes and three digits separated with a space e.g A1B 2C3"
        },
        nl:{regex:/^(NL-)?\d{4}\s*(A-RT-Z][A-Z]|S[BCE-RT-Z])$/,
        errorMessage:"Netherland ZIPs must have exactly 4 digits, followed by 2 letter except SA, SD and SS. e.g. NL-1234 SF"
    }}
    const country=document.querySelector('#countries').value;
    const zipCode=document.querySelector('#zipCode');
    const constraint=new RegExp(constraints[country].regex);
    const test = constraint.test(zipCode.value);
    if(test){
        zipCode.setCustomValidity("");
    }else{
        zipCode.setCustomValidity(constraints[country].errorMessage);
    }

    zipCode.reportValidity();
}
function checkPassword(){
    const constraint= new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])(?=.*[a-z])(?=.*[A-Z]=).{6,}$/);
    const errorMessage="Password must be at least 6 charaters long. It must contain number, lower case alphabet, upper case alphabet and symbol.";

    const password=document.querySelector('#password');
    const test = constraint.test(password.value);

    if(test){
        password.setCustomValidity("");
    }else{
        password.setCustomValidity(errorMessage);
    }
    password.reportValidity();
}

export default function validateForm(){
    checkEmail();
    checkZipCode();
    checkPassword();
}