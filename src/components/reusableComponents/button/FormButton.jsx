import React from 'react'

function FormButton({style,onClik,type,text}) {
  return (
    <button onClick={onClik} type={type} className={`${style} w-28 just h-12 bg-black text-white rounded-lg hover:transition-colors hover:bg-blue mx-auto`}>
      {text}
    </button>
  )
}

export default FormButton
