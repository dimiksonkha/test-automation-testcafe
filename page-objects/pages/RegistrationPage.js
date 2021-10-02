const { Selector, t } = require("testcafe");

class RegistrationPage{
    
    constructor(){
         const firstNameField = Selector('#input-firstname');
         const lastNameField = Selector('#input-lastname');
         const emailField = Selector('#input-email');
         const telephoneField = Selector('#input-telephone');
         const passwordField = Selector('#input-password');
         const confirmPasswordField = Selector('#input-confirm');
         const privacyPolicyCheckbox = Selector('input[type="checkbox"]');
         const continueRegistrationButton = Selector('input').withAttribute('type','submit');
         const actualSuccessMessage = Selector('#content  p:nth-child(3)').value;
         

    }

    async setFirstName(firstName){
        await t.typeText(this.firstNameField, firstName,{paste:true});

    }

    async setLastName(lastName){
        await t.typeText(this.lastNameField, lastName, {paste:true});
        
    }
    setEmail(email){
        await t.typeText(this.emailField, email, {paste:true});
        
    }
    setTelephoneNumber(phoneNumber){
        await t.typeText(this.telephoneField, phoneNumber, {paste:true});

    }

    setPassword(password){
        await t.typeText(this.emailField, email, {paste:true});
        await t.typeText(this.emailField, email, {paste:true});

    }

    agreePrivacyPolicy(){
        await t.click(this.privacyPolicyCheckbox);  

    }

    continueRegistration(){
        await t.click(this.continueRegistrationButton);   
    }

    validateSuccessMessage(expectedSuccessMessage){
        await t.expect(actualSuccessMessage).contains(expectedSuccessMessage);
    }



}