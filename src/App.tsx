import { useState } from "react";
import "./App.css";
import { Card } from "./components/Cards";

function App() {
  return (
    <div style={{ display: "flex", gap: "8px", padding: "40px" }}>
      <Card card={{ suit: "Hearts", rank: "A" }} />
      <Card card={{ suit: "Hearts", rank: "Q" }} />
      <Card card={{ suit: "Hearts", rank: "K" }} />
      <Card card={{ suit: "Spades", rank: "7" }} />
      <Card card={{ suit: "Clubs", rank: "10" }} faceDown />
    </div>
  );
}
export default App;
