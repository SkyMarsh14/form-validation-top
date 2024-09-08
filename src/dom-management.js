
const passwordInput=document.querySelector('#password');
const passwordCheckbox=document.querySelector('.passwordCheckbox');

export default function hidePw(){
    passwordCheckbox.addEventListener('click',()=>{
        passwordInput.type = (passwordInput.type==='password') ? 'text':'password';
    })
};
