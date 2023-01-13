import mongoose from "mongoose";
import { Card } from "../models/card.js"

export const addNewCard = (req, res) => {
    let newCard = new Card(req.body);
    console.log(req.body);
    newCard.save((err, card) => {
        if(err){
            res.send(err);
        }
        res.json(card);
    });
};

export const getCards = (req, res) => {
    Card.find({}, (err, card) => {
        if(err){
            res.send(err);
        }
        res.json(card);
    });
};

