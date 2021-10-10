const { Selector, t } = require("testcafe");

class SearchPage{
    
    constructor(){
         this.addToCartButton = Selector('button').withText('Add to Cart');
         this.cartTotal = Selector('#cart-total').value;
         this.actualSearchText = Selector('#content > h1').value;
         this.cartSummeryButton = Selector('.btn-inverse');
         this.checkoutPageLink = Selector('a[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"]:nth-child(2)');
    
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