import express from "express";
const app = express();
import connection from "./src/config/db.js";
import dotenv from "dotenv";
import usersignupRoute from "./src/routes/userRoute/user.Routes.js";
import cookirParser from "cookie-parser";
import ProductRoute from "./src/routes/adminRoute/Product.Routes.js";
import ProductManagmentRoute from "./src/routes/productRoute/ProductManagment.routes.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookirParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// app.use(express.urlencoded({ extended: true }));

connection()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    })
  )
  .catch((error) => {
    "Server is not Running Due to Some Connection Problem.";
  });

app.use("/", ProductManagmentRoute);
app.use("/user", usersignupRoute);
app.use("/admin", ProductRoute);
