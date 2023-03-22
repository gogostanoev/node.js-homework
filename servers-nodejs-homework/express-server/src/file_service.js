import fs from "fs";
import {v4 as uuidv4} from "uuid";


const writeToFile = (path, data) => {
    fs.writeFileSync(path, data);
};



const readFromFile = (path) => {
    const content = fs.readFileSync(path, { encoding: "utf-8" });

    return content
};


export const appendToFile = (path, data) => {
    fs.appendFileSync(path, data);
};



// Get all products

export const readProducts = (path) => {

    const products = readFromFile(path);

    const parsedProducts = JSON.parse(products);

    return parsedProducts
};



// Get product by id

export const readProductId = (path, productId) => {

    const readArrayProduct = readProducts(path);

    const readProduct = readArrayProduct.filter((product) => product.id === productId);
    return readProduct
};


// Add a product

export const addProduct = (path, name, price, rating, description, category, isInStock) => {

    const product = {
        id: uuidv4(),
        name: name,
        price: price,
        rating: rating,
        description: description,
        category: category,
        stock: isInStock
    }

    const allProducts = readProducts(path);

    allProducts.push(product);
    console.log(allProducts);

    writeToFile(path, JSON.stringify(allProducts, null, 2))
}


// Edit a product by id

export const editProductId = (path, productId) => {
    const arrayProducts = readProducts(path);

    const editProduct = arrayProducts.map((product) => {
        if(product.id === productId){

            return {
                ...product,
                rating: "1/5"
            }
        }
        return product
    })

    writeToFile(path, JSON.stringify(editProduct, null, 2))
}



// Remove a product by id

export const removeProductId = (path, productId) => {
    const arrayProducts = readProducts(path);

    const filteredProduct = arrayProducts.filter((product) => product.id !== productId);
    
    if(filteredProduct.length !== arrayProducts.length){

        writeToFile(path, JSON.stringify(filteredProduct, null, 2));
    }
}


// Remove all products from the products.json

export const removeAllProducts = (path) => {
    writeToFile(path, JSON.stringify([], null, 2))
}



// Set product to be out of stock by id

export const outOfStock = (path, productId) => {
    const arrayProducts = readProducts(path);

    const statusProduct = arrayProducts.map((product) => {
        if(product.id === productId){
            
            return {
                ...product,
                stock: false
            }
        }
        return product
    })

    writeToFile(path, JSON.stringify(statusProduct, null, 2))
}

// Create route for add product (by id) to cart; use find and then push to cart 

// export const addToCart = (path, productId) => {
//     const arrayProducts = readProducts("../db/products.json");
    
//     const desiredProduct = arrayProducts.filter((product) => product.id === productId);
//     const cart = readProducts(path);
//     cart.push(desiredProduct[0]);

//     // if(desiredProduct){
//     //     const cart = readProducts(path);
//     //     cart.push(desiredProduct);
//     // } 

//     writeToFile(path, JSON.stringify(cart, null, 2))
//     return "Product has been successfully added to the cart!"
// }   



export const addToCart = (arr, productId, path) => {
    
    const desiredProduct = arr.filter((product) => product.id === productId);

    if(desiredProduct){
        const cart = readProducts(path);
        cart.push(desiredProduct[0]);
        writeToFile(path, JSON.stringify(cart, null, 2))
    } 

    // writeToFile(path, JSON.stringify(cart, null, 2))
    return "Product has been successfully added to the cart!"
}