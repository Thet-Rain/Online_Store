var list_item_4 = document.querySelector(".list-4-items-script");

for ( var i = 0; i < product4.length; i++)
{
  list_item_4.innerHTML += "<div class='row'>"+
  "<div class='col-xl-10 '>"+
    "<div class='row list-box'>"+
      "<div class='col-xl-8'>"+
        "<img class='list-product-img' src='" + product4[i].imgsrc+ "' alt='rtx-3080'>"+
      "</div>"+
      "<div class='col-xl-4 list-description' >"+
        "<h4>" +  product4[i].name + "</h4>"+
        "<br>"+
        "<div>"+
        "<h6>List Price:" + product4[i].listPrice +"</h6>"+
        "<h6 style='color:red; font-weight:bold;'>Your Price:" + product4[i].yourPrice +"</h6>"+
        "<button type='button' class='btn btn-primary shopping-cart'>Add to Cart</button>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>"+
  "<div class='col-md-2'></div>"+
"</div>"+
"<hr>";
}
