import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage, About, Techs, Footer } from "./components";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="h-[320vh]">
      <MainPage />
      <About />
      <Techs />
      <Footer />
    </main>
  </React.StrictMode>
);
