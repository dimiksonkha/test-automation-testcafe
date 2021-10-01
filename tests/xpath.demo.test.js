import { Selector } from "testcafe";
import xPathToCss from "xpath-to-css";


// ignor-prettier
fixture.skip `Login using UI`
    .page `https://opencart.abstracta.us/index.php?route=account/login`
    

test('login test', async t =>{
    //validate text in page URl
    //validate page title 

    
    // Web Elements 
    const xPath = "/html/body/div[2]/div/div/div/div[2]/div/form/div[1]/input";
    const css = xPathToCss(xPath);
    const emailField = Selector(css);

    const passwordField = Selector('#input-password');
    const submitButton = Selector('input[type="submit"]');
    const actualHeadingInAuthorizedPage = Selector('#content > h2:nth-child(1)').innerText;
    const expectedHeadingInAuthorizedPage = "My Account";
    
    // Actions
    // await t.takeScreenshot();
    await t.typeText(emailField,"sd@gd.com");
    await t.typeText(passwordField, "12345");
    //await t.takeElementScreenshot(submitButton);
    await t.click(submitButton);

    // Validation
    await t.expect(actualHeadingInAuthorizedPage).contains(expectedHeadingInAuthorizedPage);
})    