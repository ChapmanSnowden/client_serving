$(document).ready(function() {

  $('.awesomeness_teller').on('click', function(e) {

    var awesomeness = $(e.target).attr('data-heading');
    $('#awesomeness_holder').html(awesomeness);

  });

  $('.skill_teller').on('click', function() {

    var getSkill= function() {
      var urlSkill = window.location.toString().split('/');
      var skill = $(urlSkill).last();
        return skill[0];
    };

    var setSkill = function(skill) {
      $('#skill_holder').text(skill);
    };

    setSkill(getSkill());

  });



});
