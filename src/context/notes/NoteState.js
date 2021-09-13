import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const token = localStorage.getItem("token")

    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    const [alert, setAlert] = useState(null);

    // Function to display alerts
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });

        setTimeout(() => setAlert(null), 2000);
    }

    // Function to fetch all notes
    const fetchNotes = async () => {
        const response = await fetch(`${host}/api/notes/`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'auth-token': token }
        });

        const allNotes = await response.json();

        setNotes(allNotes)
    }
    
    // Funtion to add a note
    const addNote = async (title, description, tag) => {
        let note = {
            "title": title,
            "description": description,
            "tag": tag
        }

        const response = await fetch(`${host}/api/notes/new`, {
            method: 'post',
            body: JSON.stringify(note),
            headers: { 'Content-Type': 'application/json', 'auth-token': token }
        });

        const savedNote = await response.json();
        
        setNotes(notes.concat(savedNote));
        showAlert("Note added successfully!", "success")
    }

    // Function to delete a note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json', 'auth-token': token }
        });

        console.log("Note deleted:", await response.json());
        const newNotes = notes.filter(note => note._id !== id)
        setNotes(newNotes);
        showAlert("Note deleted successfully!", "success")
    }

    // Function to edit a note
    const editNote = async (id, title, description, tag) => {
        let note = {
            "title": title,
            "description": description,
            "tag": tag
        }

        const response = await fetch(`${host}/api/notes/update/${id}`, {
            method: 'put',
            body: JSON.stringify(note),
            headers: { 'Content-Type': 'application/json', 'auth-token': token }
        });

        const savedNote = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = savedNote.note.title
                newNotes[index].description = savedNote.note.description
                newNotes[index].tag = savedNote.note.tag
                break;
            }
        }

        setNotes(newNotes)
        showAlert("Note updated successfully!", "success")
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes, alert, showAlert }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
