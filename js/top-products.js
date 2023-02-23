/** products event listener*/
const topProductQuantity = selectElement("top-products").children.length;
for (let i = 0; i <= topProductQuantity; i++) {
  try {
    document
      .getElementById(`top-product-${i}`)
      .addEventListener("click", function () {
        addToCart(`top-product-price-${i}`);
      });
  } catch (err) {
    console.log(err.message);
  }
}
