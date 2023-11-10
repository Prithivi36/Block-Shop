import {users} from "./arrays.js";

const loginButton=document.querySelector('.login-button');
const nameInput=document.querySelector('.userInfo');
const PassInput=document.querySelector('.passInfo');
const loginStatus=document.querySelector('.status');
const autoEnter=document.querySelector('.auto-enter');


export let userLoginName=JSON.parse(localStorage.getItem('userLoginName'))|| "";

function saveLogin(){
    localStorage.setItem('userLoginName',JSON.stringify(userLoginName));
}
loginButton.innerHTML=`<button class="btn btn-primary d-block w-100" >Sign in</button>`;

loginButton.addEventListener('click',()=>{
    let userValid=false;
    let approved=false;
    userLoginName=nameInput.value;
    const userLoginPassword=PassInput.value;
    users.forEach((user)=>{
        if(userLoginName===user.name){
            userValid=true;
            if(userLoginPassword===user.password){
                approved=true;
            } 
        }
        
        if(userValid&&(!(approved))){
            loginStatus.innerHTML=`<p class="validation-wrong">Wrong Password</p>`
            saveLogin();
        }
        if(approved){
            loginStatus.innerHTML=`<p class="validation-right">Welcome</p>`
            autoEnter.click();
            saveLogin();
        }
        if(!userValid){
            loginStatus.innerHTML=`<p class="validation-wrong">Enter  valid user Name</p>`
            entry=true;

        }
    })
    

})
