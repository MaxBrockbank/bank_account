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
    if(this.accounts[i].id === id){
      return this.accounts[i];
      console.log(this.accounts[i]);
    }
  }
}
//Account Business Logic
function Account(name, address, amount){
  this.name = name;
  this.address = address;
  this.amount = amount;
};

Account.prototype.depositBalance = function(amount){
  this.amount += amount;
}
Account.prototype.withdrawBalance = function(amount){
  this.amount -= amount;
}




//ALL UI Logic
function showAccountInfo(accountsToDisplay, bank) {
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
  $("#showAccount").on('click','.newTransaction' ,function(){
    console.log(this.id);
    currentAccount = bank.getAccount(parseInt(this.id));
    console.log(currentAccount);
    $("#current-account").text(currentAccount.name + ": $" + currentAccount.amount);
    $("#transactions").show();
  });

  $("#deposit").on('click', function(){
    let amount = parseInt($("#transactionAmount").val());
    currentAccount.depositBalance(amount);
    $("#transactions").hide();
    showAccountInfo(bank.accounts, bank)
  });

  $("#withdraw").on('click', function() {
    let amount = parseInt($("#transactionAmount").val());
    currentAccount.withdrawBalance(amount);
    $("#transactions").hide();
    showAccountInfo(bank.accounts, bank)
  })
}


$(document).ready(function(){
  let firstBank = new Bank();
  enableTransactions(firstBank);

  $("#new-account").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    const amount = parseInt($("#amount").val());

    let newAccount = new Account(name, address, amount);
    firstBank.addAccount(newAccount);
    showAccountInfo(firstBank.accounts, firstBank);
    
  });
});