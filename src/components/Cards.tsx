import type { PlayingCard } from "../types";
import "./Card.css";

type CardProps = {
  card: PlayingCard;
  faceDown?: boolean;
};

const suitSymbols = {
  Hearts: "♥",
  Diamonds: "♦",
  Clubs: "♣",
  Spades: "♠",
};

export function Card({ card, faceDown = false }: CardProps) {
  if (faceDown) {
    return <div className="card card-back"></div>;
  }

  const isRed = card.suit === "Hearts" || card.suit === "Diamonds";
  return (
    <div className={`card ${isRed ? "red" : "black"}`}>
      <div>{card.rank}</div>
      <div>{suitSymbols[card.suit]}</div>
      <div>{card.rank}</div>
    </div>
  );
}
