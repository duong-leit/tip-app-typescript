import React from "react";
import Header from "./components/header";
import Container from "./components/container";
import "./assets/sass/main.scss";
import { HandleDataProvider } from "./components/Context.jsx";

function App() {
  return (
    <HandleDataProvider>
      <section className="page">
        <Header />
        <Container />
      </section>
    </HandleDataProvider>
  );
}

export default App;
