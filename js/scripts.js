//Bank Business logic
function Bank(){
  this.accounts = [];
  this.accountNumber= 0;
};

Bank.prototype.addAccount = function(account){
  account.id = this.accountNumber;
  this.accountNumber ++;
  this.accounts.push(account);
};

Bank.prototype.getAccount = function(id){
  for(let i = 0; this.accounts.length; i++){
    if(this.accounts[i].id == id){
      return this.accounts[i];
    }
  }
}
//Account Business Logic
function Account(name, address, amount){
  this.name = name;
  this.address = address;
  this.amount = amount;
};





//ALL UI Logic
function showAccountInfo(accountsToDisplay) {
  let accountInfo = $("div#showAccount");
  let htmlForNewAccount = "";
  accountsToDisplay.forEach(function(account) {
    htmlForNewAccount += "<div class ='account'><p> Name: " + account.name +"</p> <p> Address: " + account.address +"</p> <p> Amount: $" + account.amount +"</p><button class='newTransaction btn btn-dark'id="+account.id+">Transaction</button></div>"; 
    
  });
  accountInfo.html(htmlForNewAccount); 
  $("#accountShow").show();
};

function enableTransactions(bank){
  let currentAccount;
  $(".newTransaction").on('click', function(){
    currentAccount = bank.getAccount(this.id);
    $("#current-account").text(currentAccount.name + ": $" + currentAccount.amount);
    $("#transactions").show();
  })
  $("#deposit").on('click', function(){
    let deposit = parseInt($("#transactionAmount").val());
    console.log(currentAccount);
    let balance = parseInt(currentAccount.amount);
    let total = balance + deposit;
    currentAccount.amount = total;
    console.log(currentAccount.amount)
    $("#transactions").hide();
    showAccountInfo(bank.accounts)
  })
  $("#withdraw").on('click', function() {
    let withdraw = parseInt($("#transactionAmount").val());
    let total = balance - withdraw;
    currentAccount.amount = total;
    console.log(currentAccount.amount)
    $("#transactions").hide();
    showAccountInfo(bank.accounts)
  })
}


$(document).ready(function(){
  let firstBank = new Bank();
  $("#new-account").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    const amount = $("#amount").val();

    let newAccount = new Account(name, address, amount);
    firstBank.addAccount(newAccount);
    showAccountInfo(firstBank.accounts);
    console.log(firstBank);
    enableTransactions(firstBank);
  });
});