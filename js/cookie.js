

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

//Modify cookie
function editCookie( value , sign )
{
  var cookieArray = readCookie();
  var editedCookie = "";

  for (var i = 0; i < cookieArray.length; i++)
  {
    if ( cookieArray[i][1] == value)
    {
      if (sign == true ) //If it is true, it mean addition
      {
       cookieArray.splice( i, 0, cookieArray[i]);
       i = cookieArray.length;
     }
     else  // If it is false , it mean subtract
     {
       cookieArray.splice( i, 1);
       i = cookieArray.length;
     }
    }
  }

  for ( var i = 0 ; i < cookieArray.length; i++)
  {
    editedCookie += "index" + i + "=" + cookieArray[i][1] + ";";
  }

  document.cookie = escape(editedCookie);
  loadCart(readCookie());
}
