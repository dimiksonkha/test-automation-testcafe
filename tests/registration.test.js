import { Selector } from "testcafe";
import RegistrationPage from "../page-objects/pages/RegistrationPage";
import SuccessPage from "../page-objects/pages/SuccessPage";
import {generateRandomEmail} from "../utils/utils"

const registrationPage = new RegistrationPage();
const successPage = new SuccessPage();

fixture `User Registration`
.page `https://opencart.abstracta.us/index.php?route=account/register`
    
    // Test Data

    const firstName = 'Test';
    const lastName = 'User';
    const email = generateRandomEmail();
    const phoneNumber = '+882408451358';
    const password = "12345";
    const expectedSuccessPageHeading = "Account";

test('registration and login', async t =>{
    await t.setTestSpeed(1);
    //validate text in page URl
    //validate page title 

    // Registration form submission
    registrationPage.setFirstName(firstName);
    registrationPage.setLastName(lastName);
    registrationPage.setEmail(email);
    registrationPage.setTelephoneNumber(phoneNumber);
    registrationPage.setPassword(password);
    registrationPage.agreePrivacyPolicy();
    registrationPage.continueRegistration();

 
    //validate success message
    await t.expect("Account").contains(expectedSuccessPageHeading);
    
    //clear cookie
    // login


});





