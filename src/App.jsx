// App.js
import React from "react";
import { ThemeProvider } from "./context"; 
import Header from "./components/header";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
     
    </ThemeProvider>
  );
};

export default App;
