import { Selector } from "testcafe";

// ignor-prettier
fixture `Login using UI`
    .page `https://opencart.abstracta.us/index.php?route=account/login`

test('login test', async t =>{
    //validate text in page URl
    //validate page title 
    
    // login form submission
    await t.typeText('#input-email', "sd@gd.com");
    await t.typeText('#input-password', "12345");
    await t.click('input[type="submit"]');

    // login validation
    await t.expect(Selector('#content > h2:nth-child(1)').innerText).contains("My Account");
})    