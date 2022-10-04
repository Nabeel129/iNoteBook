import React from 'react';
import Notes from './Notes';


function Home(props) {
    const { showAlert } = props.showAlert;

    return (
        <>
            <h2 className='text-center my-3'>iNoteBook - Your Notes on the cloud.</h2>

            <Notes showAlert={showAlert} />
        </>
    )
}

export default Home