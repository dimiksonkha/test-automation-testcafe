const { Selector, t } = require("testcafe");

class SuccessPage{
    
    constructor(){

         const actualSuccessMessage = Selector('#content > h1').value;       

    }

    validateSuccessMessage(expectedSuccessMessage){
        
    }



}
export default SuccessPage