import { createBrowserRouter } from "react-router-dom";
import RNDPages from "../pages/RNDPages";
import TestPage from "../pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RNDPages />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
