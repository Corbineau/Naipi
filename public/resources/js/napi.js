// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".submit").on("click", function(event) {
      var id = $(this).data("id");
      var newWord = $(this).data("newWord");
  
      // var newWordState = {
      //   sleepy: newSleep
      // };
  
      // Send the PUT request.
    //   $.ajax("/api/aidaidar/" + id, {
    //     type: "PUT",
    //     data: //
    //   }).then(
    //     function() {
    //       console.log("changed sleep to", newSleep);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $("#addWord").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newWord = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/ainaidar", {
        type: "POST",
        data: newWord
      }).then(
        function() {
          console.log("added new word");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });