

export const validatePrice = value => 
    value <= 0 ? "El precio debe ser un valor mayor a cero." : "" ;

export const validateStock = value => 
    value <= 0 ? "El stock debe ser un valor mayor a cero." : "" ;

export const validatShort = value => 
    value.length <= 10 ? "El texto debe contener mas de 10 caracteres." : "" ;

export const validateLong = value => 
    value.length <= 30 ? "El texto debe contener mas de 30 caracteres." : "" ;
    
// export const validateAgeFrom  = value => 
// value <= validateAgeTo ?
//  "El valor no puede ser mayor que edad hasta." : "" ;
    
// export const validateAgeTo  = value => 
// value <= validateAgeFrom  ?
//  "El valor no puede ser menor que edad desde." : "" ;

