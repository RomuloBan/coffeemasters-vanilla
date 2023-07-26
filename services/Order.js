import { getProductById } from "./Menu.js";


export async function addToCart(id) {
    const product = await getProductById(id);
    const results = app.store.cart.filter(order => order.id === id);
    if (results.length === 1) {
        // Update de quantity
        app.store.cart = app.store.cart.map(p => p.id === id ? {...p, quantity: p.quantiy+1} : p);
    } else {
        app.store.cart = [...app.store.cart, { product, quantity: 1 }];
    }
}

export function removeFromCart(id) {
    app.store.cart = app.store.cart.filter(p => p.id !== id);
}
