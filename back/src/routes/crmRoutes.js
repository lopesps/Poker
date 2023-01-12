import express from 'express';
import { addNewContact, 
         getContacts, 
         getContactWhithID, 
         updateContact, 
         deleteContact } from '../controllers/crmController.js';

const router = express.Router();

router.route('/contact')
//get all contacts
.get((req, res, next) => {
    //middleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
}, getContacts)

//post a new contact
.post(addNewContact);


router.route('/contact/:contactId')
    //get specific contact
    .get(getContactWhithID)

    //update a contact
    .put(updateContact)

    //delete a contact
    .delete(deleteContact)

export default router;