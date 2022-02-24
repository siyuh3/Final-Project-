const myCart = [];

const cart = (state = myCart, action) => {
    const product = action.product;
    switch (action.type) {
        case 'add':
            return product
        case 'delete':
            return product

        case 'put-to-order':
            console.log("reducer put-to-order： ", action.user.asBuyer)
            return action.user.asBuyer;

        default:
            return state;
            break;
    }
}

export default cart;