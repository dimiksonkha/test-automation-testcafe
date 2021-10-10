const { Selector, t } = require("testcafe");

class RegistrationPage{
    
    constructor(){
         this.firstNameField = Selector('#input-firstname');
         this.lastNameField = Selector('#input-lastname');
         this.emailField = Selector('#input-email');
         this.telephoneField = Selector('#input-telephone');
         this.passwordField = Selector('#input-password');
         this.confirmPasswordField = Selector('#input-confirm');
         this.privacyPolicyCheckbox = Selector('input[type="checkbox"]');
         this.continueRegistrationButton = Selector('input').withAttribute('type','submit');
         this.actualSuccessMessage = Selector('#content  p:nth-child(3)').value;
         

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
        await t.typeText(this.passwordField, password, {paste:true});
        await t.typeText(this.confirmPasswordField, password, {paste:true});

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