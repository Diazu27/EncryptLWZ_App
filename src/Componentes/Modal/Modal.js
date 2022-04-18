import React from 'react'
import {GrClose} from 'react-icons/gr';

import './Modal.css';




function Modal({closeFunc}) {


    return (

        <div>
            <div className="modal">
            <div className="modal-container">
                <div className = "modal-header">
                    <h1>About this project</h1>
                    <GrClose className="modal-close" onClick={()=>{closeFunc(false)}}/>
                </div>
                <p>
                    Encrypt your plane text, to keep it safe.
                    Just write your text on the text area and click the encrypt button.
                    For decrypt, write your code in the text area and click the decrypt button.

                    This project was developed with reactJS and NodeJs.

                </p>
            </div>
            </div>

        </div>
    )
}

export default Modal
