$(document).ready(function() {
    $('#registrationForm').submit(function(event) {

        // Prevent default form submission behavior
       // event.preventDefault();

        // Get the form data
        var id = $('#id').val();
        var fullName = $('#fullName').val();
        var address = $('#address').val();
        var status = $('#status').val();

        // Send the form data to the server
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/register', // Assuming this is the correct route in your backend
           // contentType: 'application/json',
            data: { 
                id: id,
                fullName: fullName,
                address: address,
                status: status 
            },
            success: function(response) {
                console.log('Data saved successfully:', response);
                // You can handle the response here (e.g., display confirmation notice)
                alert(`Registration Successful!\n\nID: ${response.id}\nFull Name: ${response.fullName}\nAddress: ${response.address}\nStatus: ${response.status}\nFee: $${response.fee}`);
            },
            error: function(error) {
                console.log('Error saving data:', error);
                alert("An error occurred during registration. Please try again later.");
            }
        });
    });
});
