import React, { useContext, useEffect } from 'react'
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

    return (
        <>
            <AddNote />
            <div className="row my-4">
                <h1>Your notes</h1>
                {notes.map(note => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
