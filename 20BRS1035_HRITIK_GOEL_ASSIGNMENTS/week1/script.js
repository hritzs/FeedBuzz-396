function submitForm(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Display form values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Clear form
    document.getElementById('myForm').reset();
  }
  