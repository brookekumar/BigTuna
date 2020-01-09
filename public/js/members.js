$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      // console.log(data.error)
      // if(data.error){
      //   console.log("error logging in: "+data.error)
      // }
      
  
      $(".member-name").text(data.email);
    });
  });
  