function newPrice(currentPrice, discount){
    if(!Number.isFinite(currentPrice) || !Number.isFinite(discount)){
    return "Invalid"        
    }
    let discountedPrice = (currentPrice/100)*discount;
    let afterDiscount = (currentPrice - discountedPrice);
    
    if(afterDiscount < 0){
    return "Invalid"
    }
    return afterDiscount.toFixed(3);

}
console.log(newPrice(500, "5"));