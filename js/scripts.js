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
  this.addres = address;
  this.deposit = deposit;
};





//ALL UI Logic

$(document).ready(function(){
  let firstBank = new Bank();

  $("#new-account").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    const deposit = $("#deposit").val();

    let newAccount = new Account(name, address, deposit);
    firstBank.addAccount(newAccount);
    console.log(firstBank);
  })


})