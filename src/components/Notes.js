import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, fetchNotes } = context;

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const [note, setNote] = useState({eTitle: '', eDescription: '', eTag: ''})

    const updateNote = (curNote) => {
        ref.current.click();
        setNote({eTitle: curNote.title, eDescription: curNote.description, eTag: curNote.tag})
    }

    const handleSaveChanges = (e) => {
        e.preventDefault()
        console.log("Updating note...");
    }

    const handleInputChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="eTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="eTitle" name="eTitle" value={note.eTitle} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eDescription" className="form-label">Description</label>
                                    <textarea className="form-control" id="eDescription" name="eDescription" rows={6} value={note.eDescription} onChange={handleInputChange}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eTag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="eTag" name="eTag" value={note.eTag} onChange={handleInputChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <h1>Your notes</h1>
                {notes.map(note => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}

export default Notes
