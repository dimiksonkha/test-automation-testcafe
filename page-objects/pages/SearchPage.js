const { Selector, t } = require("testcafe");

class SearchPage{
    
    constructor(){
         this.addToCartButton = Selector('button').withText('Add to Cart');
         this.cartTotal = Selector('#cart-total');
         this.actualSearchText = Selector('#content > h1');
         this.cartSummeryButton = Selector('.btn-inverse');
         this.checkoutPageLink = Selector('a[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"]:nth-child(2)');
    
    }

    async addProductToCart(){
        await t.click(this.addToCartButton);
    }
      
    async validateProductQuantityInCart(text){
        await t.expect(this.cartTotal.innerText).contains(text);

    }
      
    async validateSearchText(serachText){
        await t.expect(this.actualSearchText.innerText).contains(serachText);

     }
      
    async goCheckoutPage(){
     await t
     .click(this.cartSummeryButton)
     .click(this.checkoutPageLink);
    }

    getActualSearchText(){
        return this.actualSearchText;
    }


}
export default SearchPage