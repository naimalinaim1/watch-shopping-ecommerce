/** products event listener*/
const topProductQuantity = selectElement("top-products").children.length;
for (let i = 1; i <= topProductQuantity; i++) {
  try {
    document
      .getElementById(`top-product-${i}`)
      .addEventListener("click", function (e) {
        e.target.style.background = "violet";
        addToCart(`top-product-price-${i}`);
      });
  } catch (err) {
    console.log(err.message);
  }
}
