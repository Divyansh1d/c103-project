var firebaseConfig = {
    apiKey: "AIzaSyBQb8B-L0JydxvmW6Xiv6T7BDHPctgh2m4",
    authDomain: "divyansh-e87e5.firebaseapp.com",
    databaseURL: "https://divyansh-e87e5-default-rtdb.firebaseio.com",
    projectId: "divyansh-e87e5",
    storageBucket: "divyansh-e87e5.appspot.com",
    messagingSenderId: "1096403089554",
    appId: "1:1096403089554:web:4c2e37c03f29ea1e9c4e4b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,massage:msg,like:0});
      document.getElementById("msg").value = "";
}