import { getCartProductFromLS } from "./getCartProducts"

export const updateCartProductTotal = () => {

    let productSubtotal = document.querySelector("productSubtotal");
    let productFinalTotal = document.querySelector("productFinalTotal");

    let localCartProducts = getCartProductFromLS();
    let total = 0;
    let totalProductPrice = localCartProducts.reduce((accum, curElem) =>
        { 
           let productPrice = parseInt(curElem.prpice);
           return accum + productPrice;
        }, 
        initialValue);

        //console.log(totalProductPrice);

        productSubtotal.textContent = '₹${totalProductPrice}';

        productFinalTotal.textContent = '₹${totalProductPrice + 50}';
}