export type Player = {
  id: number;
  name: string;
  coins: number;
};

export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";

export type PlayingCard = {
  suit: Suit;
  rank: Rank;
};

export type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

export type PokerHand = "royal flush" | "straight flush" | "four of a kind" | "full house" | "flush" | "straight" | "three of a kind" | "two pair" | "jacks or better" | "Nothing";
