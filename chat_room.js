localStorage.getItem("user_name");


function redircetToRoomName(name){
  console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,massage:msg,like:0});
      document.getElementById("msg").value = "";
}



function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebaseConfig.database().ref("/").child(room_name).update({purpose : "adding room name"});

  localStorage.setItem("room_name", room_name);

  window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;


  Room_names = childKey;
 //Start code
   
 console.log("Room Name -"+Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redircetToRoomName(this.id)'>#"+Room_name+"</div><hr>"


 //End code
 });});}
getData();






