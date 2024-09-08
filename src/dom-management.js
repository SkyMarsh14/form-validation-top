
const passwordInput=document.querySelector('#password');
const passwordCheckbox=document.querySelector('.passwordCheckbox');
passwordCheckbox.addEventListener('click',()=>{
    hidePw();
})

function hidePw(){
        passwordInput.type = (passwordInput.type==='password') ? 'text':'password';
};

export {hidePw,passwordCheckbox}