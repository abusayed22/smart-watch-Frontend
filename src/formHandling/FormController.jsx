import React from 'react'
import Input from './allForms/Input' 
import Select from './allForms/Select'

function FormController(props) {
    const {control, ...rest} = props
 
    switch (control) {
        case "input":
            return <Input {...rest} />
        case "textarea":
            return <Input {...rest} />
        case "select":
            return <Select {...rest} />
            
    
        default: return null
    }
}

export default FormController
