// App.js
import React from "react";
import { ThemeProvider } from "./context"; 
import Header from "./components/header";
import FrontPage from "./components/frontPage";
import Footer from "./components/Footer";
import Satisfy from "./components/satisfy";
import Brand from "./components/brand";
 


const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <FrontPage/>
      <Satisfy/>
      <Brand/>
      <Footer/>
     
    </ThemeProvider>
  );
};

export default App;
