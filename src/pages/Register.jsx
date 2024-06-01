import React from 'react'
import FormLayout from '../layout/FormLayout'

import { postProducts } from '../util/api'
import { validatShort, validateLong, validatePrice, validateStock } from '../util/about-validation'
    // ,validateAgeFrom, validateAgeTo

const INITIAL_STATE = {
    name: "",
    price: 0,
    stock: 0,
    brand: "",
    category: "",
    sDescription: "",
    lDescription: "",
    ageFrom: 0,
    ageTo: 0,
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRbZbkhT3GNPpYYrzDk36V-dhPcmB6MdccFbx9wDhig&s",
}

function Register() {

    const inputProps = {
        name: {
            inputLabel: "Nombre",
            require: true
        },
        price: {
            inputLabel: "Precio",
            inputType: "number",
            validation: validatePrice

        },
        stock: {
            inputLabel: "Stock inicial",
            inputType: "number",
            validation: validateStock
        },
        brand: {
            inputLabel: "Marca",
        },
        category: {
            inputLabel: "Categoria",
        },
        shortDesc: {
            inputLabel: "Descripción corta",
            validation: validatShort
        },
        longDesc: {
            inputLabel: "Descripción larga",
            inputType: "textarea",
            validation: validateLong
        },
        freeDeliver: {
            inputLabel: "Envío sin cargo",
            inputType: "checkbox"
        },
        ageFrom: {
            inputLabel: "Edad desde",
            inputType: "number",
            // validation: validateAgeFrom
        },
        ageTo: {
            inputLabel: "Edad hasta",
            inputType: "number",
            // validation: validateAgeTo
        },
        image: {
            inputLabel: "Foto del producto",
            inputType: "file",
            accept: "image/*"
        }
    }

    return (
        <FormLayout
            title="Crea un nuevo producto"
            inputProps={inputProps}
            onSubmit={postProducts}
            labelSubmit="Guardar producto"
            initialState={INITIAL_STATE}/>
    )
}

export default Register