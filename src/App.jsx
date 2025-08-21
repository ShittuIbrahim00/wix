// import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-montserrat flex flex-col justify-between">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
