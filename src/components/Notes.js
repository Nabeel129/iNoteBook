import React, { useContext, useEffect, useState, useRef } from 'react'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from '../contextAPI/notes/NoteContext'
import { useNavigate } from 'react-router-dom';

function Notes() {
    const context = useContext(noteContext);
    const { notes, fetchAllNotes, editNote } = context;
    let navigate = useNavigate();
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    const ref = useRef(null)
    const refClose = useRef(null)
    // let { showAlert } = props.showAlert;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchAllNotes();
        }
        else {
            // showAlert('Log In to start using iNoteBook', 'danger');
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const handleClick = (e) => {
        refClose.current.click();
        // console.log("Updating Note", note)
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <div className="my-3"></div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Update Note</h5>
                            <button type="button" ref={refClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleClick}>
                                <div className="my-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" value={note.edescription} onChange={onChange} name='edescription' minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>
                                <div className="modal-footer">
                                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" >Update</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h3 className='mb-3'>Your Notes</h3>
                <div className="container">
                    {notes.length === 0 && "No Notes to Display!"}
                </div>
                {notes.map((note) => { return <NoteItem key={note._id} updateNote={updateNote} note={note} /> })}
            </div>
        </>
    )
}

export default Notes