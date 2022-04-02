
var cart_total = [];    //object array for all items in cart

var item_str_length = 15; //string lenght for name in cartl

$('.shopping-cart-header').html("Your Cart is Empty!");
// } else {
//   $('.shopping-cart-header').html("<h4>Items in Cart</h4> <div class='row'><div class='col-xl-4'><h5>Name:</h5></div><div class='col-xl-4'><h5>Name:</h5></div><div class='col-xl-4'><h5>Name:</h5></div></div>");
// }



//This click function is for when you press add to cart button.
$('.shopping-cart').click(function() {
  var isExist = false;
  var isExistPosition = 0;
  var i = this.value;

  //Search through cart array to find if the item already exist in the cart
  for (var p = 0 ; p < cart_total.length; p++)
  {
    if (cart_total[p][0].name == product5[i].name)
    {
      isExist = true;
      isExistPosition = p;
    }
  }
  console.log(isExist);

  if(isExist)
  {
    cart_total[isExistPosition][0].qty += 1;
    console.log(cart_total[isExistPosition][0].qty);

    //Update the cart

      var subtotal = 0;
      var cart_item_string;
      $('.shopping-cart-header').html("<h4>Items in Cart</h4><br>" +
        "<div class='row'>" +
        "<div class='col-xl-3'><h5>Img</h5></div>" +
        "<div class='col-xl-3'><h5>Item</h5></div>" +
        "<div class='col-xl-3'><h5>Price</h5></div>"+
        "<div class='col-xl-3'><h5>Qty</h5></div></div>");

      for (var k = 0; k < cart_total.length; k++) {
        var trimed_item_name = truncateString( cart_total[k][0].name,item_str_length );
        var item_price = cart_total[k][0].price;
        var item_img_src = cart_total[k][0].imgsrc;
        subtotal += item_price * cart_total[k][0].qty;
        cart_item_string += "<div class='row'>" +
          "<div class='col-xl-3'><img class='cart-img' src='"+ item_img_src +"'></div>" +
          "<div class='col-xl-3'><h6>" + trimed_item_name + "</h6></div>" +
          "<div class='col-xl-3'><h6>$" + item_price + "</h6></div>"+
          "<div class='col-xl-3'><h6>" +  cart_total[k][0].qty + "</h6></div></div>";
          console.log(cart_total[k][0].qty);
      }

      $('.shopping-cart-items').html(cart_item_string);
      $('.shopping-cart-footer').html("<br>" +
        "<div class='row'>" +
        "<div class='col-xl-6'><h4>Total: $"+ subtotal +"</h4></div>" +
        "<div class='col-xl-6'><h4>*******</h4></div>");

      console.log(cart_total.length);

  }
  else
  {
    //Assign Values to an object
     var cart = [{
       "name": product5[i].name,
       "price": product5[i].price,
       "imgsrc": product5[i].imgsrc,
       "qty": 1
     }];

     //Assign object to shopping cart object
     cart_total.push(cart);

    //Update the cart
     if (cart_total.length > 0)
     {
       var subtotal = 0;
       var cart_item_string;
       $('.shopping-cart-header').html("<h4>Items in Cart</h4><br>" +
         "<div class='row'>" +
         "<div class='col-xl-3'><h5>Img</h5></div>" +
         "<div class='col-xl-3'><h5>Item</h5></div>" +
         "<div class='col-xl-3'><h5>Price</h5></div>"+
         "<div class='col-xl-3'><h5>Qty</h5></div></div>");

       for (var k = 0; k < cart_total.length; k++) {
         var trimed_item_name = truncateString( cart_total[k][0].name,item_str_length );
         var item_price = cart_total[k][0].price;
         var item_img_src = cart_total[k][0].imgsrc;
         subtotal += item_price;
         cart_item_string += "<div class='row'>" +
           "<div class='col-xl-3'><img class='cart-img' src='"+ item_img_src +"'></div>" +
           "<div class='col-xl-3'><h6>" + trimed_item_name + "</h6></div>" +
           "<div class='col-xl-3'><h6>$" + item_price + "</h6></div>"+
           "<div class='col-xl-3'><h6>" +  cart_total[k][0].qty + "</h6></div></div>";
           console.log(cart_total[k][0].qty);
       }

       $('.shopping-cart-items').html(cart_item_string);
       $('.shopping-cart-footer').html("<br>" +
         "<div class='row'>" +
         "<div class='col-xl-6'><h4>Total: $"+ subtotal +"</h4></div>" +
         "<div class='col-xl-6'><h4>*******</h4></div>");

       console.log(cart_total);
     }
  }


});


//This is for Shopping cart box toggle script
$("#cart").click(function() {

  //toggle
  $(".shopping-cart-box").fadeToggle("fast");

});

//javascript to trimp the string
function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit) + "..."
  } else {
    return string
  }
}
