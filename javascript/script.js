let calculate = document.getElementById("calculate_button");


calculate.addEventListener("click", function(){
    let nameYourBurger = document.getElementById("name_your_burger");
    let addIngredients = document.getElementsByClassName("add_ingredient");
    let discountCoupon = document.getElementById("discount_coupon");
    const validCoupons = ["Aba", "Bcb", "Cdc"];
    let price = 0;


    //If the text area is empty: let the user know
    if(nameYourBurger.value.length === 0){
        document.getElementById("name_your_burger").classList.add("is-invalid");
        document.getElementById("required_field_name_burger").classList.remove("d-none")
        
        price = 0;
        
    } else{
        document.getElementById("name_your_burger").classList.remove("is-invalid");
        document.getElementById("name_your_burger").classList.add("is-valid");
        document.getElementById("required_field_name_burger").classList.add("d-none");
        console.log(required_field_name_burger);
        
        price = 50;

        //Iterating through each element with a specific class using the for loop index
        for(let i = 0; i < addIngredients.length; i++){

            if(addIngredients[i].checked == true) {
                price += parseInt(addIngredients[i].value);
            } 
        }

        //Comparing the list of coupons
        if(validCoupons.includes(discountCoupon.value)){
            document.getElementById("discount_coupon").classList.add("is-valid");
            document.getElementById("discount_coupon").classList.remove("is-invalid");
            price = price * 0.8;
        } else if(discountCoupon.value === ""){
            document.getElementById("discount_coupon").classList.remove("is-valid");
            document.getElementById("discount_coupon").classList.remove("is-invalid");
        } else{
            document.getElementById("discount_coupon").classList.add("is-invalid");
            document.getElementById("discount_coupon").classList.remove("is-valid");
        } 
        console.log("valore stringa: " + discountCoupon.value);
    }
    console.log("Prezzo: " + price.toFixed(2));
    document.getElementById("your_price").innerHTML = price.toFixed(2) + "&euro;";
});