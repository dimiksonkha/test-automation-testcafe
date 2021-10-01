import { Selector } from "testcafe";
import {generateRandomEmail} from "../utils/utils"

fixture.skip `User Registration`
.page `https://opencart.abstracta.us/index.php?route=account/register`

    const firstName = 'Test';
    const lastName = 'User';
    const email = generateRandomEmail();
    const phoneNumber = '+882408451358';
    const password = "12345";
    const expectedSuccessPageHeading = "Account";

test('registration and login', async t =>{
    //validate text in page URl
    //validate page title 

    // Web Elements
    const firstNameField = Selector('#input-firstname');
    const lastNameField = Selector('#input-lastname');
    const emailField = Selector('#input-email');
    const telephoneField = Selector('#input-telephone');
    const passwordField = Selector('#input-password');
    const confirmPasswordField = Selector('#input-confirm');
    const agreementCheckbox = Selector('input[type="checkbox"]');
    const submitButton = Selector('input[type="submit"]');
    const actualSuccessPageHeading = Selector('#content h1').innerText;




    // Registration form submission
    await t.typeText(firstNameField, firstName );
    await t.typeText(lastNameField, lastName);
    await t.typeText(emailField, email);
    await t.typeText(telephoneField, phoneNumber);
    await t.typeText(passwordField, password);
    await t.typeText(confirmPasswordField, password);
    await t.click(agreementCheckbox);
    await t.click(submitButton);
    
    //validate success message
    await t.expect(actualSuccessPageHeading).contains(expectedSuccessPageHeading);
    
    //clear cookie
    // login


});





