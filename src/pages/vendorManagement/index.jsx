import Layout from "../../components/layout/Layout.jsx";
import { useState } from "react";
import TableVendor from "../../components/VendorManagement/TableVendor.jsx";
import SearchAndFilter from "../../components/SearchAndFilter.jsx";

const RNDPages = () => {
  return (
    <Layout>
      <div className="border-b border-gray-200 mb-4">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">Vendor </h1>
      </div>

      <SearchAndFilter />
      <TableVendor />
    </Layout>
  );
};

export default RNDPages;
