// scroll to href
$(document).ready(function() {
  $(".nav-link").click(function() {
    var navID = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(navID).offset().top
    }, 2000);
  });
});

// show second nav at scroll 600
$(document).ready(function() {
  $("#footerNav").hide();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
      $('#footerNav').fadeIn();
    } else {
      $("#footerNav").fadeOut();
    };
  });
});

// meal options
$(document).ready(function() {
  $("#gridRadios2").change(function() {
    if ($(this).is(":checked")) {
      var val = $(this).val(); // retrieve the value
      console.log(val);
      if (val === "selectedAttend") {
        $(".mealOptions").show('fast');
        $(".declineMessage").hide('fast');
      }
    } else if ($(this).isnot(":checked")) {
      var val = $(this).val(""); // retrieve the value
    };
  });
  $("#gridRadios1").change(function() {
    if ($("#gridRadios1").is(":checked")) {
      var val = $("#gridRadios1").val(); // retrieve the value
      console.log(val);
      if (val === "declined") {
        $(".declineMessage").show('fast');
        $(".mealOptions").hide('fast');
      }
    } else if ($("#gridRadios1").isnot(":checked")) {
      $(".declineMessage").val(null);
       $(".declineMessage").hide('fast');
    };
  });
});

// Multi-People Meal Options
$(document).ready(function() {
  $("#numberPeople").val(1);
  var numberPeople = $("#numberPeople").val();
  $('#buttonUp').on('click', function() {
    numberPeople++;
    $("#numberPeople").val(numberPeople);
    var htmlString = '<li class="list-group-item" id="extraPerson' + numberPeople + '">'+'<p class="personName' + numberPeople + '">Guest ' + numberPeople + '</p>'+'<fieldset class="form-group"><div class="row"><div class="col-sm-12"><div class="form-group"><label for="name">Name</label>'+'<input class="form-control" id="name' + numberPeople +'" type="text" name="name' + numberPeople +'" placeholder="Enter name"></div>'+'<div class="starterMeal"><p>Starter</p><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox"'+'name="starterMeat' + numberPeople + '" id="' + numberPeople + 'inlinecheckbox1' + numberPeople + '" value="option1"><label class="form-check-label" for="' + numberPeople + 'inlinecheckbox1' + numberPeople + '">Meat Option</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" name="starterVeg' + numberPeople +'" id="'+ numberPeople;

    var htmlString2 = ' inlinecheckbox2' + numberPeople + '" value="option2"><label class="form-check-label" for="' + numberPeople + 'inlinecheckbox2' + numberPeople + '">Vegetarian Option</label></div></div><div class="mainMeal">'+'<p>Main</p><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" name="mainMeat' + numberPeople +  '" id="' + numberPeople + 'inlinecheckbox1'+'" value="option1"><label class="form-check-label" for="' + numberPeople + 'inlinecheckbox1'+'">Meat Option</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" name="mainFish' + numberPeople +'" id="' + numberPeople + 'inlinecheckbox2'+'" value="option2"><label class="form-check-label" for="' + numberPeople + 'inlinecheckbox2'+'">Fish Option</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" name="mainVeg' + numberPeople + '" id="' + numberPeople +
    'inlinecheckbox3" value="option2"><label class="form-check-label" for="';

    var htmlString3 = numberPeople + 'inlinecheckbox3' + numberPeople + '">Vegetarian Option</label></div></div></div></div></fieldset></li>';
    $("#mealOptionsList").append(htmlString + htmlString2 + htmlString3);
    event.preventDefault();
    console.log("People" + numberPeople);
    if (numberPeople >= 2) {
      $("#buttonDown").removeClass('disabled');
      $("#buttonDown").removeAttr("disabled");
    }
    if (numberPeople > 4) {
      $("#buttonUp").addClass('disabled');
      $("#buttonUp").prop("disabled", true);
    }
  });
  $('#buttonDown').on('click', function() {
    numberPeople--;
    $("#numberPeople").val( numberPeople );
    $("#mealOptionsList li:last-child").remove();
    event.preventDefault();
    console.log("People" + numberPeople);
    if (numberPeople === 1) {
      $("#buttonDown").addClass('disabled');
      $("#buttonDown").prop('disabled', true);
    }
    if (numberPeople < 5) {
      $("#buttonUp").removeClass('disabled');
      $("#buttonUp").removeAttr("disabled");
    }
  });
});

$("#name").change(function() {
  var name = $("#name").val();
  if (name => "" ) {
    var name = $("#name").val();
    console.log(name);
    $(".personName1").text(name);
  }
});
$(document).ready(function() {
  $(".otherForm").remove();
});
