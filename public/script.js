let expenses = [];
let total_amt = 0;
const category = document.getElementById("category");

const amt = document.getElementById("amount");

const desc = document.getElementById("desc");

const date = document.getElementById("date");

const addbtn = document.getElementById("addbtn");

const expensetablebody = document.getElementById("expense-table-body");

const total_amt_cell = document.getElementById("total-amt");

addbtn.addEventListener("click", function () {
	const category_val = category.value;
	const amt_val = Number(amt.value);
	const desc_val = desc.value;
	const date_val = date.value;

	if (category_val.length === 0) {
		alert("enter valid category");
		return;
	}
	if (amt_val <= 0 || isNaN(amt_val)) {
		alert("enter valid amount");
		return;
	}
	if (desc_val.length === 0) {
		alert("enter valid description");
		return;
	}
	if (date_val.length === 0) {
		alert("enter valid date");
		return;
	}

	expenses.push({ category_val, amt_val, desc_val, date_val });

	if (category_val === "Income") {
		total_amt += amt_val;
	}
	if (category_val === "Expense") {
		total_amt -= amt_val;
	}

	total_amt_cell.textContent = total_amt;

	const newRow = expensetablebody.insertRow();

	const categorycell = newRow.insertCell();
	const amountcell = newRow.insertCell();
	const desccell = newRow.insertCell();
	const datecell = newRow.insertCell();
	const actioncell = newRow.insertCell();

	const deletebtn = document.createElement("button");
	deletebtn.textContent = "Delete";
	deletebtn.classList.add("delete-btn");

	deletebtn.addEventListener("click", function () {
		expenses.splice(expenses.indexOf(expense), 1);
		if (category_val === "Income") {
			total_amt -= amt_val;
		}
		if (category_val === "Expense") {
			total_amt += amt_val;
		}
		total_amt_cell.textContent = total_amt;
		expensetablebody.removeChild(newRow);
	});

	//display in the table
	const expense = expenses[expenses.length - 1];
	categorycell.textContent = expense.category_val;
	amountcell.textContent = expense.amt_val;
	desccell.textContent = expense.desc_val;
	datecell.textContent = expense.date_val;
	actioncell.appendChild(deletebtn);
});

for (const expense of expenses) {
	if (category_val === "Income") {
		total_amt += amt_val;
	}
	if (category_val === "Expense") {
		total_amt -= amt_val;
	}

	total_amt_cell.textContent = total_amt;

	const newRow = expensetablebody.insertRow();

	const categorycell = newRow.insertCell();
	const amountcell = newRow.insertCell();
	const desccell = newRow.insertCell();
	const datecell = newRow.insertCell();
	const actioncell = newRow.insertCell();

	const deletebtn = document.createElement("button");
	deletebtn.textContent = "Delete";
	deletebtn.classList.add("delete-btn");

	deletebtn.addEventListener("click", function () {
		expenses.splice(expenses.indexOf(expense), 1);
		if (category_val === "Income") {
			total_amt -= amt_val;
		}
		if (category_val === "Expense") {
			total_amt += amt_val;
		}
		total_amt_cell.textContent = total_amt;
		expensetablebody.removeChild(newRow);
	});

	//display in the table
	const expense = expenses[expenses.length - 1];
	categorycell.textContent = expense.category_val;
	amountcell.textContent = expense.amt_val;
	desccell.textContent = expense.desc_val;
	datecell.textContent = expense.date_val;
	actioncell.appendChild(deletebtn);
}
