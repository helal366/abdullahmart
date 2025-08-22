"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const isFavorites = async () => {
    try {
        const data = await dbConnect(collectionNames.PRODUCTS).find({isFavorite: true}).toArray();
        return data;
    } catch (error) {
        console.log(error)
        return []
    }

}