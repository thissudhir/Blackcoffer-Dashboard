import React from "react";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "../../state/api";

export const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px");
  console.log("data", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.7,
    },
    {
      field: "city",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.4,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="See your list of Users." />
      <Box mt={"40px"} height={"76vh"}>
        <DataGrid
          rows={data || []}
          columns={columns}
          getRowId={(row) => row._id}
          loading={isLoading || !data}
          // slots={{ toolbar: GridToolbar }}
          // slotProps={{
          //   toolbar: {
          //     showQuickFilter: true,
          //     quickFilterProps: { debounceMs: 500 },
          //   },
          // }}
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </Box>
  );
};
