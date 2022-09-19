let searchForm = document.getElementsByClassName("search-form");
let searchBtn = document.getElementById("search-btn");

let cartBtn = document.getElementById("cart-btn");
let shoppingCart = document.getElementsByClassName("shopping-cart");

let loginBtn = document.getElementById("login-btn");
let loginForm = document.getElementsByClassName("login-form");

let createAccountBtn = document.getElementById("createAccount");
let signUpForm = document.getElementById("signup");

createAccountBtn.addEventListener("click", () => {
    signUpForm.classList.toggle("active");
    loginForm[0].classList.remove("active");
    shoppingCart[0].classList.remove("active");
    searchForm[0].classList.remove("active");
})

searchBtn.addEventListener("click", () => {
    console.log(searchForm);
    searchForm[0].classList.toggle("active");
    shoppingCart[0].classList.remove("active");
    loginForm[0].classList.remove("active");
    signUpForm.classList.remove("active");

});

cartBtn.addEventListener("click", () => {
    shoppingCart[0].classList.toggle("active");
    searchForm[0].classList.remove("active");
    loginForm[0].classList.remove("active");
    signUpForm.classList.remove("active");
})

loginBtn.addEventListener("click", () => {
    loginForm[0].classList.toggle("active");
    shoppingCart[0].classList.remove("active");
    searchForm[0].classList.remove("active");
    signUpForm.classList.remove("active");
})

//products cards creation-----------------------------------------------
let cardsDiv = document.getElementsByClassName("cards-div");

let cards = [
    {imgsrc: "imgs/product-1.png", name: "Orange", price: 80},
    {imgsrc: "imgs/product-2.png", name: "Onion", price: 100},
    {imgsrc: "imgs/product-3.png", name: "Meat", price: 450}, 
    {imgsrc: "imgs/product-4.png", name: "Cabbage", price: 40},
    {imgsrc: "imgs/product-5.png", name: "Potato", price: 30},
    {imgsrc: "imgs/product-6.png", name: "Avocado", price: 70},
    {imgsrc: "imgs/product-7.png", name: "Carrot", price: 50},
    {imgsrc: "imgs/product-8.png", name: "Green Lemons", price: 80}
];

cards.forEach((card) => {
    let div = document.createElement("div");
    div.className = "card";

    let img = document.createElement("img");
    img.src = card.imgsrc;
    img.alt = card.name +"image";
    div.appendChild(img);

    let heading = document.createElement('h3');
    heading.innerHTML = card.name;
    div.appendChild(heading);

    let price = document.createElement("div");
    price.className = "price";
    price.innerHTML = "Rs."+card.price+"/- per kg";
    div.appendChild(price);

    let starsDiv = document.createElement("div");
    starsDiv.className = "stars";

    let icon;
    for(let i=0; i<4; i++){
        icon = document.createElement("i");
        icon.classList.add("fas","fa-star");
        starsDiv.appendChild(icon);
    }
    icon = document.createElement("i");
    icon.classList.add("fas", "fa-star-half-alt");
    starsDiv.appendChild(icon);
    div.appendChild(starsDiv);

    let btn = document.createElement("a");
    btn.className = "btn";
    btn.innerHTML = "Add to cart";
    div.appendChild(btn); 

    cardsDiv[1].appendChild(div);
})

// for smooth scrolling-----------------------------------------
const links = document.querySelectorAll(".navbar a");

links.forEach((link) => link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    window.scrollTo({
      top: document.querySelector(targetId).offsetTop,
      behavior: "smooth"
    })
}));

//for closing the signUp form
let closeFormBtn = document.getElementById("close");
closeFormBtn.addEventListener("click", () => {
    signUpForm.classList.remove("active");
})

//password reset dialog box
let resetPassBtn = document.getElementById("reserPassword");
resetPassBtn.addEventListener("click", () => {
    alert("Password Reset link has been successfully sent to your registered email");
})