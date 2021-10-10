const { Selector, t } = require("testcafe");

class CheckoutPage{
    
    constructor(){
         const gustCheckout = Selector(':nth-child(1) > :nth-child(4) > label');
         const continueAccountButton = Selector('#button-account');
         const billingFirstName = Selector('#input-payment-firstname');
         const billingLastName = Selector('#input-payment-lastname');
         const billingEmail = Selector('#input-payment-email');
         const billingPhoneNumebr = Selector('#input-payment-telephone');
         const billingAddressOne = Selector('#input-payment-address-1');
         const billingCity = Selector('#input-payment-city');
         const billingPostcode = Selector('#input-payment-postcode');
         const billingCountrySelect = Selector('#input-payment-country');
         const billingCountryOption = billingCountrySelect.find('option');
         const billingStateSelect = Selector('#input-payment-zone');
         const billingStateOption = billingStateSelect.find('option');
         const paymentAddressButton = Selector('#button-payment-address');
         const continueBillingInfoButton = Selector('#button-guest');
         const continueShippingInformationButton = Selector('#button-shipping-address');
         const continueDeliveryMethodButton = Selector('#button-shipping-method');
         const termsAndConditionForRegistredCustomerCheckbox = Selector('[type="checkbox"]');
         const termsAndConditionForGuestCustomerCheckbox = Selector('.pull-right [type="checkbox"]');
         const continuePaymentMethodButton = Selector('#button-payment-method');
         const confirmOrderButton = Selector('#button-confirm');



    }

    async clickGuestCheckout(){
         await t.click(this.gustCheckout);
      }
      
      async clickContinueAccountButton(){
        await t.click(this.continueAccountButton)
      }
  
      async setBillingFirstName(firstName){
        await t.typeText(this.billingFirstName, firstName, {paste:true});
  
      }
      async setBillingLastName(lastName){
        await t.typeText(this.billingLastName, lastName, {paste:true});
      }
  
      async setBillingEmail(email){
        await t.typeText(this.billingEmail, email, {paste:true});
      }
  
      async setBillingPhoneNumebr(phoneNumber){
        await t.typeText(this.billingPhoneNumebr, phoneNumber, {paste:true});
  
      }
  
      async setBillingAddressOne(address1){
        await t.typeText(this.billingAddressOne, address1, {paste:true});
      }
  
      async setBillingCity(city){
        await t.typeText(this.billingCity, city, {paste:true});
  
      }
  
      async setBillingPostcode(postcode){
        await t.typeText(this.billingPostcode, postcode, {paste:true});
  
      }
  
      async selectBillingCountry(country){
        await t
        .click(this.billingCountrySelect)
        .click(this.billingCountryOption.withText(country)); 
      }
      async selectBillingState(state){
        await t
        .click(this.billingStateSelect)
        .click(this.billingStateOption.withText(state));  
      }
  
      async clickContinueBillingInfoButtonAsRegisterdCustomer(){

          await t.click(this.paymentAddressButton);
          this.continueShippingInformation();
                
          
      }
      async clickContinueBillingInfoButton(){
          await t.click(this.continueBillingInfoButton);
              
    }
    async continueShippingInformation(){
        await t.click(this.continueShippingInformationButton);
      }
  
      async continueDeliveryMethod(){
        await t.click(this.continueDeliveryMethodButton);
          
      }
  
      async continuePaymentMethodAsRegisterCustomer(){
        await t
        .click(this.termsAndConditionForRegistredCustomerCheckbox)
        .click(this.continuePaymentMethodButton);
      }
  
      async continuePaymentMethodAsGuestCustomer(){
        await t
        .click(this.termsAndConditionForGuestCustomerCheckbox)
        .click(this.continuePaymentMethodButton);
        
      }
  
      async confirmOrder(){
        await t.click(this.confirmOrderButton);
      }


}
export default CheckoutPage