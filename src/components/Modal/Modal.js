import React, { useState } from 'react'
import './Modal.css'

function Modal( {content, setModal} ) {
    const [visible, setVisible] = useState(true)

    const onOpen = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false)
        setModal(false)
    }

  return (
    <div className= { visible? 'modal' : 'invisible'}>
        <div className = 'modalBox'>
            <button id='closeButton' onClick={onClose}>
                X
            </button>
            <div className = 'content'>
                { content }
            </div>
        </div>

    </div>
  )
}

export default Modal