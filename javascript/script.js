//Variables Initilization

let nameYourBurger = document.getElementById("name_your_burger");
let calculate = document.getElementById("calculate_button");
let addIngredients = document.getElementsByClassName("add_ingredient");
let discountCoupon = document.getElementById("discount_coupon");
const validCoupons = ["Aba", "Bcb", "Cdc"];
console.log(calculate);

calculate.addEventListener("click", function(){
    console.log(nameYourBurger.value.length)
    //If the text area is empty:
    if(nameYourBurger.value.length == 0){
        alert("Inserisci il nome del burger")
    } else{
        console.log("Giusto");
    }
});


