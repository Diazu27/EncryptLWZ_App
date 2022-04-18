import React from 'react'
import {GrClose} from 'react-icons/gr';

import './Modal.css';




function Modal({closeFunc}) {


    return (

        <div>
            <div className="modal">
            <div className="modal-container">
                <div className = "modal-header">
                    <h1> Acerca del proyecto </h1>
                    <GrClose className="modal-close" onClick={()=>{closeFunc(false)}}/>
                </div>
                <p>
                    Encripte sus archivos para mantenerlos seguros,
                    seleccione su archivo y pulse click en la función que
                    necesita.

                    Esta aplicación esta desarrollada usando las tecnólogías de 
                    React Js y Node Js.
                </p>
            </div>
            </div>

        </div>
    )
}

export default Modal
