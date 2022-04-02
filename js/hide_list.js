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
