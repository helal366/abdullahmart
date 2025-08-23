"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const postProduct = async (product) => {
  try {
    const result = await dbConnect(collectionNames.PRODUCTS).insertOne(product);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};