

export async function registerUser(payload) {
  try {
    const usersCollection = dbConnect(collectionNames?.USERS);
    const existing = await usersCollection.findOne({ email: payload?.email });
    if (existing) {
      return { success: false, message: "User already exists" };
    }
    await usersCollection.insertOne(payload); // ✅ includes role
    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "Internal server error" };
  }
}
