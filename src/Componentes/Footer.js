import React, { useState } from 'react'

import icon from '../img/sw.svg'
import {ImInfo} from 'react-icons/im'
import Modal from './Modal/Modal'

const Footer = () => {

    const [modal, setmodal] = useState(false)

    return (
        <div className="footer">
         <div className="Autor">
         <img src={icon} alt="Logo" />
            <p>Desarrollado por Andrés Díaz - 2021</p>
         </div>

         <ImInfo className="Info" onClick={()=>{setmodal(true)}}/>

         {modal && <Modal closeFunc ={setmodal} />}
           
        </div>
    )
}

export default Footer
