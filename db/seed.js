import { Card } from "../src/models/card.js";
import mongoose from "mongoose";

(function seedCards() {
  const deck = [];
  const cardNypes = ["Diamonds", "Clubs", "Hearts", "Spades"];
  const cardNames = [
    "Two",
    "Tree",
    "For",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  cardNypes.forEach((nype) => {
    cardNames.forEach((card, key) => {
      deck.push({ name: card, nype, number: key + 1 });
    });
  });

  Card.insertMany(deck);
  console.log(deck);
  return true;
})();
