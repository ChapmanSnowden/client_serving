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
      $('#skill_holder').html(skill);
    };

    setSkill(getSkill());

  });

  $('.meal_teller').on('click', function(e) {
    e.preventDefault();
    var random_meal = meals[Math.floor(Math.random()*meals.length)];
    $('#meal_holder').html(random_meal);
  });

});
