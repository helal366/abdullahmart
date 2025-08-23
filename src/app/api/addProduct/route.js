import { postProduct } from "@/app/actions/products/postProduct";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const product = req.body;
      const result = await postProduct(product);

      if (result?.acknowledged) {
        return res.status(201).json({ message: "Product added successfully!", id: result.insertedId });
      } else {
        return res.status(500).json({ message: "Failed to add product" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
