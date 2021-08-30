//Variables Initilization

let nameYourBurger = document.getElementById("name_your_burger");
let calculate = document.getElementById("calculate_button");
let addIngredients = document.getElementsByClassName("add_ingredient");
let discountCoupon = document.getElementById("discount_coupon");
const validCoupons = ["Aba", "Bcb", "Cdc"];
console.log(calculate);

calculate.addEventListener("click", function(){
    let price = 50;
    console.log(nameYourBurger.value.length)
    //If the text area is empty:
    if(nameYourBurger.value.length == 0){
        alert("Inserisci il nome del burger")
    } else{
        console.log("Giusto");
    }

    //Iterating through each element with a specific class using the for loop index
    for(let i = 0; i < addIngredients.length; i++){

        if(addIngredients[i].checked == true) {
            //console.log("Vero");
            price += 4;
        } else if(addIngredients[i].checked == false){
            //console.log("Falso");
        } 
        
    }
    console.log("Prezzo: " + price.toFixed(2));
});


