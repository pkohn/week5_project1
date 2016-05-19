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
  
  $("ul").append(
      $("<li>").append(
       newItemName + " (" + newItemPrice + ") @ $" + newItemQuant));

  groceries.push({
    name: newItemName, 
    price: newItemPrice, 
    quantity: newItemQuant});

  var newTotal = 0;

  $.each(groceries, function( key, value ) {
    newTotal += value.quantity * value.price;
    $(".totalCost").find("span").text("$" + newTotal);
  });

});



$(".btn-remove").click(function(){

$("li:last").remove();
//need to update array

  });

//3. Make sure that the grocery list displayed updates when you add an item to the list.




//4. Display the total cost of the groceries. Make sure this updates as you add items to the list.

var total = 0;

$.each(groceries, function( key, value ) {
  total += value.quantity * value.price;
});

$(".totalCost").find("span").text("$" + total);

//5. Put a check in to make sure users aren't adding items without a name, price, or quantity.

});
