import { createBrowserRouter } from "react-router-dom";
import RNDPages from "../pages/RNDPages";
import TestPage from "../pages/TestPage";
import VendorManagement from "../pages/vendorManagement/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RNDPages />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/vendor-management/vendor-list",
    element: <VendorManagement />,
  },
]);

export default router;
