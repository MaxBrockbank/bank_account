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




//Account Business Logic
function Account(name, address, deposit){
  this.name = name;
  this.address = address;
  this.deposit = deposit;
};





//ALL UI Logic
function showAccountInfo(accountsToDisplay) {
  let accountInfo = $("div#showAccount");
  let htmlForNewAccount = "";
  accountsToDisplay.forEach(function(account) {
    htmlForNewAccount += "<p> Name: " + account.name +"</p> <p> Address: " + account.address +"</p> <p> Deposit: " + account.deposit +"</p>"
    
  });
  accountInfo.html(htmlForNewAccount);
  accountInfo.show();
  //$("#show").show();
  //$("#name").html(account.name);
  //$("#address").html(account.address);
  //$("deposit").html(account.deposit);
};

$(document).ready(function(){
  let firstBank = new Bank();

  $("#new-account").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    const deposit = $("#deposit").val();

    let newAccount = new Account(name, address, deposit);
    firstBank.addAccount(newAccount);
    showAccountInfo(firstBank.accounts);
    console.log(firstBank);
  });
});