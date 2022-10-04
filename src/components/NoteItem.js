import React, { useContext } from 'react'
import noteContext from '../contextAPI/notes/NoteContext'

function NoteItem(props) {
    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div >
                            <i className="mx-2 fa-solid fa-trash" onClick={() => { deleteNote(note._id) }}></i>
                            <i className="mx-2 fa-solid fa-pen-to-square" onClick={() => { updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text fw-bold">{note.tag} </p>
                    <p className="card-text">{note.description} </p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem