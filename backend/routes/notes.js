const express = require('express');
const router= express.Router();
const fetchUser =require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');



//Route 1:  Get all the notes  using: GET "/api/auth/getUser"  - Login Required.
router.get('/fetchallnotes',fetchUser,async  (req,res)=>{
    try {
        const notes = await Notes.find({user: req.user.id});
    res.json(notes);
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).send("Some Error Occured");
    }
    
});

//Route 2:  Add a new note  using: POST "/api/auth/addnote"  - Login Required.
router.post('/addnote',fetchUser,[
    body('title', 'Enter a valid title(Min. Length :5) ').isLength({ min: 5 }),
    body('description',"Enter a valid title(Min. Length :8) ").isLength({ min: 8 }),
        ],async  (req,res)=>{
         try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });}
             
              const {title, description, tag}= req.body;
             const note = new Notes(
                { title,  description, tag, user: req.user.id}
             )
             const savedNote = await note.save();
             res.json(savedNote);
         } catch (error) {
            console.log("Error: ",error);
            res.status(500).send("Some Error Occured");
            }
  

});

//Route 3:  Update an existing  note  using: GET "/api/auth/updatenote"  - Login Required.
router.put('/updatenote/:id',fetchUser,async  (req,res)=>{
    try {
        const {title, description, tag } = req.body;
        // Create a new note object
        const newNote ={};
        if(title) newNote.title = title;
        if(description) newNote.description = description;
        if(tag) newNote.tag = tag;
    
        let note =await Notes.findById(req.params.id);
        if(!note) return res.status(404).send("Not Found");
        // Checking whether the logged in user is valid.
        if(note.user.toString() !== req.user.id) 
           return res.status(401).json("not allowed");
        
        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true}); // new:true -> parameter will make new if no such note.
        res.json({note});
    } catch (error) {
        console.log("Error: ",error);
            res.status(500).send("Some Error Occured");
    }
});

//Route 4:  Delete an existing  note  using: DELETE "/api/auth/deletenote"  - Login Required.
router.delete('/deletenote/:id',fetchUser,async  (req,res)=>{
    try {

        let note =await Notes.findById(req.params.id);
        if(!note) return res.status(404).send("Not Found");

        // Allow deletion only if user owns this note.
        if(note.user.toString() !== req.user.id) 
           return res.status(401).json("not allowed");
        
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({"Success": "Note has Deleted", note: note});
    } catch (error) {
        console.log("Error: ",error);
            res.status(500).send("Some Error Occured");
    }
});

module.exports = router;