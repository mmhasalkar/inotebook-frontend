import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleAddClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }

    const handleInputChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div className="container my-3">
            <h1>Add a Note</h1>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows={6} onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAddClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
