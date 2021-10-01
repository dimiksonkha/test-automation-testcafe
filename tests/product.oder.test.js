import { Selector } from "testcafe";
import Navbar from "../page-objects/components/Navbar";

const navbar = new Navbar();

fixture `Product Order as Registered Customer`
.page `http://opencart.abstracta.us/`
.before(async t=>{
    //login

})
.beforeEach(async t=>{
    //preserve cookie
    //await t.setTestSpeed(0.5);
    //await t.wait(5000); 

})

test('should be able to search a product', async t =>{
    //validate text in page url
    //validate page title
    
    //Actions
    navbar.search('iPhone'); 

});