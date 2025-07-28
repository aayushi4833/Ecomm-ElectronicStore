import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event , id, stock, price) => {
    const currentCardElement = document.querySelector('#card${id}');
    const productQuantity = document.querySelector("productQuantity")
    const productPrice = currentCardElement.querySelector("productPrice")

    let quantity = 1;
    let localStoragePrice = 0;

    //Get the data from local storage

    let localCartProducts = getCartProductFromLS();
    let existingProduct = localCartProducts.find((curProd) => curProd.id === id);

    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;  
    }
    else{
        localStoragePrice = price;
        price = price;
    }


    if(event.target.className === "cartIncrement"){
        if(quantity<stock){
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
        quantity -= 1   
    }
}

//finally we will update the price in localStorage

localStoragePrice = price * quantity;
localStoragePrice = Number(localStoragePrice.toFixed(2));

let updatedCart= { id, quantity, price, localStoragePrice};

updatedCart = localCartProducts.map((curProd) => {
   return curProd.id === id ? updatedCart : curProd;

})

//console.log(updatedCart)

localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

productQuantity.quantity = quantity;
productPrice.innerText = localStoragePrice;

updateCartProductTotal();

}
