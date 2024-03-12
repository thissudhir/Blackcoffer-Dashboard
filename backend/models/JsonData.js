import mongoose from "mongoose";

const JsonDataSchema = new mongoose.Schema(
  {
    // end_year: "",
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    // url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    region: String,

    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
  },
  { timestamps: true }
);

const JsonData = mongoose.model("JsonData", JsonDataSchema);
export default JsonData;
