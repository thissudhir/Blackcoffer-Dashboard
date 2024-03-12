import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        toatlSales: Number,
        toatlUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        toatlSales: Number,
        toatlUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
