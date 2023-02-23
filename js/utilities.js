/**
 *
 * @param {* html id} id
 * @returns select element by id and return element
 */
const selectElement = (id) => document.getElementById(id);

/**
 *
 * @param {give html element } element
 * @returns inner text
 */
const elementInnerText = (element) => parseFloat(element.innerText);

/**
 *
 * @param {product html price id} priceId
 */
const addToCart = (priceId) => {
  // get all product and total price
  const productsQuantityEl = selectElement("total-products-quantity");
  const totalPriceEL = selectElement("total-products-price");
  const productsQuantity = elementInnerText(productsQuantityEl);
  const productsCost = elementInnerText(totalPriceEL);
  // get product price
  const getPriceEl = selectElement(priceId);
  const price = elementInnerText(getPriceEl);
  // calculate total cost
  const cost = productsCost + price;
  // set total cost
  totalPriceEL.innerText = cost;
  productsQuantityEl.innerText = productsQuantity + 1;
  console.log(price, cost);
};