// App.js
import React from "react";
import { ThemeProvider } from "./context"; 
import Header from "./components/header";
import FrontPage from "./components/frontPage";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <FrontPage/>
     
    </ThemeProvider>
  );
};

export default App;
