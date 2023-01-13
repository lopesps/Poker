import express from 'express';
import {addNewCard, getCards} from '../controllers/card.js';

const router = express.Router();

router.route('/card')
//get all contacts
.get(getCards)

//post a new contact
.post(addNewCard);


/* router.route('/contact/:contactId')
    //get specific contact
    .get(getContactWhithID)

    //update a contact
    .put(updateContact)

    //delete a contact
    .delete(deleteContact) */

export default router;