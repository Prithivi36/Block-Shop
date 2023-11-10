
import {products,addNewProducts,productCodeInfo,manufacturers,myPurchase, codeInfo} from"./arrays.js";
import {cart,addToCart} from"./cart.js";
import {generateRandomAlphaNumericCode} from"./commonfun.js";


const currentUser=JSON.parse(localStorage.getItem('userLoginName'));


//Readme Alert

document.querySelector('.Readme').addEventListener('click',()=>{

    alert(`This is a Prototype of my project it may not fullfy functional and completely static . Credentials for code generation is \n \nAccount Name :  'Vivo' \n Password: 'Asgard' \n \nIf anything you did wrong since the website is static it saves data locally so click the ERASE button in header to completely reset page`);
});
renderProducts();

//render products 

export function renderProducts(){

    let html=''
            products.forEach((items)=>{
                html=html+`<div class="BORDER-clas bg-black text-light rounded-4">
                <div class="d-flex justify-content-center image bg-light m-3 rounded-4">
                    <img   class="prod-img img-fluid h-100" src="${items.image}" alt="">
                </div>
                <div class="name">
                    <p>${items.ProductName}<p>
                </div>
                <div class="rate">
                    <h3>${items.rate}</h3>
                </div>
                
                <div class="buy mt-2">

                <a class="d-inline-block buyNow" href="fullview-page.html">
                    <button  data-code-id=${items.code} class="btn text-dark fw-medium rounded-5 btn-warning  Purchase-button  d-block my-2 home-page-button">
                        Buy Now
                    </button>
                </a>
                
                </div>
                
            </div>`;
        });
        document.querySelector('.Products-grid').innerHTML=html;

    }
    

      


    
    
const homeButtonAll = document.querySelectorAll(".home-page-button");
const imageAdd=document.querySelector('.image-add');
const nameAdd=document.querySelector('.name-add');
const rateAdd=document.querySelector('.rate-add');
const sInputValue=document.querySelector('.seller-input-code');
const validation=document.querySelector('.validation');
const validationSign=document.querySelector('.sign-valid');
const formClear=document.querySelector('.form-clear');
const addProduct=document.querySelector('.add-product');


//attch code to buy button

homeButtonAll.forEach((homeButton) => {
    homeButton.addEventListener("click", () => {
    const dataCodeId = homeButton.dataset.codeId;
    addToCart(dataCodeId);
    console.log(cart);
    });
});
    


//validation status selling

document.querySelector('.validation-button').addEventListener('click',()=>{
    let valueCode=sInputValue.value;
    let error=false;
    products.forEach((items)=>{
        if(valueCode===items.code){
            error=true;
        }
        });
    if(!error){
        validationSign.innerHTML=`<i class='validation-right bi-check'></i>`;
        validation.innerHTML=`Unique`;
        validation.classList.remove('validation-wrong');
        validation.classList.add('validation-right');
    }
    else{
        sInputValue.value="";
        validationSign.innerHTML=`<i class='validation-wrong bi-x'></i>`
        validation.innerHTML=`Already exsists`;
        validation.classList.add('validation-wrong');
        validation.classList.remove('validation-right');

    }
});

//Add product to home page
    
addProduct.addEventListener('click',()=>{
    setTimeout(safetyAction,1000);
    if(validation.innerHTML==='Unique'){
        const newImage=imageAdd.value;
        const newName=nameAdd.value;
        const newRate=rateAdd.value;
        const newCode=sInputValue.value;
        const newSellerName=currentUser;
        
        products.push({
            image:newImage,
            ProductName:newName,
            rate:newRate,
            code:newCode,
            owner:newSellerName,
        });

        productCodeInfo.forEach((information)=>{
            if(information.code===newCode){
                information.owner=newSellerName;
                codeInfo();

            }
        })

        
        addNewProducts();renderProducts();
    }
});
    

//clear form add inputs

formClear.addEventListener('click',()=>{
    sInputValue.value="";
    validation.innerHTML="";
    imageAdd.value='';
    nameAdd.value='';
    rateAdd.value='';
    location.reload();
});

//DOM

const AccountName=document.querySelector('.Account-verify');
const AccountPassword=document.querySelector('.Account-password-verify');
const AccountValidation=document.querySelector('.Account-validation');
const AccountValidator=document.querySelector('.Account-valid-button');
const AccountClear=document.querySelector('.Account-clear-button');
const generateCode=document.querySelector('.Generate-Code');
const codeSpace=document.querySelector('.Code-display');
const codeErrorpreventor=document.querySelector('.Code-Error-Preventor');
const alertMessage=document.querySelector('.alerting');
const NewProductImage=document.querySelector('.New-Product-Image');
const NewProductName=document.querySelector('.New-Product-name');
const codeList=document.querySelector('.CodeList');


//validation of Account

AccountValidator.addEventListener('click',()=>{
    const aName=AccountName.value;
    const aPassword=AccountPassword.value;
    let validAccountName=false;
    let validAccount=false;

    manufacturers.forEach((accounts)=>{
        if(aName===accounts.accountName){
            validAccountName=true;
            if(aPassword===accounts.password){
                validAccount=true;
            }
        }
        
        if((validAccountName)&&(!validAccount)){
            AccountValidation.innerHTML=`<p class="validation-wrong "><i class='bi-x'></i>Wrong Password</p>`
            AccountPassword.value="";
    
        }if(!validAccountName){
            AccountValidation.innerHTML= `<p class="validation-wrong "><i class='bi-x'></i>wrong-account, sign up feature is under maintenance it will be available soon :)</p>`;
            AccountName.value="";
            AccountPassword.value="";
            
        }
        
    });

    //add all data to base
    
    if(validAccount){
        AccountValidation.innerHTML=  `<p class="validation-right "><i class='bi-check'></i> 'Welcome' :)</p>`;
        AccountName.value=AccountName.value;
        AccountPassword.value=AccountPassword.value;
        generateCode.addEventListener('click',()=>{
            const ImageNew=NewProductImage.value;
            const NameNew=NewProductName.value;
            const codeNew=generateRandomAlphaNumericCode(18);
            productCodeInfo.push({
                code:codeNew,
                image:ImageNew,
                ProductName:NameNew,
                owner:'',
                manufacturer:aName
            });
            
            codeInfo();
            codeSpace.innerHTML=codeNew;
            setTimeout(safetyAction,10000);
            alertMessage.innerHTML=`<p>As this is a sensitive information right now The Page will Refresh in 10 seconds : &#41; copy soon</p>`;
            
            
            
        });

        
    }
    
    
});

//clear button for accounts

AccountClear.addEventListener('click',()=>{
    AccountName.value="";
    AccountPassword.value="";
    AccountValidation.innerHTML="";
    
});

//for some safe reload

function safetyAction(){
    location.reload();
}

//default eventlistener if not account valid

generateCode.addEventListener('click',()=>{
    codeSpace.innerHTML="Fill Login Credentials";
    AccountValidation.innerHTML="";
});

//prevents multiple code generation

codeErrorpreventor.addEventListener('click',()=>{
    location.reload();
});


//generation of code

let codeGenerate="";
myPurchase.forEach((items)=>{
    codeGenerate+=`<p class="purchased-codes">${items}</p>`
})
codeList.innerHTML=codeGenerate;

//clear local storages

document.querySelector('.Reset-Products').addEventListener('click',()=>{
    clearNew();
})

function clearNew(){
    localStorage.clear('localprod');
    localStorage.clear('localinfo');
    localStorage.clear('localpurchase');
    localStorage.clear('userLoginName');
    location.reload();
    window.history.back();}
