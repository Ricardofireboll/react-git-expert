import PropTypes from 'prop-types';
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('Naruto')

    //para cambiar el vaor del input
    const onInputChanged = ( event ) =>{
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) =>{
        //para evitar que recargue la pagina
        event.preventDefault();
        //Validacion para no enviar un input vacio
        if ( inputValue.trim().length <=1 ) return;

        //llamamos el collback para tener las categorias existentes y agregar la nueva 
        // setCaterory( (categories) => [ inputValue, ...categories ]);
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


    return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input
            type="tex"
            placeholder="Buscar gift"
            value={ inputValue }
            // Se envia el evento del cambio del input el cual tiene muchos metodos, como solo envia el mismo evento se puede 
            onChange={ (event) => onInputChanged(event) }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
