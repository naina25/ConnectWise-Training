let searchForm = document.getElementsByClassName("search-form");
let searchBtn = document.getElementById("search-btn");

let cartBtn = document.getElementById("cart-btn");
let shoppingCart = document.getElementsByClassName("shopping-cart");

searchBtn.addEventListener("click", () => {
    console.log(searchForm);
    searchForm[0].classList.toggle("active");
});

cartBtn.addEventListener("click", () => {
    shoppingCart[0].classList.toggle("showCart");
})
