
/////for results button
const button = document.querySelector(".show-results");
////for results
const results = document.querySelector(".results");
/////for expenses
const expensesList = document.querySelector(".expenses");
/////list of expenses
const expenses = [
	9.99,
	25.8,
	144.39,
	12.98,
	4.99,
	38.75,
	14.5,
	99.99,
	75.4,
	4.75,
	62.88
];

// Display your expenses in a list
for (let exp of expenses) {
	let li = document.createElement("li");
	li.innerText = `$ ${exp}`;
	expensesList.append(li);
}

// Write showMinMax function here
const showMinMax = function (expenses) {
	/////minimum expenses
	const min = Math.min(...expenses);
	/////maximum expenses
	const max = Math.max(...expenses);

	const minListItem = document.createElement("li");
	////inner Text for minimum amount
	minListItem.innerText = `Min: $ ${min}`;

	const maxListItem = document.createElement("li");
	////inner Text for maximum amount
	maxListItem.innerText = `Max: $ ${max}`;

	results.append(minListItem);
	results.append(maxListItem);

	results.classList.remove("hide");
};

// Write click event listener for 'button' and call the showMinMax function
button.addEventListener("click", function () {
	showMinMax(expenses);
	button.disabled = true;
});
