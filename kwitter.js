const firebaseConfig = {
    apiKey: "AIzaSyDgYUaxsxbkt_ibKw1paVnvwL3trFOHWFM",
    authDomain: "classtest-ec44e.firebaseapp.com",
    databaseURL: "https://classtest-ec44e-default-rtdb.firebaseio.com",
    projectId: "classtest-ec44e",
    storageBucket: "classtest-ec44e.appspot.com",
    messagingSenderId: "486758158622",
    appId: "1:486758158622:web:8797807be4fe4879dbb90f",
    measurementId: "G-3DLRMC0Q1T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}

