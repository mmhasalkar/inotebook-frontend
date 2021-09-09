import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "61375b475c6a2724a04020c2",
          "user": "6134ee633a608887d6f3ff05",
          "title": "Omkar's Second Note",
          "description": "Second note description updated",
          "tag": "Fudy",
          "timestamp": "2021-09-07T12:29:59.893Z",
          "__v": 0
        },
        {
          "_id": "61375bb65c6a2724a04020c4",
          "user": "6134ee633a608887d6f3ff05",
          "title": "Second Note",
          "description": "Second note description",
          "tag": "Personal",
          "timestamp": "2021-09-07T12:31:50.369Z",
          "__v": 0
        },
        {
            "_id": "61375b475c6a2724a04020c2",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Omkar's Second Note",
            "description": "Second note description updated",
            "tag": "Fudy",
            "timestamp": "2021-09-07T12:29:59.893Z",
            "__v": 0
          },
          {
            "_id": "61375bb65c6a2724a04020c4",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Second Note",
            "description": "Second note description",
            "tag": "Personal",
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
          },
          {
            "_id": "61375b475c6a2724a04020c2",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Omkar's Second Note",
            "description": "Second note description updated",
            "tag": "Fudy",
            "timestamp": "2021-09-07T12:29:59.893Z",
            "__v": 0
          },
          {
            "_id": "61375bb65c6a2724a04020c4",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Second Note",
            "description": "Second note description",
            "tag": "Personal",
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
          },
          {
            "_id": "61375b475c6a2724a04020c2",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Omkar's Second Note",
            "description": "Second note description updated",
            "tag": "Fudy",
            "timestamp": "2021-09-07T12:29:59.893Z",
            "__v": 0
          },
          {
            "_id": "61375bb65c6a2724a04020c4",
            "user": "6134ee633a608887d6f3ff05",
            "title": "Second Note",
            "description": "Second note description",
            "tag": "Personal",
            "timestamp": "2021-09-07T12:31:50.369Z",
            "__v": 0
          },
      ]

      const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
