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
