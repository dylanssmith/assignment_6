//This is my empty array
var dataArray = [];

$(document).ready(function(){
    
    //Bun object constructor
    function Bun(quantity, glaze, type){
        this.quantity = quantity,
        this.glaze = glaze,
        this.type = type
        this.uid = 'roll_' + Math.floor(Math.random() * 10e6);
    }
    
    //pull data from local storage
    function loadDataArray(){
        var storage = localStorage.getItem("dataArray");
        if (storage) {
            dataArray = JSON.parse(storage);
        } else {
            dataArray = [];
        }
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
        if (dataArray && dataArray.length > 0) {
            shoppingCart = dataArray.length;
        }
        /*for (i=0; i < dataArray.length; i++) {
            shoppingCart = i+1; 
        }*/
        $("#cartNum").html(shoppingCart);
    }
    numItemsInCart();
    
    //adds selected items to shopping cart page
    function addToShoppingCart() {
        if (dataArray && dataArray.length > 0) {
            for (i=0; i < dataArray.length; i++) {
            $(".wrapper").append('<div class="shop3" id='+i+' roll-uid="' + dataArray[i].uid + '"><div class="itemPic" id=' + dataArray[i].glaze + '></div><h2 class="quanTitle">' + "Quantity: " + dataArray[i].quantity + '</h2><button class="add3" roll-del-uid="' + dataArray[i].uid + '" type="button" id="removecartbtn" data-id='+i+'>Remove Item</button></div>');     
            }
        }
    }
    addToShoppingCart();
    
    //select button
    //listen for click
    //call removeFromShoppingCart
    $(".add3").click(removeFromShoppingCart);
    
    //removes selected items from shopping cart page
    function removeFromShoppingCart() {        
        var uid = $(this).attr("roll-del-uid");
        if (uid) {
            var selector = '[roll-uid="' + uid + '"]';
            var element = document.querySelector(selector);
            if (element) {
                element.parentNode.removeChild(element);
            }
            dataArray = dataArray.filter(x => x.uid !== uid);
            localStorage.setItem("dataArray", JSON.stringify(dataArray));
        }
    }
});



