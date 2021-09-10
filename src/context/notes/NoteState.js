import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "61375b475c6a2724a04020c21",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Omkar's Second Note",
            "description": "Second note description updated",
            "tag": "Fudy",
            "timestamp": "2021-09-07T12:29:59.893Z",
            "__v": 0
        },
        {
            "_id": "61375bb65c6a2724a04020c42",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Second Note",
            "description": "Second note description",
            "tag": "Personal",
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
        },
        {
            "_id": "61375b475c6a2724a04020c23",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Omkar's Second Note",
            "description": "Second note description updated",
            "tag": "Fudy",
            "timestamp": "2021-09-07T12:29:59.893Z",
            "__v": 0
        },
        {
            "_id": "61375bb65c6a2724a04020c44",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Second Note",
            "description": "Second note description",
            "tag": "Personal",
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
        },
        {
            "_id": "61375b475c6a2724a04020c25",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Omkar's Second Note",
            "description": "Second note description updated",
            "tag": "Fudy",
            "timestamp": "2021-09-07T12:29:59.893Z",
            "__v": 0
        },
        {
            "_id": "61375bb65c6a2724a04020c46",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Second Note",
            "description": "Second note description",
            "tag": "Personal",
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
        },
        {
            "_id": "61375b475c6a2724a04020c27",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Omkar's Second Note",
            "description": "Second note description updated",
            "tag": "Fudy",
            "timestamp": "2021-09-07T12:29:59.893Z",
            "__v": 0
        },
        {
            "_id": "61375bb65c6a2724a04020c48",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Second Note",
            "description": "Second note description",
            "tag": "Personal",
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Funtion to add a note
    const addNote = (title, description, tag) => {
        // TODO: API call to add note
        let note = {
            "_id": "61375bb65c6a2724a04020c48",
            "user": "6134ee633a608887d6f3ff05",
            "title": title,
            "description": description,
            "tag": tag,
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
        }
        
        setNotes(notes.concat(note));
    }

    // Function to delete a note
    const deleteNote = (id) => {
        // TODO: API call to delete note
        const newNotes = notes.filter(note => note._id !== id)
        setNotes(newNotes);
    }

    // Function to edit a note
    const editNote = () => {
        
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
