import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s = {
    }

    // eslint-disable-next-line
    const [state, setstate] = useState(s)


    return (
        <NoteContext.Provider value={{state}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
