export default class Product{
    
    constructor(prodId,prodName, category, price=0,totalBuy=1){
        this.prodId = prodId;
        this.prodName = prodName;
        this.category = category;
        this.price= price;
        this.setTotalBuy = totalBuy;

    }

    setPrice(totalPrice){
        const totalPrice = this.price * this.totalBuy
        return totalPrice;
    }
}