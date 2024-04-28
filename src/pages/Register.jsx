import React from 'react'
import FormLayout from '../layout/FormLayout'

import { postProducts } from '../util/api'
import { validatShort, validateLong, validatePrice, validateStock
    // ,validateAgeFrom, validateAgeTo
    } from '../util/about-validation'

const INITIAL_STATE = {
    name: "",
    price: 0,
    stock: 0,
    brand: "",
    category: "",
    shortDesc: "",
    longDesc: "",
    ageFrom: 0,
    ageTo: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRbZbkhT3GNPpYYrzDk36V-dhPcmB6MdccFbx9wDhig&s",
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
        delivery: {
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
        img: {
            inputLabel: "Foto del producto",
            inputType: "file"
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