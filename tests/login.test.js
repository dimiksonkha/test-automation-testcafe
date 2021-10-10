import { Selector } from "testcafe";
import LoginPage from "../page-objects/pages/LoginPage";

const loginPage = new LoginPage();

// ignor-prettier
fixture `Login using UI`
    .page `https://opencart.abstracta.us/index.php?route=account/login`
    

test('login test', async t =>{
    //validate text in page URl
    //validate page title 
    const expectedHeading = "My Account";
    
    // Actions
    loginPage.setEmail("sqa.test.eng@gmail.com");
    loginPage.setPassword("12345")
    loginPage.clickLoginButton(); 

    // Validation
    await t.expect('My Account').contains(expectedHeading);
});    