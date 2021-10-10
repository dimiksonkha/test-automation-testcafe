const { Selector, t } = require("testcafe");

class Page{
    
    constructor(){
     

    }

    async visitHome(){
        await t.navigateTo('/');
    }

    async visitRegistrationPage(){
     await t.navigateTo('/index.php?route=account/register');
    }

    async visitLoginPage(){
        await t.navigateTo('/index.php?route=account/login');
    }

    async validatePathInPageURl(path){
         
    }

    async validatePageTitle(title){
       
    }

    async validateTextInPageURl(text){
       
    }


}
export default Page