import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import clientRoutes from "./routes/client.js";
import salesRoutes from "./routes/sales.js";

import User from "./models/Users.js"; // Importing data or injecting dummy data.
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
} from "./data/data.js";
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transactions.js";
import { dataProvided } from "./data/jsondata.js";
import JsonData from "./models/JsonData.js";

// CONFIGRATATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/general", generalRoutes);
app.use("/client", clientRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 8800;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Connected succesfully! to the PORT: ${PORT}`);
      //   User.insertMany(dataUser);
      // Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
      // Transaction.insertMany(dataTransaction);
      JsonData.insertMany(dataProvided);
    })
  )
  .catch((error) => console.log(`${error}`));
