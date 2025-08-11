export const addToCart = (event, id, stock) => {

  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  console.log(currentProdElem);
  let quantity = currentProdElem.querySelector(".productQuantity");
  let price = currentProdElem.querySelector(".productPrice").innerText;

  console.log(quantity, price);


};
