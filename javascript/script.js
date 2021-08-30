//Variables Initilization

let nameYourBurger = document.getElementById("name_your_burger");
let calculate = document.getElementById("calculate_button");
let addIngredients = document.getElementsByClassName("add_ingredient");
let discountCoupon = document.getElementById("discount_coupon");
const validCoupons = ["Aba", "Bcb", "Cdc"];
console.log(calculate);
console.log(nameYourBurger);

calculate.addEventListener("click", function(){
    let price = 50;
    //If the text area is empty:
    if(nameYourBurger.value.length == 0){
        alert("Inserisci il nome del burger")
        price = 0;
    } else{
       
        //Iterating through each element with a specific class using the for loop index
        for(let i = 0; i < addIngredients.length; i++){

            if(addIngredients[i].checked == true) {
                //console.log("Vero");
                price += 4;
            } else if(addIngredients[i].checked == false){
                //console.log("Falso");
            } 
            
        }
        //Comparing the list of coupons
        for(let j = 0; j < validCoupons.length; j++){
            if(discountCoupon.value == validCoupons[j]){
                price = price * 0.8;
            }
        }
    
    }
    console.log("Prezzo: " + price.toFixed(2));
    document.getElementById("your_price").innerHTML = price.toFixed(2);

});


