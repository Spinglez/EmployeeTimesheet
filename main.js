  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyCbZfl98gXYadV58TnT6bZjKtwLoJGzgoM",
    authDomain: "employee-timeclock-12d26.firebaseapp.com",
    databaseURL: "https://employee-timeclock-12d26.firebaseio.com",
    projectId: "employee-timeclock-12d26",
    storageBucket: "employee-timeclock-12d26.appspot.com",
    messagingSenderId: "713247075558"
  };

  firebase.initializeApp(config);

  let database = firebase.database();

  let employeeData = {
    employeeName: "",
    role: "",
    startDate: "",
    monthlyRate: "",
    dateAdded: null,
  }

  database.ref().on("child_added", function(childSnapshot){
    console.log("test snap" + childSnapshot.val().employee);
    let newRow = $('<tr>');
    let td = $('<td>')
    $('.table').append(newRow);
    $(newRow).append('<td>' + childSnapshot.val().employee.employeeName + '</td>');
    $(newRow).append('<td>' + childSnapshot.val().employee.role + '</td>');
    $(newRow).append('<td>' +childSnapshot.val().employee.startDate + '</td>');
    // need to add the calculation row here for months worked
    $(newRow).append('<td>' +childSnapshot.val().employee.monthlyRate + '</td>');
    // total billed calculation goes here

    // ignore the stuff below it's just informational.
    // $(newRow).append('<td>' +childSnapshot.val().employee.dateAdded + '</td>');
    // I was making a new row the date added we dont need that in here leaving it for your guys info.
    console.log(childSnapshot.val().employee.employeeName);
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

console.log("I'm linked.");

function appendEmployeeData() {
	console.log("I submit!");
	employeeData.employeeName = $('#name').val().trim();
	employeeData.role = $('#role').val().trim();
	employeeData.startDate = $('#start-date').val().trim();
	employeeData.monthlyRate = $('#monthly-rate').val().trim();
	employeeData.dateAdded = firebase.database.ServerValue.TIMESTAMP;
	console.log(employeeData);


	database.ref().push({
	    employee: employeeData,
	  });

}

$('#submit').on('click', function(event) {
	event.preventDefault();
	console.log('Calling appendEmployeeData');
	appendEmployeeData();
})
