import { Selector } from "testcafe";
import {generateRandomEmail} from "../utils/utils"

fixture `User Registration`
.page `https://opencart.abstracta.us/index.php?route=account/register`

    const firstName = 'Test';
    const lastName = 'User';
    const email = generateRandomEmail();
    const phoneNumber = '+882408451358';
    const password = "12345";
    const expectedSuccessPageHeading = "Account";

test('registration and login', async t =>{
    //validate text in page URl
    //validate page title 

    // Registration form submission
    await t.typeText('#input-firstname', firstName );
    await t.typeText('#input-lastname', lastName);
    await t.typeText('#input-email', email);
    await t.typeText('#input-telephone', phoneNumber);
    await t.typeText('#input-password', password);
    await t.typeText('#input-confirm', password);
    await t.click('input[type="checkbox"]');
    await t.click('input[type="submit"]');
    
    //validate success message
    await t.expect(Selector('#content h1').innerText).contains(expectedSuccessPageHeading);
    
    //clear cookie
    // login


});





