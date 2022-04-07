

function loadCart(cookieArray)
{

  if (document.cookie == 0)
  {
  $('.shopping-cart-header').html("Your Cart is Empty!");
  $('.shopping-cart-items').html("");
  $('.shopping-cart-footer').html("");
  }

  else
  {
    var cart_item_string = "";
    var item_str_length = 15;
    var subtotal = 0;
    var cart = []; // ARRAY TO HOLD ALL INFOS FOR SHOPPING CART
    items_in_cart = cookieArray.length;
    $('.cart_counts').html("<b>(" + items_in_cart + ")</b>");

    //Shopping Cart Header;
    $('.shopping-cart-header').html("<h4>Items in Cart</h4><br>" +
      "<div class='row'>" +
      "<div class='col-xl-3 cart-img'><h5>Img</h5></div>" +
      "<div class='col-xl-3 col-sm-4'><h5>Item</h5></div>" +
      "<div class='col-xl-3 col-sm-4'><h5>Price</h5></div>" +
      "<div class='col-xl-3 col-sm-4'><h5>Qty</h5></div></div>");

    for (var i = 0; i < cookieArray.length; i++) {
      var isExist = false;
      //Check if the item already exist in the cart for next items in the cookie
      for (var j = 0; j < cart.length; j++) {
        if (cart[j][0].index == cookieArray[i][1]) {
          cart[j][0].qty += 1;
          isExist = true;
        }
      }

      if (isExist == false) {
        var v = cookieArray[i][1];
        var cart3 = [{
          "name": product[v].name,
          "price": product[v].price,
          "imgsrc": product[v].imgsrc,
          "qty": 1,
          "index": product[v].index
        }];
        cart.push(cart3)
      }
    }

    //For loop for creating html for all the cart items
    for (var i = 0; i < cart.length; i++) {
      var trimed_item_name = truncateString(cart[i][0].name, item_str_length);
      var item_price = cart[i][0].price;
      var item_img_src = cart[i][0].imgsrc;
      subtotal += item_price * cart[i][0].qty;
      cart_item_string += "<div class='row'>" +
        "<div class='col-xl-3'><img class='cart-img' src='" + item_img_src + "'></div>" +
        "<div class='col-xl-3 col-sm-4'><h6>" + trimed_item_name + "</h6></div>" +
        "<div class='col-xl-3 col-sm-4'><h6>$" + item_price + "</h6></div>" +
        "<div class='col-xl-3 col-sm-4'><h6>" + cart[i][0].qty + "</h6></div></div>";
    }

    //Inserting the html into shopping-cart-item
    $('.shopping-cart-items').html(cart_item_string);
    $('.shopping-cart-footer').html("<br>" +
      "<div class='row'>" +
      "<div class='col-sm-6'><h4>Total: $" + subtotal.toFixed(2) + "</h4></div>" +
      "<div class='col-sm-6'><button type='button' value='9' class='btn btn-primary' onclick='clearCookie()'>Clear The Cart</button></div>");
  }

}




//This is for Shopping cart box toggle script
$(".cart").click(function() {

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
