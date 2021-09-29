import { Selector } from "testcafe";

fixture `Product Order as Registered Customer`
.page `http://opencart.abstracta.us/`
.before(async t=>{
    //login

})
.beforeEach(async t=>{
    //preserve cookie 

})

test('should be able to search a product', async t =>{
    //validate text in page url
    //validate page title

});