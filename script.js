let inputForm = document.getElementById("inputForm");
let detailTable = document.getElementById("detailTable");
let dateInput = new Date();
let descInput = document.getElementById("descInput");
let amountIncome = document.getElementById("amountIncome");
let amountExpense = document.getElementById("amountExpense");

let transType = "";
let transAmt = 0;
let serialNo = 1;

let myAccount = {
	name: "Masai School",
	income: 100,
	expense: 0,
	balance: 100
};

insertLine(
	serialNo,
	new Date(),
	"Initial Balance",
	"Credit",
	myAccount.income - myAccount.expense,
	myAccount.balance
);

inputForm.addEventListener("submit", e => {
	e.preventDefault();
	addTransaction(myAccount);
});

function addTransaction(account) {
	account.income = account.income + eval(amountIncome.value);
	account.expense = account.expense + eval(amountExpense.value);
	account.balance = account.income - account.expense;

	transAmt = eval(amountIncome.value) - eval(amountExpense.value);
	if (transAmt < 0) {
		transType = "Drop";
	} else {
		transType = "Credit";
	}

	serialNo += 1;
	insertLine(serialNo, dateInput, descInput.value, transType, transAmt, account.balance);
	descInput.focus();
}

function insertLine(sl, date, desc, type, amount, balance) {
	let lineToInsert = `<tr>
    <td scope="row" class="sl">${sl}</td>
    <td class="date"> ${date.toUTCString()}</td>
    <td class="desc"> ${desc}</td>
    <td class="type"> ${type}</td>
    <td class="amount"><i class="fas fa-rupee-sign"></i> ${amount}</td>
    <td class="balance"><i class="fas fa-rupee-sign"></i> ${balance}</td>
  </tr>`;
	detailTable.insertAdjacentHTML("beforeend", lineToInsert);
}
