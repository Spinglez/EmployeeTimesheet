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