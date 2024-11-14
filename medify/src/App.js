import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { CssBaseline } from "@mui/material";
import AppDownload from "./components/AppDownload/AppDownload";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Outlet />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
