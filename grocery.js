$(document).ready(function() {

  var groceries = [
  {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
  {name: "Onions", status: "needed", price: "1.85", quantity: 2},
  {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
  {name: "Limes", status: "complete", price: ".33", quantity: 3},
  {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];


// Before we start anything, string up the css file, this javascript file, and
// the jQuery CDN to grocery.html file.

//1. Display the existing list of grocery items (from the grocery array)
// in an unordered list in the "list" id that already exists in grocery.html.
// Display each item's name, price, and quantity.
// Ex: Tomatoes (5) @ $3.99


$.each(groceries, function( key, value ) {
  $("ul").append(
    $("<li>").append(
      value.name + " (" + value.quantity + ") @ $" + value.price));
});


//2. Use the inputs and add button to add grocery items to the beginning of the list.
// Default status should be "needed". The item should appear above the existing grocery items.

$(".btn-success").click(function(){
    var newItemName = $("#addItem").val();
    var newItemPrice = $("#addPrice").val();
    var newItemQuant = $("#addQuantity").val();
    var newItemStatus = "needed";

    
    // check values entered
    while (newItemName === ""){

      newItemName = prompt("Please enter a valid item name!");
    
    }

    while ((newItemPrice > 0) === false){

      newItemPrice = prompt("Please enter a valid price");
    
    }

    while ((newItemQuant > 0) === false){

      newItemQuant = prompt("Please enter a valid quantity");
    
    }
  
  $("ul").append(
      $("<li>").append(
       newItemName + " (" + newItemQuant + ") @ $" + newItemPrice));

  groceries.push({
    name: newItemName, 
    price: newItemPrice, 
    quantity: newItemQuant,
    status: newItemStatus
  });

  var newTotal = 0;

  $.each(groceries, function( key, value ) {
    newTotal += value.quantity * value.price;
    $(".totalCost").find("span").text("$" + newTotal.toFixed(2));
  });

  console.log(groceries);

});



$(".btn-remove").click(function(){

  $("li:last").remove();

  if (groceries.length === 1){

        $(".totalCost").find("span").text("NOTHING! It's all free cuz you got nothin");
      }

  groceries.splice(-1,1);

  var newNewTotal = 0;

    $.each(groceries, function( key, value ) {
     newNewTotal += value.quantity * value.price;
      $(".totalCost").find("span").text("$" + newNewTotal.toFixed(2));


      

    });

    console.log(groceries.length);

  });

//3. Make sure that the grocery list displayed updates when you add an item to the list.




//4. Display the total cost of the groceries. Make sure this updates as you add items to the list.

var total = 0;

$.each(groceries, function( key, value ) {
  total += value.quantity * value.price;
});

$(".totalCost").find("span").text("$" + total.toFixed(2));

//5. Put a check in to make sure users aren't adding items without a name, price, or quantity.

// 5. Add the CDN for jQuery UI script to grocery.html
// You can find the snippet here: https://developers.google.com/speed/libraries/#jquery-ui

// 6. Add a remove button at the bottom below the total. When clicked, it should remove
// the last item and update the total.

// 7. Make each grocery item (each li element) draggable using .sortable().
// Use the example here https://johnny.github.io/jquery-sortable/ to figure out how to implement this.
// The three steps under 'Getting Started' should get you there. You do not NEED the css provided.

// 8. In the HTML document, add a list below "#list" called "purchased". All of the items that are status complete
// should go in the purchased list.

// 9. When one of the grocery items in "#list" is double-clicked the status for that item
// should change to "complete" and populate in the complete list.

});
