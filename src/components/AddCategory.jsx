import React, { useState } from 'react'



export const AddCategory = ({ onNewCategory }) => {
// export const AddCategory = ({ setCategories }) => {
    
    const [ inputValue, setInputValue ] = useState('')

    // Defino la función para que cambie el valor de mi input cuando escribo
    // LA FUNCIÓN RECIBE, DEL (event), el target (event.target.value >>> lo desestructuro!!!)
    const onInputChange = ({ target }) => {  
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 0 ) return ;
        // setCategories ( categories => [inputValue.trim(), ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue( '' );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder='Search Gif...'
                value={ inputValue }
                // Éstas son propiedades HTML, pero también son props de React
                // Por eso puedo mandar la prop onChange ---> Para hacer que mi input pueda recibir valores y no sea read-only
                onChange={ onInputChange }
            />
        </form>
    )
}
