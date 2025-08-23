"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const getProducts = async () => {
    try {
        const productsCollection=await dbConnect(collectionNames?.PRODUCTS)
        const products = productsCollection.find({}).toArray();
        return products;
    } catch (error) {
        console.log(error)
        return []
    }
}