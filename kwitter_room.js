// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBXiparccq8x0T2TBMxk7pRDhJemDeaBmg",
      authDomain: "kwitter-5d1e4.firebaseapp.com",
      databaseURL: "https://kwitter-5d1e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-5d1e4",
      storageBucket: "kwitter-5d1e4.appspot.com",
      messagingSenderId: "343669212752",
      appId: "1:343669212752:web:affb996c3088f65e1a3355"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    var  user_name =localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;

//End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";


}