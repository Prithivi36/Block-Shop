
import {products,purchaseInfo,addNewProducts,manufacturersAcc,myPurchase} from"./arrays.js";
import {cart,addToCart} from"./cart.js";
import {generateRandomAlphaNumericCode} from"./commonfun.js";


document.querySelector('.Readme').addEventListener('click',()=>{

    alert(`This is a Prototype of my project it may not fullfy functional and completely static . Credentials for code generation is \n \nAccount Name :  'Vivo' \n Password: 'Asgard' \n \nIf anything you did wrong since the website is static it saves data locally so click the emoji button in header to completely reset page`);
});
renderProducts();


export function renderProducts(){

    let html=''
            products.forEach((items)=>{
                html=html+`<div class="BORDER-clas bg-dark text-light rounded-4">
                <div class="d-flex justify-content-center image bg-light m-3 rounded-4">
                    <img   class="prod-img w-50" src="${items.image}" alt="">
                </div>
                <div class="name">
                    <p>${items.ProductName}<p>
                </div>
                <div class="rate">
                    <h3>${items.rate}</h3>
                </div>
                <div class="select">

                    <select class="form-select-sm prod-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="buy">

                <a href="fullview-page.html">
                
                <button  data-code-id=${items.code} class="btn rounded-5 btn-primary Purchase-button  d-block my-2 home-page-button">
                    Buy Now
            
                </button>
                </a>
                
                </div>
                
            </div>`;
        });
        document.querySelector('.Products-grid').innerHTML=html;

    }
    

      


    
    
    const homeButtonAll = document.querySelectorAll(".home-page-button");
    
    homeButtonAll.forEach((homeButton) => {
      homeButton.addEventListener("click", () => {
        const dataCodeId = homeButton.dataset.codeId;
        addToCart(dataCodeId);
        console.log(cart);
      });
    });
    

    /* seller */
    const imageAdd=document.querySelector('.image-add');
    const nameAdd=document.querySelector('.name-add');
    const rateAdd=document.querySelector('.rate-add');

    const sellerNameAdd=document.querySelector('.add-seller-name');
    const sInputValue=document.querySelector('.seller-input-code');
    const validation=document.querySelector('.validation');
    const validationSign=document.querySelector('.sign-valid');
    const formClear=document.querySelector('.form-clear');
    const addProduct=document.querySelector('.add-product');

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


    
    addProduct.addEventListener('click',()=>{
        setTimeout(safetyAction,2000);
        console.log(validation.innerHTML);
        if(validation.innerHTML==='Unique'){
            const newImage=imageAdd.value;
            const newName=nameAdd.value;
            const newRate=rateAdd.value;
            const newCode=sInputValue.value;
            const newSellerName=sellerNameAdd.value;
            products.push({
                image:newImage,
                name:newName,
                rate:newRate,
                code:newCode,
                sellerName:newSellerName,
            });addNewProducts();renderProducts();
            console.log(products)
        }
    });
    


    formClear.addEventListener('click',()=>{
        sInputValue.value="";
        validation.innerHTML="";
        sellerNameAdd.value="";
        imageAdd.value='';
        nameAdd.value='';
        rateAdd.value='';
        location.reload();
    });


    
    
    
    
    
    
    
    
    

const AccountName=document.querySelector('.Account-verify');
const AccountPassword=document.querySelector('.Account-password-verify');
const AccountValidation=document.querySelector('.Account-validation');
const AccountValidator=document.querySelector('.Account-valid-button');
const AccountClear=document.querySelector('.Account-clear-button');
const generateCode=document.querySelector('.Generate-Code');
const codeSpace=document.querySelector('.Code-display');
const codeErrorpreventor=document.querySelector('.Code-Error-Preventor');
const alertMessage=document.querySelector('.alerting');

let Accname=" ";
let Accpass=" ";

AccountValidator.addEventListener('click',()=>{
    const aName=AccountName.value;
    const aPassword=AccountPassword.value;
    Accname=(AccountName.value);
    Accpass=(AccountPassword.value);
    let validAccountName=false;
    let validAccount=false;

    manufacturersAcc.forEach((accounts)=>{
        if(aName===accounts.accountName){
            validAccountName=true;
            if(aPassword===accounts.password){
                validAccount=true;
            }
        }
        
        if((validAccountName)&&(!validAccount)){
            AccountValidation.innerHTML=`<p class="validation-wrong "><i class='bi-x'></i>Wrong Password</p>`
            AccountPassword.value="";
    
        }else{
            AccountValidation.innerHTML= `<p class="validation-wrong "><i class='bi-x'></i>wrong-account, sign up feature is under maintenance it will be available soon :)</p>`;
            AccountName.value="";
            AccountPassword.value="";
            
        }
        
    });
    
    
    if(validAccount){
        AccountValidation.innerHTML=  `<p class="validation-right "><i class='bi-check'></i> 'Welcome' :)</p>`;
        AccountName.value=Accname;
        AccountPassword.value=Accpass;
        generateCode.addEventListener('click',()=>{
            codeSpace.innerHTML=generateRandomAlphaNumericCode(18);
            setTimeout(safetyAction,10000);
            alertMessage.innerHTML=`<p>As this is a sensitive information right now The Page will Refresh in 20 seconds : &#41; copy soon</p>`;
            
            
            
        });

        
    }
    
});

function safetyAction(){
    location.reload();
}


generateCode.addEventListener('click',()=>{
    codeSpace.innerHTML="Fill Login Credentials";
    AccountValidation.innerHTML="";
});
codeErrorpreventor.addEventListener('click',()=>{
    location.reload();
});


AccountClear.addEventListener('click',()=>{
    AccountName.value="";
    AccountPassword.value="";
    AccountValidation.innerHTML="";
    
});


const codeList=document.querySelector('.CodeList');

let codeGenerate="";
myPurchase.forEach((items)=>{
    codeGenerate+=`<p class="purchased-codes">${items}</p>`
})
codeList.innerHTML=codeGenerate;















document.querySelector('.Reset-Products').addEventListener('click',()=>{
    clearNew();
})


function clearNew(){
    localStorage.clear('localprod');
    localStorage.clear('localinfo');
    localStorage.clear('localpurchase');
    location.reload();
}


