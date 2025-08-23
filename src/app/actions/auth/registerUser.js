"use server";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {

    try {
        //  Need to check if unique username was given
        const result = await dbConnect(collectionNames.USERS).insertOne(payload);
        return {
            success: true,
            acknowledged: result?.acknowledged,
            insertedId: result?.insertedId.toString(), // ✅ Convert ObjectId to string
        };
    } catch (error) {
        console.log(error)
        return null
    }
}