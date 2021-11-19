import { Selector } from "testcafe";
import RegistrationPage from "../page-objects/pages/RegistrationPage";
import SuccessPage from "../page-objects/pages/SuccessPage";
import {generateRandomEmail} from "../utils/utils"

const users = require('../data/data.json');
const registrationPage = new RegistrationPage();
const successPage = new SuccessPage();

fixture `User Registration`
.page `https://opencart.abstracta.us/index.php?route=account/register`
    
const expectedSuccessPageHeading = "Account";


users.forEach(user => {
    test('user registration @ddt', async t =>{

        // Test Data
        var firstName = user.firstName;
        var lastName = user.lastName;
        var email = generateRandomEmail();
        var phoneNumber = user.phoneNumber;
        var password = user.password;
        

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
});





