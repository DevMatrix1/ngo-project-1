import { useState } from "react";
import "./App.css";
import News from "./components/News/News";
import Form from "./pages/Form/Form";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
    <div className="mt-12">
      <News />
      </div>
      <Form />
    </>
  );
}

export default App;
