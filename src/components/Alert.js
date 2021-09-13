import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export default function Alert(props) {

    const context = useContext(noteContext);
    const { alert } = context;

    const capitalize = (word) => {
        word = word.toLowerCase()
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <div style={{ height: '50px' }}>
            {alert && <div className={`alert alert-${alert.type}`} role="alert">
                <strong>{capitalize(alert.type)}</strong> : {alert.msg}
            </div>}
        </div>
    )
}