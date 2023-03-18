import React, {useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import PageRoutes from "./Routes/Routes";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <NavBar></NavBar>
      <PageRoutes />
    </Router>
  );
}
