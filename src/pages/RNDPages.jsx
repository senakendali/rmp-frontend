import PermintaanRnD from "../components/R&D/PermintaanR&D.jsx";
import SearchAndFilter from "../components/SearchAndFilter.jsx";
import Tabs from "../components/Tabs.jsx";
import Layout from "../components/layout/Layout.jsx";
import { useState } from "react";

const tabData = [
  { name: "permintaan", label: "List Permintaan" },
  { name: "pembelian", label: "Pembelian" },
];

const RNDPages = () => {
  const [activeTab, setActiveTab] = useState("permintaan");

  return (
    <Layout>
      <div className="border-b border-gray-200 mb-4">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">
          Permintaan Pengembangan Produk
        </h1>
      </div>
      <Tabs
        tabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SearchAndFilter />
      <PermintaanRnD />
    </Layout>
  );
};

export default RNDPages;
