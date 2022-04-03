
//This script hide and show div according to the nav link you click.

$('.nav-list').click(function(event)
{
  var page = event.currentTarget.id;
  if (page == 'i0')
  {
    $('#list-items').hide();
    $('#home-page').show();
  }
  else
  {
    $('#list-items').show();
    $('#home-page').hide();
  }
}
);

//This collapse the nav bar when you click the nav bar items inside
$('.nav-link').on('click',function() {
  $( "#navbarTogglerDemo02" ).removeClass( "show" );
});
