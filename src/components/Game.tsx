import React from "react";
import { Card } from "./Cards";
import type { PlayingCard } from "../types";
import "./Game.css";

export default function Game() {
  const cards: PlayingCard[] = [
    { rank: "A", suit: "Hearts" },
    { rank: "K", suit: "Diamonds" },
    { rank: "Q", suit: "Clubs" },
    { rank: "J", suit: "Spades" },
    { rank: "10", suit: "Hearts" },
  ];

  return (
    <div className="game">
      <div className="stats">
        <div>Mynter: 100</div>
        <div>Innsats: 10</div>
        <div>Hånd: Royal Flush</div>
      </div>

      <div className="card-row">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <div className="buttons">
        <button>Deal</button>
        <button>Draw</button>
      </div>
    </div>
  );
}
