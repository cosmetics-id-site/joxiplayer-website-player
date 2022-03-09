// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCG_92OLetfydA6KDg2kwweJF4bf4hG7Jw",
    authDomain: "joxiplayer-site.firebaseapp.com",
    databaseURL: "https://joxiplayer-site-default-rtdb.firebaseio.com",
    projectId: "joxiplayer-site",
    storageBucket: "joxiplayer-site.appspot.com",
    messagingSenderId: "288570493379",
    appId: "1:288570493379:web:8c1168c876624cc6a95576",
    measurementId: "G-4J03BRQ7Y1",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Contact Form');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(email, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(email, subject, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email: email,
      subject: subject,
      message: message,
    });
  }