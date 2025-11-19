// src\app\routes.tsx

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import About from "./About";

// ⚠ 若部署到 GitHub Pages，需要設定 basename
export const basename = import.meta.env.BASE_URL || "/";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                { path: "", element: <Home /> },
                { path: "about", element: <About /> },
            ],
        },
    ],
    { basename }
);

export default router;
