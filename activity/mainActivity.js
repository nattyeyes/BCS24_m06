function oddEvenChecker(input) {
	if (typeof input == 'number') {
		input % 2 === 0 ? console.log("The number is even.") : console.log("The number is odd.");
	} else {
		console.log("Invalid input.");
	};
};

oddEvenChecker(36);
oddEvenChecker(25);
oddEvenChecker('we got this');

function budgetChecker(input) {
	if (typeof input == 'number') {
		input > 40000 ? console.log("You are over budget.") : console.log("You have resources left.");
	} else {
		console.log("Invalid input");
	};
};

budgetChecker(500000);
budgetChecker(10);
budgetChecker('60,000');