const productsLen = document.getElementById("special-products").children.length;
for (let i = 1; i <= productsLen; i++) {
  try {
    document
      .getElementById(`special-product-${i}`)
      .addEventListener("click", function (e) {
        e.target.style.background = "blue";
        addToCart(`special-product-price-${i}`);
      });
  } catch (e) {
    console.log(e.message);
  }
}
