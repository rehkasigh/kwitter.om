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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
//Start code
name=message_data['name'];
message=message_data['mesaage'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
} }); }); } getData();
function updateLike(message_id){
console.log("clicked on the like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});

}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";


}