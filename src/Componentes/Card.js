import React, {useEffect, useState } from 'react'
import {BsFillFolderFill} from 'react-icons/bs'
import FormData from 'form-data';
import axios from 'axios';
import FileDownload  from 'js-file-download'


import img from '../img/Doc.png'




function Card() {
    const [file, setfile] = useState(null);

    const EncryptProcess = (e)=>{
        let data = new FormData();
        data.append('img', file, file.fileName);

        axios.post(
            '/api/encryptimg', data, {
                headers: {
                  'accept': 'application/json',
                  'Accept-Language': 'en-US,en;q=0.8',
                  'Content-Type': 'multipart/form-data'
                }
            }
        ).then(function (response) {
            FileDownload(response.data, 'ImagenComprimida.lwz');
          })
    }
 
 
    useEffect(() => {
        const MostrarArchivo =()=>{
            if(file !== null){
                var preview = document.querySelector('img');
                let reader  = new FileReader();
                reader.onloadend = function () {
                    preview.src = reader.result;
                }
                reader.readAsDataURL(file);
            }
        }
        MostrarArchivo();
    }, [file])

    return (
        <div className="card">
           
            <div className="formS">
                
                <div>
                    <label className="custom-file-upload">
                        <input 
                        accept="image/png,image/jpeg"
                        type="file"
                        name="file"
                        onChange={(e)=>{setfile(e.target.files[0])}}
                        />
                        <BsFillFolderFill className="file-icon"/>
                         {file? file.name: 'Seleccina archivo '} 
                    </label>
                </div>

                <div className="form-buttonBox">
                    <button className="formButton" onClick={(e)=>{EncryptProcess(e)}}>¡Encriptar!</button>
                    <button className="formButton-2 ">Desencriptar</button>
                </div>
        
            </div>

            <div className="Img-Box">
                <img src={img} alt={file? file.name: ''}></img>
            </div>
        </div>
    )
}

export default Card
