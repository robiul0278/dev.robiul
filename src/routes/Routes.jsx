import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/projects",
            element: <Projects/>,
        }
      ]
    },
  ]);

export default router;