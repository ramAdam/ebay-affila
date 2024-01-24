const products = [
    {
        id: 23432,
        title: "Product 1",
        description: "This is the first product",
        url: "https://i.ebayimg.com/images/g/7zIAAOSw5dFlgLEW/s-l500.jpg",
        price: 10.99,
        created_at: new Date().toISOString(),
        orderItem: []
    },
    {
        id: 23432432,
        title: "Product 2",
        description: "This is the second product",
        url: "https://i.ebayimg.com/thumbs/images/g/w8MAAOSwXL9lrFBW/s-l500.webp",
        price: 19.99,
        created_at: new Date().toISOString(),
        orderItem: []
    },
    {
        id: 23432432432,
        title: "Product 3",
        description: "This is the third product",
        url: "https://i.ebayimg.com/thumbs/images/g/E-cAAOSwIO1h0C2K/s-l500.webp",
        price: 15.99,
        created_at: new Date().toISOString(),
        orderItem: []
    },
    {
        id: 23432432432432,
        title: "Product 4",
        description: "This is the fourth product",
        url: "https://i.ebayimg.com/thumbs/images/g/0jUAAOSwf0lldIJ5/s-l500.webp",
        price: 10.99,
        created_at: new Date().toISOString(),
        orderItem: []
    }
];


export function generateFakeProducts() {

    return products;
}

export function generateRandomProduct() {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    return randomProduct;
}