import express from "express";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/Users.js";
import Transaction from "../models/Transactions.js";
import JsonData from "../models/JsonData.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productStats);
  } catch (error) {
    res.satus(404).json({ message: error.message });
  }
};
export const getJsonData = async (req, res) => {
  try {
    const products = await JsonData.find();

    const jsonDataList = products.map((data) => ({
      intensity: data.intensity,
      sector: data.sector,
      topic: data.topic,
      insight: data.insight,
      region: data.region,
      country: data.country,
      relevance: data.relevance,
      pestle: data.pestle,
      source: data.source,
      title: data.title,
      likelihood: data.likelihood,
    }));

    res.status(200).json(jsonDataList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.satus(404).json({ message: error.message });
  }
};
export const getTransactions = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    const generatSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };
      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generatSort() : {};
    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page + pageSize)
      .limit(pageSize);
    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.satus(404).json({ message: error.message });
  }
};
