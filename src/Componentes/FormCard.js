import React from 'react'
import {BsFillFolderFill} from 'react-icons/bs'

const FormCard = () => {
    return (
    <div className="card-Form">
        <form>
            <div className="formS">
                
                <div>
                    <label className="custom-file-upload">
                        <input type="file"/>
                        <BsFillFolderFill className="file-icon"/>
                        Seleccina archivo
                    </label>
                </div>

                <div className="form-buttonBox">
                    <button className="formButton">¡Encriptar!</button>
                    <button className="formButton-2 ">Desencriptar</button>
                </div>
        
            </div>
        </form>
    </div>
    )
}

export default FormCard
