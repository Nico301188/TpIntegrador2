import React, { useState } from 'react'

function Input({
    id,
    inputLabel,
    inputType = "text",
    onChange = () => {},
    validation = () => "",
    values,
    ...props
}) {

    const [error, setError] = useState("")

    const validatedOnChange = e => {
        onChange(e)
        setError(validation(e.target.value))
    }

    return (
        <div className={`input-group__container${ inputType === "checkbox" ? " input-group__checkbox" : ""}`}>
            <label htmlFor={id}>{inputLabel}</label>
            {
                inputType === "textarea" ?
                    <textarea
                        id={id} 
                        name={id} 
                        type={inputType}
                        onChange={validatedOnChange}
                        value={values[id]}
                        className={`input-group__input${error ? " error" : ""}`}
                        {...props}
                    ></textarea>
                :
                    <input 
                        id={id} 
                        name={id} 
                        type={inputType}
                        onChange={validatedOnChange}
                        value={inputType !== "file" ? values[id] : ""}
                        className={`input-group__input${error ? " error" : ""}`} 
                        {...props}/>
            }
            <span className='input-group__text-error'>{error}</span>
        </div>
    )
}

export default Input
