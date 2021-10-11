import { Selector } from "testcafe";
import Navbar from "../page-objects/components/Navbar";
import SearchPage from "../page-objects/pages/SearchPage";
import CheckoutPage from "../page-objects/pages/CheckoutPage";
import SuccessPage from "../page-objects/pages/SuccessPage";

const navbar = new Navbar();
const searchPage = new SearchPage();
const checkoutPage = new CheckoutPage();
const successPage = new SuccessPage();

fixture `Product Order `
.page `http://opencart.abstracta.us/`
.before(async t=>{
    //login


})
.beforeEach(async t=>{
    //await t.setTestSpeed(0.5);
    //await t.wait(5000); 

})

test('should be able to order a  product as guest customer', async t=>{
    
    //validate text in page url
    //validate page title

    //Search a Product {iPhone} then verify product search page and string 
    navbar.search('iPhone'); 

    //Validate text {iPhone } in page url

    //Validate search text {Search - iPhone} 
    searchPage.validateSearchText('Search - iPhone');

    //Add product to cart and validate product quantity
    searchPage.addProductToCart();
    searchPage.validateProductQuantityInCart('1 item(s)');
    
    //Go to checkout page and validate text in page url and page title
    searchPage.goCheckoutPage();

    //Continue as Guest Customer
    checkoutPage.clickGuestCheckout();
    checkoutPage.clickContinueAccountButton(); 
    
    //Filling up customer Billing Information
    checkoutPage.setBillingFirstName("Test");
    checkoutPage.setBillingLastName("Name");
    checkoutPage.setBillingEmail("new.user@users.com");
    checkoutPage.setBillingPhoneNumebr("+88132545");
    checkoutPage.setBillingAddressOne("address1");
    checkoutPage.setBillingCity("Newyork");
    checkoutPage.setBillingPostcode("1212");
    checkoutPage.selectBillingCountry("United States");
    checkoutPage.selectBillingState("Florida");
    checkoutPage.clickContinueBillingInfoButton();

    //Continue Delivery Method
    checkoutPage.continueDeliveryMethod();


    //Continue Payment Method
    checkoutPage.continuePaymentMethodAsGuestCustomer();

    //Confirm Order and validate success message
    checkoutPage.confirmOrder();
    successPage.validateSuccessMessage('Your order has been placed!');
   


});

