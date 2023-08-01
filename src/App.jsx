import React, { useState } from "react";
import { BasicTable } from "./components/BasicTable";
import { PaginationTable } from "./components/Pagination";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();

  return (
    <div>
      {/* <BasicTable /> */}
      <QueryClientProvider client={client}>
        <PaginationTable />
      </QueryClientProvider>
    </div>
  );
};

export default App;
