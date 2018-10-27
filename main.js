console.log("I'm linked.");

function appendEmployeeData() {
	console.log("I submit!");
	console.log($(this));
	let empName = $('#name').val().trim();
	let empStartDate = $('#start-date').val().trim();
	let empRate = $('#rate').val().trim();
	let comment = $('#comment').val().trim();
}

$(document.documentBody).on('click', '#submit', appendEmployeeData)