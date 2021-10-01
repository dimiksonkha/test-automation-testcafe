import { Selector, t } from "testcafe";

class Navbar{
    constructor(){
        //selectors
        this.searchBox = Selector('#search');
    }

    async search(text){
        await t
        .typeText(this.searchBox, text, {paste:true})
        .pressKey('enter');
    }

}
export default Navbar