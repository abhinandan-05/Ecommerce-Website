import { getCartProductFromLS } from "./getCartProducts";

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  console.log(currentProdElem);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  console.log(quantity)
  let price = currentProdElem.querySelector(".productPrice").innerText;

  console.log(quantity, price);

  // price = price.replace("₹", "");

  // price = price * quantity;
};
