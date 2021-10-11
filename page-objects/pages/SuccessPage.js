const { Selector, t } = require("testcafe");

class SuccessPage{
    
    constructor(){

         this.actualSuccessMessage = Selector('#content > h1');       

    }

    async validateSuccessMessage(expectedSuccessMessage){
        await t.expect(this.actualSuccessMessage.innerText).contains(expectedSuccessMessage);

        
    }



}
export default SuccessPage