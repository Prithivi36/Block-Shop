import {users} from "./arrays.js";

const loginButton=document.querySelector('.login-button');
const nameInput=document.querySelector('.userInfo');
const PassInput=document.querySelector('.passInfo');
const loginStatus=document.querySelector('.status');


export let userLoginName=JSON.parse(localStorage.getItem('userLoginName'))|| "";

function saveLogin(){
    localStorage.setItem('userLoginName',JSON.stringify(userLoginName));
}

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
            window.location.href ='homepage.html'
            saveLogin();
        }
        if(!userValid){
            loginStatus.innerHTML=`<p class="validation-wrong">Enter  valid user Name</p>`
            entry=true;

        }
    })
    

})