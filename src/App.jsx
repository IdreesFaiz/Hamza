// App.js
import React from "react";
import { ThemeProvider } from "./context";
import Header from "./components/header";
import FrontPage from "./components/frontPage";
import Footer from "./components/Footer";
// import Satisfy from "./components/satisfy";
import Brand from "./components/brand";
import Complain from "./components/complain";
// import Samsung from "./components/samsung";
// import Latest from "./components/Latest";
// import LatestGrid from "./globle/LatestGrid";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <FrontPage />
      <Complain/>
      <Brand />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
