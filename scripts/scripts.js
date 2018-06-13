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
    $("#mealOptionsList").append('<li class="list-group-item" id="extraPerson">Person ' + numberPeople + '</li>');
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
