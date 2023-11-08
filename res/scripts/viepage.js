import {products,purchaseInfo,productCodeInfo, addNewProducts,myPurchase,codeInfo} from"./arrays.js";
import {cart} from"./cart.js";



let view=" ";
let titleView=" ";

    products.forEach((viewCheck)=>{
        if(cart===viewCheck.code){
            titleView+=`<p class='text-white fw-medium p-2'>${viewCheck.ProductName}</p>`
            view+=`<div class="container">
            <div class="View-grid-head">
                <div class="view-image">
                           <img src=${viewCheck.image} class="img img-fluid w-100">
                </div>
                
                <div class="prod-info d-flex flex-column justify-content-center ms-md-5">
                    <div class="name">
                        <p class="fw-bold">${viewCheck.ProductName}</p>
                    </div>
                    <div class="seller">
                        <p class="fw-bolder text-primary">${viewCheck.owner}</p>
                    </div>
                    <div class="code">
                        <p style="display: inline-block;">${viewCheck.code}</p>
                        <button class="btn btn-sm btn-primary verification" data-bs-toggle="modal" data-bs-target="#Info-Modal">Verify</button>
                    </div>
                    <div class="rate">
                        <h2 class="fw-bold">${viewCheck.rate}</h2>
                    </div>
                    <div class="view-buy">
                        <button class="btn btn-md-lg btn-primary " data-bs-toggle="modal" data-bs-target="#buyDetail">Buy Now</button>
                    </div>
                  </div>
                </div>
            <div class="m-5">
                <p class="m-5">More Features will be available soon</p>
            </div>
        </div>`;
        }

    });


const viewEelement=document.querySelector('.full-view');
viewEelement.innerHTML=view;


const TitleNav=document.querySelector('.Title-Nav');
TitleNav.innerHTML=titleView;



const verification=document.querySelector('.verification');
const FinalBuy=document.querySelector('.FinalBuy');
const InfoImage=document.querySelector('.Info-Img');
const InfoManufactured=document.querySelector('.Info-Manufacturer');
const InfoProduct=document.querySelector('.Info-ProdName');
const InfoOwner=document.querySelector('.Info-Owner');
const BuyerName=document.querySelector('.BuyerName');

let Buyer;




verification.addEventListener('click',()=>{
    productCodeInfo.forEach((codesInfo)=>{
        if(cart===codesInfo.code){
            InfoImage.innerHTML=`<img class="  image-fluid" src="${codesInfo.image}" alt="">`;
            InfoManufactured.innerHTML=codesInfo.manufacturer;
            InfoProduct.innerHTML=codesInfo.ProductName;
            InfoOwner.innerHTML=codesInfo.owner;
        }
    })
});



FinalBuy.addEventListener('click',()=>{
    productCodeInfo.forEach((codesInfo)=>{
        if(cart===codesInfo.code){
            Buyer=BuyerName.value;
            codesInfo.owner=Buyer;
            myPurchase.push(codesInfo.code);
            codeInfo();
            products.forEach((item,index)=>{
                if(item.code===codesInfo.code){

                    products.splice(index,1);
                }
            })
            addNewProducts();
            purchaseInfo();
        }
    })
})
