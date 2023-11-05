
export let cart=JSON.parse(localStorage.getItem('cart'))||" ";


function saveToCart(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productCode) {

    cart=productCode;
    saveToCart();
  }
