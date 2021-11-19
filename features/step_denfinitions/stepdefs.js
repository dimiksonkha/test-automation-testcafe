const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const loginPage = require('../../page-objects/pages/LoginPage');
const URL = `https://opencart.abstracta.us/index.php?route=account/login`


Given('I am on the login page', async function () {

    await testController.navigateTo(URL);
    //const getPageUrl = ClientFunction(()=> window.location.href);
    //await testController.expect(getPageUrl()).contains("login");

  });

  When('I type {string} and {string}', async function (username, password) {
    await testController.typeText(loginPage.LoginPage.emailField(),username);
    await testController.typeText(loginPage.LoginPage.passwordField(),password);  
 });

  When('I click on the login button', async function () {

    await testController.click(loginPage.LoginPage.loginButton());

  });

  Then('I should see the {string} page', async function (exceptedHeading) {

    await testController.expect(loginPage.LoginPage.actualHeading).contains(exceptedHeading);

  });



  


