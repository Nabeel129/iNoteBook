import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //To Fetch all Notes
    const fetchAllNotes = async () => {
        //TODO API Call
        const response = await fetch(
            `${host}/api/Notes/fetchallnotes`,
            {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    'authToken':
                        localStorage.getItem('token'),
                }
            }
        );
        const json = await response.json(); // parses JSON response into native JavaScript objects
        setNotes(json);

    };


    //To Add a Note
    const addNote = async (title, description, tag) => {
        //TODO API Call
        const response = await fetch(
            `${host}/api/Notes/addnote`,
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    'authToken':
                        localStorage.getItem('token'),
                },
                body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
            }
        );
        const note = await response.json(); // parses JSON response into native JavaScript objects
        setNotes(notes.concat(note));
        props.showAlert('Note Added Successfully', 'success');
    };

    //To Delete a Note
    const deleteNote = async (id) => {
        //TODO API Call
        const response = await fetch(
            `${host}/api/Notes/deletenote/${id}`,
            {
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    'authToken':
                        localStorage.getItem('token'),
                }
            }
        );
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json);
        // console.log("Delete the node with id:" + id);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
        props.showAlert('Note Deleted Successfully', 'success');

    };

    //To update a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(
            `${host}/api/Notes/updatenote/${id}`,
            {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    'authToken':
                        localStorage.getItem('token'),
                },
                body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
            }
        );
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json);
        const newNotes = JSON.parse(JSON.stringify(notes));
        //Logic to edit the note
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
        props.showAlert('Note Updated Successfully', 'success');
    };

    return (
        <NoteContext.Provider value={{ notes, fetchAllNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
