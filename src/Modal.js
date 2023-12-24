import React from "react";
import space from './space-background.jpeg'
import './Modal.css'

function modal({ closeModal }) {
    return(
    <div className="ModalBackground"> 
        <div className="modalContainer">
        <button onClick={() => closeModal(false)}> X </button>
            <div className="modaltitle">
                <h1>this is a picture</h1>
                <div className="modalimg">
                    <img src={space} alt="space"/>
                </div>
            </div>


        </div>
        
    </div>

    );
}

export default modal