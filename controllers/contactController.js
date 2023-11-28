 const asyncHandler = require("express-async-handler");
 const Contact = require("../models/contactModel")
 //@desc Get all contacts
 //@route GET /api/contacts
 //@access public
 const getContacts = asyncHandler( async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
   });
 //@desc Get all contacts
 //@route GET /api/contacts
 //@access public
 const getContact = asyncHandler(async(req,res)=>{
     const contact = await Contact.findById(req.params.id);
     if(!contact){
      res.status(404);
      throw new Error("Contact not found");
     }
    res.status(200).json(contact)
   });
//POST contact
 //@desc Create new contacts
 //@route POST /api/contacts
 //@access public
const postContact = asyncHandler( async(req,res)=>{
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
    })
    res.status(201).json(contact)
   });
//PUT contact
 //@desc Update contacts
 //@route PUT /api/contacts
 //@access public
 const putContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update contact for ID:${req.params.id}`})
   });
 //DELETE contact
 //@desc DELETE contacts
 //@route DELETE /api/contacts
 //@access public
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contact for ID:${req.params.id}`})
   });
   module.exports = {getContacts,getContact,postContact,putContact,deleteContact};