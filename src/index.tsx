import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Login from "./routes/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./theme/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider
      theme={createTheme({
        direction: "ltr",
        responsiveFontSizes: false,
        mode: "light",
      })}
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
