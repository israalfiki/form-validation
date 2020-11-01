const username=document.getElementById('username');
const email=document.getElementById('email');
const firstPassword=document.getElementById('first-password');
const secondPassword=document.getElementById('second-password');
const form =document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let usernameValue=username.value.trim();
    let emailValue=email.value.trim();
    let firstPasswordValue=firstPassword.value.trim();
    let secondPasswordValue=secondPassword.value.trim();

    if(checkUsername(usernameValue)==false){
        console.log('Not Valid')
        displayError(username,'Name must be more than 6 characters');
    }
    else{
        displaySuccess(username);
    };

    if(checkPassword(firstPasswordValue,secondPasswordValue).isValid==false){
        displayError(firstPassword,'Password must be more than 8 characters')

    }
    else{
        displaySuccess(firstPassword);
    }

    if(checkPassword(firstPasswordValue,secondPasswordValue).isMatching==false){
        displayError(secondPassword,'Passwords dont match');
    }
    else{
        displaySuccess(secondPassword);
    }
    let test = checkPassword(firstPasswordValue,secondPasswordValue);
    console.log(test);

    
})

function checkUsername(username){
    let isValid;
    if(username===""||username.length<6){
        isValid=false;
        return isValid;
    }
    else if(username){
        isValid=true;
        return isValid;
    }
}

function checkPassword(password1,password2){
    let isValid;
    if(password1===""||password1.length<8){
        isValid=false;
    }
    else{
        isValid=true;
    }

    if(password2===""||password1!==password2){
        isMatching=false;
    }
    else{
        isMatching=true;
    }
    return {
        isValid:isValid,
        isMatching:isMatching
    };


 }



function displayError(input,message){
    input.classList.add('error');
    const small=input.parentElement.querySelector('small');
    small.innerText= message;

}

function displaySuccess(input){
    const small=input.parentElement.querySelector('small');
    small.style.visibility='hidden';
    input.classList.add('success');


}