
var list_item_2 = document.querySelector(".list-2-items-script");

for ( var i = 0; i < product2.length; i++)
{
  list_item_2.innerHTML += "<div class='row'>"+
  "<div class='col-md-10'>"+
    "<div class='row list-box'>"+
      "<div class='col-lg-6'>"+
        "<img class='list-product-img' src='" + product2[i].imgsrc+ "' alt='rtx-3080'>"+
      "</div>"+
      "<div class='col-lg-6 list-description' >"+
        "<h4>" +  product2[i].name + "</h4>"+
        "<br>"+
        "<div>"+
        "<h6>List Price:" + product3[i].listPrice +"</h6>"+
        "<h6 style='color:red; font-weight:bold;'>Your Price:" + product2[i].yourPrice +"</h6>"+
        "<button type='button' class='btn btn-primary shopping-cart'>Add to Cart</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>"+
  "<div class='col-md-2'></div>"+
"</div>"+
"<hr>";
}
