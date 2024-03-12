import React from "react";
import Header from "../../components/Header";
// import { useGetTransactionsQuery } from "state/api";

import { Box } from "@mui/material";

export const Transactions = () => {
  return (
    <Box>
      <Header title="TRANSACTIONS" subtitle="See your Transctions." />
    </Box>
  );
};
