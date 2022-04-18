import React, { useState } from 'react'
import axios from 'axios';

const CardText = () => {
    const Api= process.env.REACT_APP_API;


    const [datos, setDatos] = useState({
        text1: '',
        text2: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const EncryptProcess = ()=>{


        let data = new FormData();
        data.append('text', datos.text1);    


        axios.post(`${Api}/api/encrypt`, data ,{ headers:{
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }}).then(function (response) {
            setDatos({text2 : JSON.stringify(response.data.compress)})
        });

    }

    const DesEncryptProcess = () => {
        let data = new FormData();
        data.append('text', datos.text2);

        axios.post(`${Api}/api/desencrypt`, data ,{ headers:{
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': 'multipart/form-data'
        }}).then(function (response) {
            setDatos({text1 : response.data})
        });
    }

    return (
        <div className="card">
           <div className="textbox">
            <textarea value = {datos.text1} onChange={handleInputChange} name="text1" placeholder='Write your text here'/>
            <textarea value = {datos.text2} onChange={handleInputChange} name="text2" placeholder='Write your encrypted text here' />
           </div>
            <div className="buttonBox">
                <button className="formButton" onClick={(e)=>{EncryptProcess(e)}}>¡Encrypt!</button>
                <button className="formButton-2" onClick={(e)=>{DesEncryptProcess(e)}} >Decrypt</button>
            </div>

        </div>
    )
}

export default CardText
