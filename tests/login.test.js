import { Selector } from "testcafe";
import LoginPage from "../page-objects/pages/LoginPage";
import { ClientFunction } from "testcafe";

const loginPage = new LoginPage();

// ignor-prettier
fixture `Login using UI`
    .page `https://opencart.abstracta.us/index.php?route=account/login`

    const getPageUrl = ClientFunction(()=> window.location.href);
    console.log(getPageUrl)
    

test.meta('mode','ui')('login test', async t =>{
    //validate text in page URl
    await t.expect(getPageUrl()).contains("login");

    //validate page title 
    const expectedHeading = "My Account";
    
    // Actions
    loginPage.setEmail("sqa.test.eng@gmail.com");
    loginPage.setPassword("12345");
    loginPage.clickLoginButton(); 

    // Validation
    await t.expect('My Account').contains(expectedHeading);
});    
