<h1 align="center">~Bank Account Application~</h1>
<div align="center">
<img src="https://github.com/MaxBrockbank.png" width="200px" height="auto" >
<img src="https://github.com/svealinnea.png" width="200px" height="auto" >
</div>
<p align="center">Authored by Max Brockabnk & Svea Wade</p>
<p align="center">Updated on Nov 1, 2020</p>

## Description
Bank account application that allows you to start new accounts and see the account details.

## Set-up Instructions
1. Clone this repo to your desktop.
2. Open index.html in the browser of your choice.
* _Alternatively you can just click [HERE](#)_

## Technologies Used
* HTML
* CSS/Bootstrap
* JavaScript/jQuery

## Known Bugs
* 

## Specs
### Describe: bankAccount()

 1. Test: Should correctly create new bank object
  * Expect(bankAccount().toEqual(newBank))

2. Test: Should correctly create new account object
* Expect(bankAccount().toEqual(newAccount))

3. Test: Should correctly add new account object to bank object
* Expect(bankAccount(newAccount).toEqual(newBank.newAccount))

4. Test: Should correctly loop through bank object accounts and display on the HTML page
*  Expect(bankAccount(newBank.newAccount).toEqual(pageDisplay.html(newBank.newAccount)))


## Legal
* Copyright © 2020 Max Brockbank & Svea Wade
* This software is licensed under the MIT license