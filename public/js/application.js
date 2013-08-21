$(document).ready(function() {

  $('.awesomeness_teller').on('click', function(e) {

    var awesomeness = $(e.target).attr('data-heading');
    $('#awesomeness_holder').html(awesomeness);

  });



});
