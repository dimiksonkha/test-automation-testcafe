const { Selector, t } = require("testcafe");

class SuccessPage{
    
    constructor(){

         this.actualSuccessMessage = Selector('#content > h1').innerText;       

    }

    validateSuccessMessage(expectedSuccessMessage){
        
    }



}
export default SuccessPage