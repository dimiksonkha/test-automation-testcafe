import { Selector } from "testcafe";

// ignor-prettier
fixture `Login using UI`
    .page `https://opencart.abstracta.us/index.php?route=account/login`

test('TestCafe login test', async t =>{
    
    // login form submission
    await t.typeText('#input-email', "sd@gd.com");
    await t.typeText('#input-password', "12345");
    await t.click('input[type="submit"]');

    // login validation
    await t.expect(Selector('#content > h2:nth-child(1)').innerText).contains("My Account");
})    