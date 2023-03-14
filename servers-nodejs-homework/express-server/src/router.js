import express, { response } from "express";
import { readProducts, readProductId, addProduct, removeProductId, removeAllProducts, outOfStock, editProductId } from "./file_service.js";


const router = express.Router();


// DONE
router.get("/read", (req, res) => {

    const products = readProducts("../db/products.json")
    if(products.length === 0){
        res.status(404).send({message: "No products found"})
    }else {
        res.send(products)
    }
})

// DONE
router.get("/read/:id", (req, res) => {

    const product = readProductId("../db/products.json", req.params.id);
    if(product.length === 0){
        res.status(404).send({message: "The desired product was not found"})
    }else {
        res.send(product)
    }
})

// DONE
router.post("/create", (req, res) => {
    // console.log(req.body)
    addProduct(
    "../db/products.json",
    req.body.name,
    req.body.price,
    req.body.rating,
    req.body.description,
    req.body.category,
    req.body.stock)

    res.send("The product has been successfully created.")
})


// Works perfectly as it should
router.delete("/:id", (req, res) => {

    const product = removeProductId("../db/products.json", req.params.id)
 
    if(product.length === 0){
        res.status(404).send({message: "Oops, it looks like there is nothing here"});
        return
    }   
    res.send({message: "The desired product has been successfully deleted"})    
})


// Works perfectly
router.delete("/", (req, res) => {

    const products = removeAllProducts("../db/products.json")

    if(products.length === 0){
        res.send("This section is already empty")
        return
    }
    res.send("All products have been successfully deleted")
})


router.patch("/:id", (req, res) => {

    const product = editProductId("../db/products.json", req.params.id)

    if(product.length === 0){
        res.status(404).send({message: "The specified product does not exist"})
        
    }else {
        res.send({message: "The product has been successfully edited"})
    }
})



router.patch("/stock/:id", (req, res) => {

    const product = outOfStock("../db/products.json", req.params.id)

    if(product.length === 0){
        res.status(404).send({message: "The specified product does not exist"})
        
    }else if(product.stock === false){
        res.send({message: "The product is already out of stock"})
        
    }else{
        res.sendStatus(200)
    }
})

export default router;