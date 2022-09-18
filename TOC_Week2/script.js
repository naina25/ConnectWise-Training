let searchForm = document.getElementsByClassName("search-form");
let searchBtn = document.getElementById("search-btn");

let cartBtn = document.getElementById("cart-btn");
let shoppingCart = document.getElementsByClassName("shopping-cart");

let loginBtn = document.getElementById("login-btn");
let loginForm = document.getElementsByClassName("login-form");

searchBtn.addEventListener("click", () => {
    console.log(searchForm);
    searchForm[0].classList.toggle("active");
    shoppingCart[0].classList.remove("active");
    loginForm[0].classList.remove("active");
});

cartBtn.addEventListener("click", () => {
    shoppingCart[0].classList.toggle("active");
    searchForm[0].classList.remove("active");
    loginForm[0].classList.remove("active");
})

loginBtn.addEventListener("click", () => {
    loginForm[0].classList.toggle("active");
    shoppingCart[0].classList.remove("active");
    searchForm[0].classList.remove("active");
})