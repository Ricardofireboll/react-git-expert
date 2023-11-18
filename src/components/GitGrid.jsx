//Orden de importaciones, primero react, luego importaciones de terceros, luego codigo(componentes hooks ) y ultimo funciones

import PropTypes from 'prop-types';

import { GitItem } from './GitItem';
import { useFetchGifts } from '../hooks/useFetchGifts';



export const GitGrid = ({category}) => {

  // Custom hook (hooks con otros hooks que reutilizamos en casio de necesitarlos p[ara resumir el codigo)
  const { images, isLoading } = useFetchGifts( category );
  console.log({ images, isLoading });

  return (
    <>
        <h3>{category}</h3>
        {
          // isLoading 
          // ? (<h2>Cargando...</h2>)
          // :null
          isLoading && ( <h2>Cargando...</h2> )
        }
        
        {/* colocar una clase css */}
        <div className='card-grid'>
          {
            // images.map( img => (
            // <li key={img.id}> {img.title}</li>
            // ))
            images.map( ( image ) => (
              <GitItem 
                key={ image.id } 
                // title={ image.title }
                // url={ image.url }
                // Recibe cada una de las propiedades que tiene la imagen como prop
                { ...image }
                />
              // <li key={id}> {title}</li>
            ))
          }
        </div>
    </>
  )
}

GitGrid.propTypes = {
  category: PropTypes.string
}