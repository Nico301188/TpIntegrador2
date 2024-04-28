import React, { useState } from 'react'
import Text from '../components/Text'
import Forms from '../components/Forms'
import Input from '../components/Input';

import { useForm } from "../hooks/useForms";

function FormLayout({
    title,
    inputProps,
    initialState,
    onSubmit,
    labelSubmit
}) {
    const {values, handleInputChange, resetForm} = useForm(initialState)
    const [loadingForm, setLoadingForm] = useState(false)
    
    return (
        <div className='form-layout__container'>
            <Text renderAs="h2" content={title}/>
            <Forms 
                onSubmit={() => {
                    setLoadingForm(true)
                    onSubmit(values)
                        .then( data => console.log(data))
                        .catch( err => console.error(err))
                        .finally( () => {
                            setLoadingForm(false)
                            resetForm()})
                }}
                labelButton={labelSubmit}
                loading={loadingForm}
            >
                {
                    Object.entries(inputProps)
                        .map(
                            ([key, props]) =>
                                <Input
                                    key={key}
                                    id={key}
                                    onChange={handleInputChange}
                                    values={values}
                                    {...props}
                                />
                        )
                }
            </Forms>
        </div>
    )
}

export default FormLayout