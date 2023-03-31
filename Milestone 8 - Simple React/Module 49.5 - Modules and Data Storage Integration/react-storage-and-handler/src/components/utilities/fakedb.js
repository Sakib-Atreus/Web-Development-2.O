const addToDb = id => {
    // let shoppingCart;
    let shoppingCart = {};

    const storeCard = localStorage.getItem('shopping-cart');
    if(storeCard){
        shoppingCart = JSON.parse(storeCard);
    }
    // else{
    //     shoppingCart = {};
    // }

    const quantity = shoppingCart[id];
    if(quantity){
        // console.log('Already Exits');
        const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
        // console.log('New Item Added');
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const storeCard = localStorage.getItem('shopping-cart');
    if(storeCard){
        const shoppingCart = JSON.parse(storeCard);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {addToDb, removeFromDb, deleteShoppingCart}