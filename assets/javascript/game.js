
=======
//__________________________________________________________
//GLOBAL VARIABLES
//__________________________________________________________
	


var config = {
    apiKey: "AIzaSyCftRo3in_GMlPWAYSn-3Ge1e0WOmvecM0",
    authDomain: "bootcamptest-jonc.firebaseapp.com",
    databaseURL: "https://bootcamptest-jonc.firebaseio.com",
    projectId: "bootcamptest-jonc",
    storageBucket: "bootcamptest-jonc.appspot.com",
    messagingSenderId: "1062736294105"
  };
  firebase.initializeApp(config);

   var database = firebase.database()

   $("#add-user").on("click", function(event) {

var employeeName = $("#name-input").val()
var role = $("#role-input").val()
var startDate = $("#date-input").val()
var mw = $("#mw-input").val()
var mr = $("#mr-input").val()

    
    
    event.preventDefault();
   database.ref().push({

    employeeName: employeeName,
    role: role,
    startDate: startDate,
    mw: mw,
    mr: mr
  })
})

