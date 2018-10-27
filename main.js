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
  }

  database.ref().set({
    name: employeeData.employeeName,
    role: employeeData.role,
    start: employeeData.startDate,
    rate: employeeData.monthlyRate,
  })

  database.ref().on("value", function(snapshot){
    console.log(snapshot.val().name)
    console.log(snapshot.val().role)
    console.log(snapshot.val().start)
    console.log(snapshot.val().rate)
  })
console.log("I'm linked.");

function appendEmployeeData() {
	console.log("I submit!");
	console.log($(this));
	employeeData.employeeName = = $('#name').val().trim();
	employeeData.role = $('#role').val().trim();
	employeeData.startDate = $('#start-date').val().trim();
	employeeData.monthlyRate = $('#rate').val().trim();

	if (employeeData.employeeName && employeeData.role && employeeData.startDate && employeeData.monthlyRate)
	{
		database.push({
			'name':  employeeData.employeeName,
			'role':  employeeData.role,
			'start': employeeData.startDate,
			'rate':  employeeData.monthlyRate
		})
	}
	else
	{
		console.log("You need to enter all fields!");
	}
}

$(document.documentBody).on('click', '#submit', appendEmployeeData)

