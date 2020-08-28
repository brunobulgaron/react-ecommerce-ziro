import React from 'react'

function Modal({ selectedImg }) {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt="Foto do produto - modal" />
    </div>
  )
};

export default Modal;