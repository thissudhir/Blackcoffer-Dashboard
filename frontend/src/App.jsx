import { useMemo, useState } from "react";
import "./style.scss";
import { Login } from "./pages/Login";
import { themeSettings } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./scenes/dashboard/Dashboard";
import { Layout } from "./scenes/layout/Layout";
import { Products } from "./scenes/products/Products";
import { Customers } from "./scenes/customers/Customers";
import { Transactions } from "./scenes/transactions/Transactons";
import { JsonData } from "./scenes/JsonData/JsonData";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/jsonData" element={<JsonData />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
