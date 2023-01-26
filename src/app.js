import express from "express";
import cors from "cors";
import { connectDatabase } from "./db/db.js";
import products from "./routes/products.js";

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(products)
await connectDatabase();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
