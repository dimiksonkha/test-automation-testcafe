const { Selector, t } = require("testcafe");

class LoginPage{
    
    constructor(){
         const emailField = Selector('#input-email');
         const passwordField = Selector('#input-password');
         const loginButton = Selector('input').withAttribute('type','submit');
         const actualSuccessMessage = Selector('#content > h2:nth-child(1)').value;

         

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


}
export default LoginPage