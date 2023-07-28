import { getProductById } from "./Menu.js";


export async function addToCart(id) {
    const product = await getProductById(id);
    const results = app.store.cart.filter(order => order.product.id === id);
    if (results.length === 1) {
        // Update de quantity
        app.store.cart = app.store.cart.map(order => order.product.id === id ? {...order, quantity: order.quantity+1} : order);
    } else {
        app.store.cart = [...app.store.cart, { product, quantity: 1 }];
    }
}

export function removeFromCart(id) {
    app.store.cart = app.store.cart.filter(order => order.product.id !== id);
}
