console.log("I'm linked.");

function appendEmployeeData() {
	console.log("I submit!");
}

$(document.documentBody).on('click', '#submit', appendEmployeeData)