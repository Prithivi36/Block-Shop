import {products} from"./arrays.js";
import {cart} from"./cart.js";



let view=" ";
let titleView=" ";

    products.forEach((viewCheck)=>{
        if(cart===viewCheck.code){
            titleView+=`<p class='text-white fw-medium p-2'>${viewCheck.name}</p>`
            view+=`<div class="container">
            <h5>Working on this page Available soon</h5>
            <div class="View-grid-head">
                <div class="view-image">
                           <img src=${viewCheck.image} class="img img-fluid w-100">
                </div>
                
                <div class="prod-info d-flex flex-column justify-content-center ms-md-5">
                    <div class="name">
                        <p>${viewCheck.name}</p>
                    </div>
                    <div class="seller">
                        <p>${viewCheck.sellerName}</p>
                    </div>
                    <div class="code">
                        <p style="display: inline-block;">${viewCheck.code}</p>
                        <button class="btn btn-sm btn-primary">Verify</button>
                    </div>
                    <div class="view-buy">
                        <button class="btn btn-md-lg btn-primary">Buy Now</button>
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