const DB_HOST = 'http://localhost:8080';

class Api {
    // Products
    async listProducts() {
        return fetch(`${DB_HOST}/products`).then(res => res.json());
    }
    async getProductById(id) {
        return fetch(`${DB_HOST}/products/${id}`).then(res => res.json());
    }

    // Cart
    async listCart() {
        return fetch(`${DB_HOST}/cart`).then(res => res.json());
    }
    async addProductToCart(name, color, capacity, quantity) {
        return fetch(`${DB_HOST}/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, color, capacity, quantity }),
        })
    }
    async updateProductInCart(id, name, color, capacity, quantity) {
        return fetch(`${DB_HOST}/cart/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                color,
                capacity,
                quantity,
            })
        })
    }
    async deleteProductFromCart(id) {
        return fetch(`${DB_HOST}/cart/${id}`, {
            method: 'DELETE'
        });
    }
}
