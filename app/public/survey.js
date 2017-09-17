$(document).ready(function() {
    // Capture the form inputs 
    $(document).on('click', '#submit', function() {
    	// Form validation
    	function validateForm() {
		  var isValid = true;
		  $('.form-control').each(function() {
		    if ( $(this).val() === '' )
		        isValid = false;
		  });

		  $('.browser-default').each(function() {

		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  return isValid;
		}

		// if validateForm() returns true (i.e., user filled out all fields/questions)
		if (validateForm()) {
			// grab all of the questions and store them in this array
			var scoresArr = [
					parseInt($('#q1').val().trim()),
					parseInt($('#q2').val().trim()),
					parseInt($('#q3').val().trim()),
					parseInt($('#q4').val().trim()),
					parseInt($('#q5').val().trim()),
					parseInt($('#q6').val().trim()),
					parseInt($('#q7').val().trim()),
					parseInt($('#q8').val().trim()),
					parseInt($('#q9').val().trim()),
					parseInt($('#q10').val().trim())
				];
			// new user's information
			var newUser = {
				name: $('#name').val().trim(), // grab the user's name
				photo: $('#photo').val().trim(), // grab the user's picture
				scores: scoresArr
			};

			// make a post request with the url being the domain name concatenated with the post route and the newUser object
			// when the post request is done, run the callback function 
			$.post(window.location.origin + "/api/friends", newUser).done(function(bestMatch) {
				// display the best match's name and picture in the modal
				$('#matchName').text(bestMatch.name);
				$('#matchImg').attr("src", bestMatch.photo).addClass("responsive-img");

				// display the modal
				$('#resultsModal').modal('open');
			});
		}
		else {
			// if validateForm() returns false (i.e., there is a field/question that was not answered), display the error modal
			$("#errorModal").modal('open');
		}
	});
});
