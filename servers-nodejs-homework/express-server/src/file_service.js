import fs from "fs";
import {v4 as uuidv4} from "uuid";


const writeToFile = (path, data) => {
    fs.writeFileSync(path, data);
};



const readFromFile = (path) => {
    const content = fs.readFileSync(path, { encoding: "utf-8" });

    return content
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

const editProductId = (path, name, price, rating, description, category, isInStock, productId) => {

    // const editProduct = updateProduct.filter((product) => product.id === )
}



// Remove a product by id

export const removeProductId = (path, productId) => {
    const arrayProducts = readProducts(path);

    const filteredProduct = arrayProducts.filter((product) => product.id !== productId);
    
    if(filteredProduct.length === arrayProducts.length){
        writeToFile(path, JSON.stringify(arrayProducts, null, 2));
        return filteredProduct
    }
}


// export const removeProductId = (path, productId) => {
//     const arrayProducts = readProducts(path);

//     const deletedProduct = arrayProducts.findIndex((product) => product.id === productId);
    
//     if(deletedProduct !== -1){
//         arrayProducts.splice(deletedProduct, 1);
//         writeToFile(path, JSON.stringify(arrayProducts, null, 2));
//         return deletedProduct
//     }
// }

// Remove all products from the products.json

export const removeAllProducts = (path) => {
    let arrayProducts = readProducts(path);

    if(arrayProducts){
        arrayProducts = [];
        writeToFile(path,JSON.stringify(arrayProducts, null, 2))
        return arrayProducts
    }
}



// Set product to be out of stock by id

const outOfStock = (path, productId, status) => {
    const arrayProducts = readProducts(path);

    const statusProduct = arrayProducts.filter((product) => product.id !== productId)
    if(statusProduct){}
}