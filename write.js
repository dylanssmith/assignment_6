//This is my empty array
var dataArray = [];

$(document).ready(function(){
    
    //Bun object constructor
    function Bun(quantity, glaze, type){
        this.quantity = quantity,
        this.glaze = glaze,
        this.type = type
    }
    
    //pull data from local storage
    function loadDataArray(){
        dataArray = JSON.parse(localStorage.getItem("dataArray"));
        console.log(dataArray);
    }
    loadDataArray();
    
    //add object instance of bun to the array
    $("#addcartbtn").click(function(){
        addToDataArray();
        numItemsInCart();
        });
    
    //adding bun object instance to array and local storage
    function addToDataArray(){
        //variables for quantity, glaze, and type
        var checkQuantity = $('input[name=quantity]:checked').val();
        var checkGlaze = $('input[name=glazing]:checked').val();
        var checkType = $('.typeBun').text();
        
        //new instance of Bun with quantity, glaze, and type variables
        var everyBun = new Bun(checkQuantity, checkGlaze, checkType);
        
        //add instance to dataArray
        dataArray.push(everyBun);
        
        //add dataArray to local storage
        localStorage.setItem("dataArray", JSON.stringify(dataArray));  
    }
    
    //change image in regards to specific glaze button
    $("input[name=glazing]").click(function(){
        var checkGlaze = $('input[name=glazing]:checked').val();
        $('.bun').attr('id', checkGlaze);
        
        });
    
    //displays number of items in dataArray to shopping cart html element 
    function numItemsInCart() {
        var shoppingCart = 0;
    
        for (i=0; i < dataArray.length; i++) {
            shoppingCart = i+1; 
        }
        $("#cartNum").html(shoppingCart);
    }
    numItemsInCart();
    
    //adds selected items to shopping cart page
    function addToShoppingCart() {
        for (i in dataArray) {
            $(".wrapper").append('<div class="shop3"></div>');
            $(".shop3").html(quantity, glaze, type, image);          
        }
    }
    addToShoppingCart();
    
    //removes selected items from shopping cart page
    function removeFromShoppingCart() {
        for (i in dataArray) {
            if (button within .wrapper is clicked) {
                $(".wrapper").remove();
            }
        }
    }
    removeFromShoppingCart();
});


