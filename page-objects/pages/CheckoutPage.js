const { Selector, t } = require("testcafe");

class CheckoutPage{
    
    constructor(){
         this.gustCheckout = Selector(':nth-child(1) > :nth-child(4) > label');
         this.continueAccountButton = Selector('#button-account');
         this.billingFirstName = Selector('#input-payment-firstname');
         this.billingLastName = Selector('#input-payment-lastname');
         this.billingEmail = Selector('#input-payment-email');
         this.billingPhoneNumebr = Selector('#input-payment-telephone');
         this.billingAddressOne = Selector('#input-payment-address-1');
         this.billingCity = Selector('#input-payment-city');
         this.billingPostcode = Selector('#input-payment-postcode');
         this.billingCountrySelect = Selector('#input-payment-country');
         this.billingCountryOption = billingCountrySelect.find('option');
         this.billingStateSelect = Selector('#input-payment-zone');
         this.billingStateOption = billingStateSelect.find('option');
         this.paymentAddressButton = Selector('#button-payment-address');
         this.continueBillingInfoButton = Selector('#button-guest');
         this.continueShippingInformationButton = Selector('#button-shipping-address');
         this.continueDeliveryMethodButton = Selector('#button-shipping-method');
         this.termsAndConditionForRegistredCustomerCheckbox = Selector('[type="checkbox"]');
         this.termsAndConditionForGuestCustomerCheckbox = Selector('.pull-right [type="checkbox"]');
         this.continuePaymentMethodButton = Selector('#button-payment-method');
         this.confirmOrderButton = Selector('#button-confirm');



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