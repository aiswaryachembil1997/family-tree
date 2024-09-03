import React from "react";
import FamilyTree from "../src/components/FamilyTree";

function App() {
  return (
    <div className="App">
      <header className="bg-dark py-3">
        <h1 className="text-white text-center">Family Tree</h1>
      </header>
      <main className="container my-5">
        <FamilyTree />
      </main>
    </div>
  );
}

export default App;
