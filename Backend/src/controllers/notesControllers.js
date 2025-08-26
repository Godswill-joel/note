import Note from "../models/Note.js";





export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()

        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getting notes", error)
        res.status(500).json({ message: "internally server error" });
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content })

        const Saved = await newNote.save();
        res.status(201).json(Saved);
    } catch (error) {

        console.error("error in creating notes", error)
        res.status(500).json({ message: "internally server error" });

    }
};


export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const Updated = await Note.findByIdAndUpdate(req.params.id, { title, content }, {new:true});


        if (!Updated) res.status(400).json({Message:"Not not found"});


        res.status(200).json({message: "Note updated successfully", Updated});
    } catch (error) {
        console.error("error in updtaing notes", error)
        res.status(500).json({ message: "internally server error" });
    }
};

export const deleteNote = (req, res) => {
    res.status(200).json({ message: "Note deleted successfully" });
};