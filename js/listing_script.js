var nav_id = 0; // To store the current page id for listing
var nav_clicked = false;

if (nav_clicked == false)
{
  var list_item_5 = document.querySelector(".list-5-items-script");
  list_item_5.innerHTML = " "; //empty the list_item_5
  for (var i = 0; i < product.length; i++) {
    list_item_5.innerHTML += "<div class='row'>" +
      "<div class='col-md-10'>" +
      "<div class='row list-box'>" +
      "<div class='col-xl-8'>" +
      "<img class='list-product-img' src='" + product[i].imgsrc + "' alt='rtx-3080'>" +
      "</div>" +
      "<div class='col-xl-4 list-description' >" +
      "<h4>" + product[i].name + "</h4>" +
      "<br>" +
      "<div>" +
      "<h6>List Price:" + product[i].listPrice + "</h6>" +
      "<h6 style='color:red; font-weight:bold;'>Your Price:" + product[i].yourPrice + "</h6>" +
      "<button type='button' class='btn btn-primary shopping-cart' value = '" + product[i].index + "' >Add to Cart</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<div class='col-md-2'></div>" +
      "</div>" +
      "<hr>";
  }
}

$('.nav-list').click(function(event)
{
  nav_clicked = true;
  var current_list = []; //array to keep the current page products
  nav_id = event.currentTarget.id;
  console.log(nav_id);
  if (nav_id == "i1")
  {
    var startIndex = 0;
    var endIndex = 10;
  }
  if (nav_id == "i2")
  {
    var startIndex = 10;
    var endIndex = 20;
  }
  if (nav_id == "i3")
  {
    var startIndex = 20;
    var endIndex = 30;
  }
  if (nav_id == "i4")
  {
    var startIndex = 30;
    var endIndex = 40;
  }
  if (nav_id == "i5")
  {
    var startIndex = 40;
    var endIndex = 50;
  }
  for (var z = startIndex; z < endIndex; z++)
  {
    current_list.push(product[z]);
  }


  var list_item_5 = document.querySelector(".list-5-items-script");
  list_item_5.innerHTML = " "; //empty the list_item_5
  for (var i = 0; i < current_list.length; i++) {
    list_item_5.innerHTML += "<div class='row'>" +
      "<div class='col-md-10'>" +
      "<div class='row list-box'>" +
      "<div class='col-xl-8'>" +
      "<img class='list-product-img' src='" + current_list[i].imgsrc + "' alt='rtx-3080'>" +
      "</div>" +
      "<div class='col-xl-4 list-description' >" +
      "<h4>" + current_list[i].name + "</h4>" +
      "<br>" +
      "<div>" +
      "<h6>List Price:" + current_list[i].listPrice + "</h6>" +
      "<h6 style='color:red; font-weight:bold;'>Your Price:" + current_list[i].yourPrice + "</h6>" +
      "<button type='button' class='btn btn-primary shopping-cart' value = '" + current_list[i].index + "' >Add to Cart</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<div class='col-md-2'></div>" +
      "</div>" +
      "<hr>";
  }

}
);
