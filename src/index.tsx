import React from "react";
import ReactDOM from "react-dom/client";
//NAO MUDAR A ORDEM DOS IMPORTS DE SCSS
import "./scss/reset.scss";
import "./scss/var.scss";
import "./scss/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
