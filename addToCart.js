import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event,id,stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector('#card${id}');
    console.log(currentProdElem)
    let quantity = currentProdElem.querySelector("productQuantity").innertext;
    let price = currentProdElem.querySelector("productPrice").innertext;
//console.log(quantity.price)

price = price.replace("₹", "");

let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

console.log(existingProd)

if(existingProd && quantity > 1){
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity)
    let updatedCart = {id,quantity,price}

    updatedCart = arrLocalStorageProduct.map((curProd)=>{
       return curProd.id === id ? updatedCart : curProd
    })
    
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))
    //show toast when product added to the cart
    showToast("add", id);
}

if(existingProd){
    alert("It's duplicate")
    return false;
}

price = Number(price * quantity);
quantity = Number(quantity)

arrLocalStorageProduct.push({id,quantity,price});
localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))
//show toast when product added to the cart

showToast("add", id);

//update the cart button value

updateCartValue(arrLocalStorageProduct);

//show toast when product added to the cart

showToast("add", id);

};

