import React from "react";
import "./styles.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Body from "./components/body/body.component";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
