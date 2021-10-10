const { Selector, t } = require("testcafe");

class LoginPage{
    
    constructor(){
         this.emailField = Selector('#input-email');
         this.passwordField = Selector('#input-password');
         this.loginButton = Selector('input').withAttribute('type','submit');
         this.actualHeading = Selector('#content > h2:nth-child(1)').value;      

    }

    async setEmail(email){
        await t.typeText(this.emailField, email, {paste:true});
    }

    async setPassword(password){
        await t.typeText(this.passwordField, password, {paste:true});
    }

    async clickLoginButton(){
     await t.click(this.loginButton);
    }

    async validateSuccessfullLogin(expectedSuccessMessage){
        await t.expect(actualSuccessMessage).contains(expectedSuccessMessage);
    }

    getActualHeading(){
        return this.actualHeading;
    }



}
export default LoginPage