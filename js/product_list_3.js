var list_item_3 = document.querySelector(".list-3-items-script");

for ( var i = 0; i < product3.length; i++)
{
  list_item_3.innerHTML += "<div class='row'>"+
  "<div class='col-lg-10'>"+
    "<div class='row list-box'>"+
      "<div class='col-lg-6'>"+
        "<img class='list-product-img' src='" + product3[i].imgsrc+ "' alt='rtx-3080'>"+
      "</div>"+
      "<div class='col-lg-6 list-description' >"+
        "<h4>" +  product3[i].name + "</h4>"+
        "<br>"+
        "<div>"+
        "<h6>List Price:" + product3[i].listPrice +"</h6>"+
        "<h6 style='color:red; font-weight:bold;'>Your Price:" + product3[i].yourPrice +"</h6>"+
        "<button type='button' class='btn btn-primary shopping-cart'>Add to Cart</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>"+
  "<div class='col-md-2'></div>"+
"</div>"+
"<hr>";
}
