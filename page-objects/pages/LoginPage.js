const {Selector} =  require('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.LoginPage = {
    emailField: function() {
        return select('#input-email');
      },
      passwordField: function() {
        return select('#input-password');
      },
      loginButton: function() {
        return select('input').withAttribute('type','submit');
      },
      actualHeading: function(){
        return select('#content > h2:nth-child(1)')('type','submit').value;
      }
}


//     async setEmail(email){
//         await t.typeText(this.emailField, email, {paste:true});
//     }

//     async setPassword(password){
//         await t.typeText(this.passwordField, password, {paste:true});
//     }

//     async clickLoginButton(){
//      await t.click(this.loginButton);
//     }

//     async validateSuccessfullLogin(expectedSuccessMessage){
//         await t.expect(actualSuccessMessage).contains(expectedSuccessMessage);
//     }

//     getActualHeading(){
//         return this.actualHeading;
//     }



// }
// export default LoginPage