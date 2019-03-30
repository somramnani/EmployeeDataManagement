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



database.ref().on("child_added", function(snapshot) {


console.log(snapshot.val())
alert("A new worker has been added!")
var newEmployee = snapshot.val().employeeName
var newRole = snapshot.val().role
var newDate = snapshot.val().startDate
var newMR = snapshot.val().mr
var newMW = snapshot.val().mw

console.log(newEmployee)
console.log(newRole)
console.log(newDate)
console.log(newMR)
console.log(newMW)

var newRow = $("<tr>")
var newEmp = "<th scope='row'>" + newEmployee + "</th>"
var newRol = "<td>" + newRole + "</td>"
var newDat = "<td>" + newDate + "</td>"
var NMR = "<td>$" + newMR + "</td>"
var NMW = "<td>" + newMW + "</td>"

newRow.append(newEmp)
newRow.append(newRol)
newRow.append(newDat)
newRow.append(NMW)
newRow.append(NMR)

$("#table-body").append(newRow)
})