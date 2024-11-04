import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyBookings from "./pages/MyBookings";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "my-bookings", element: <MyBookings /> },
    ],
  },
]);

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
    },
  },
  typography:{
    fontFamily: "Poppins, sans-serif"
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          borderRadius:"8px",
          textTransform:"none"
        },
        contained:{
          color:"#ffffff"
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
