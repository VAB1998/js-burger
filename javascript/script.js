//Variables Initilization
//!!!!!!!!!! SE una variabile ci serve solo su una funzione BISOGNA inserirla SOLO all'interno della funzione
let nameYourBurger = document.getElementById("name_your_burger");
let calculate = document.getElementById("calculate_button");
let addIngredients = document.getElementsByClassName("add_ingredient");
let discountCoupon = document.getElementById("discount_coupon");
const validCoupons = ["Aba", "Bcb", "Cdc"];
console.log(calculate);
console.log(nameYourBurger);
let price = 0;
calculate.addEventListener("click", function(){
     
    //If the text area is empty:
    if(nameYourBurger.value.length === 0){
        alert("Inserisci il nome del burger");
        price = 0;
    } else{
        price = 50;

        //Iterating through each element with a specific class using the for loop index
        for(let i = 0; i < addIngredients.length; i++){

            if(addIngredients[i].checked == true) {
                price += parseInt(addIngredients[i].value);
            } 
        }

        //Comparing the list of coupons
        if(validCoupons.includes(discountCoupon.value)){
            price = price * 0.8;
        }
    }
    console.log("Prezzo: " + price.toFixed(2));
    document.getElementById("your_price").innerHTML = price.toFixed(2) + "&euro;";
});