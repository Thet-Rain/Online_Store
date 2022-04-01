
var list_item_1 = document.querySelector(".list-1-items-script");

for ( var i = 0; i < product1.length; i++)
{
  list_item_1.innerHTML += "<div class='row'>"+
  "<div class='col-md-10'>"+
    "<div class='row list-box'>"+
      "<div class='col-xl-8'>"+
        "<img class='list-product-img' src='" + product1[i].imgsrc+ "' alt='rtx-3080'>"+
      "</div>"+
      "<div class='col-xl-4 list-description' >"+
        "<h4>" +  product1[i].name + "</h4>"+
        "<br>"+
        "<div>"+
        "<h6>List Price:" + product1[i].listPrice +"</h6>"+
        "<h6 style='color:red; font-weight:bold;'>Your Price:" + product1[i].yourPrice +"</h6>"+
        "<button type='button' class='btn btn-primary shopping-cart'>Add to Cart</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>"+
  "<div class='col-md-2'></div>"+
"</div>"+
"<hr>";
}
