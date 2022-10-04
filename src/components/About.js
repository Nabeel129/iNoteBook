import React from 'react'
// import noteContext from '../contextAPI/notes/NoteContext'

function About() {
    // let a = useContext(noteContext)
    return (
        <>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            CEO - iNoteBook
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus nam perspiciatis! Corrupti aliquid fugiat eos ex explicabo corporis deserunt officia! Ut veniam, cupiditate nemo provident ad fugiat aut numquam eos quaerat facere voluptate dolores et voluptatum dolor vel repudiandae tempore earum aliquam ex nostrum accusantium debitis, nam facilis pariatur?</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Managing Director - iNoteBook
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita, explicabo mollitia a numquam placeat eveniet animi iste obcaecati praesentium amet quod architecto alias vero nihil voluptatem laborum? Magnam ab quo quae ex voluptas laboriosam, atque, dolores ea officia nostrum eveniet ipsa non error asperiores reprehenderit fuga, deleniti repudiandae fugiat.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Administrative Director - iNoteBook
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo nemo natus unde laboriosam obcaecati voluptate fugiat eius adipisci possimus est ipsa, earum optio nam voluptatum, quas ipsam reiciendis at sed culpa eveniet esse error voluptatibus quaerat. Debitis pariatur corporis, nostrum nulla eius mollitia quidem possimus a voluptatum? Quisquam voluptas veniam, dolorem voluptates eos placeat odit iste quo, reiciendis, neque tempora consequatur iusto. Sed alias saepe iste explicabo voluptas esse laboriosam eius qui maxime quis.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About