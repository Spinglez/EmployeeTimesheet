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
    console.log(childSnapshot.val().employee);
  })
  
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
