$("#submit").on("click", function(event) {
  event.preventDefault();

  // Form validation
  function validateForm() {
    var isValid = true;
    $(".nes-input").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the user's data
    var userData = {
      name: $("#name_field").val(),
      photo: $("#photo_field").val(),
      scores: [
        $("#a1").val(),
        $("#a2").val(),
        $("#a3").val(),
        $("#a4").val(),
        $("#a5").val(),
        $("#a6").val(),
        $("#a7").val(),
        $("#a8").val(),
        $("#a9").val(),
        $("#a10").val()
      ]
    };

    // AJAX post the data to the friends API.
    $.post("/api/friends", userData, function(data) {
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);

      // Show the modal with the best match
      $("#results-modal").modal("toggle");
    });
  } else {
    alert("Please fill out all fields before submitting!");
  }
});
