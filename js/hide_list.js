
//This script hide and show div according to the nav link you click.

$('.nav-list').click(function(event)
{
  var page = event.currentTarget.id;
  if (page == 'i0')
  {
    $('#list-items').hide();
    $('#about-us').hide();
    $('#contact-us').hide();
    $('#home-page').show();
  }
  else if (page == 'i1' || page == 'i2' || page == 'i3' || page == 'i4' || page == 'i5')
  {
    $('#list-items').show();
    $('#home-page').hide();
    $('#about-us').hide();
    $('#contact-us').hide();
  }

  else if ( page == 'i6')
  {
    $('#list-items').hide();
    $('#home-page').hide();
    $('#about-us').show();
    $('#contact-us').hide();
  }
  else
  {
    $('#list-items').hide();
    $('#home-page').hide();
    $('#about-us').hide();
    $('#contact-us').show();
  }
}
);

//This collapse the nav bar when you click the nav bar items inside
$('.nav-link').on('click',function() {
  $( "#navbarTogglerDemo02" ).removeClass( "show" );
});
