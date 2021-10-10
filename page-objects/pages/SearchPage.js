const { Selector, t } = require("testcafe");

class SearchPage{
    
    constructor(){
         const addToCartButton = Selector('button').withText('Add to Cart');
         const cartTotal = Selector('#cart-total').value;
         const actualSearchText = Selector('#content > h1').value;
         const cartSummeryButton = Selector('.btn-inverse');
         const checkoutPageLink = Selector('a[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"]:nth-child(2)');
    
    }

    async addProductToCart(){
        await t.click(this.addToCartButton);
    }
      
    async validateProductQuantityInCart(){

    }
      
    async validateSearchText(serachText){

     }
      
    async goCheckoutPage(){
     await t
     .click(this.cartSummeryButton)
     .click(this.checkoutPageLink);
    }


}
export default SearchPage