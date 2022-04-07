

//readCookie on load;
loadCart(readCookie());

//Write Cookie
$(document).on("click", ".shopping-cart" ,function () {

var index = this.value;

if (document.cookie == 0)
{
var cookieString = "index0=" + index + ";";
document.cookie = escape(cookieString);
}
else
{
  var length = readCookie().length;
  var cookieString = "index" + length + "=" + index + ";";
  document.cookie += escape(cookieString);
}
loadCart(readCookie());
});


//read cookie
function readCookie()
{
  var cookieArray = unescape(document.cookie).split(';');
  var cookieArray2 = [];
  for (var i = 0; i < cookieArray.length -1 ; i++)
  {
    cookieArray2.push(cookieArray[i].split('='));
  }
  return cookieArray2;
}

//clear cookie
function clearCookie()
{
  document.cookie = "";
  loadCart(readCookie());
}
