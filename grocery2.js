$(document).ready(function() {
// 5. Add the CDN for jQuery UI script to grocery.html
// You can find the snippet here: https://developers.google.com/speed/libraries/

// 6. Add a remove button at the bottom below the total. When clicked, it should remove
// the last item and update the total.

// 7. Make each grocery item (each li element) draggable using .sortable().
// Use the example here https://johnny.github.io/jquery-sortable/ to figure out how to implement this.
// The three steps under 'Getting Started' should get you there. You do not NEED the css provided.

// 8. In the HTML document, add a list below "#list" called "purchased". All of the items that are status complete
// should go in the purchased list.

// 9. When one of the grocery items in "#list" is double-clicked the status for that item
// should change to "complete" and populate in the complete list.

  var groceries = [
    {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
    {name: "Onions", status: "needed", price: "1.85", quantity: 2},
    {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
    {name: "Limes", status: "complete", price: ".33", quantity: 3},
    {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];

});
