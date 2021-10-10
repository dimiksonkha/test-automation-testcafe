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
    async setEmail(email){
        await t.typeText(this.emailField, email, {paste:true});
        
    }
    async setTelephoneNumber(phoneNumber){
        await t.typeText(this.telephoneField, phoneNumber, {paste:true});

    }

    async setPassword(password){
        await t.typeText(this.emailField, email, {paste:true});
        await t.typeText(this.emailField, email, {paste:true});

    }

    async agreePrivacyPolicy(){
        await t.click(this.privacyPolicyCheckbox);  

    }

    async continueRegistration(){
        await t.click(this.continueRegistrationButton);   
    }

    async validateSuccessMessage(expectedSuccessMessage){
        await t.expect(actualSuccessMessage).contains(expectedSuccessMessage);
    }



}
export default RegistrationPage