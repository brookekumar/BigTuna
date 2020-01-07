
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newUser = {
      // name from name input
      user_email: $("#userEmail").val().trim(),
      // role from role input
      user_password: $("#userPassword").val().trim(),
      // age from age input
      name: $("#name").val().trim(),
      // points from force-points input
      last_name: $("#lastName").val().trim(),
      scores_id: $("#scoreId").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newUser)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Creating User...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#userEmail").val("");
    $("#userPassword").val("");
    $("#name").val("");
    $("#lastName").val("");
    $("#scoreId").val("");
  });
  