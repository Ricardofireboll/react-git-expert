import { useEffect, useState } from 'react';
import { getsGift } from '../helpers/getGifts';


export const useFetchGifts = ( category ) => {
    const [images, setImages] = useState([])
    // forma para saber que esta cargando las imagenes
    const [isLoading, setIsLoading] = useState(true)
     //Forma 1 de obtener los gift
    const getImages = async () =>{
      const newImages = await getsGift(category) ;
      setImages(newImages)
      setIsLoading(false)
    }
  
    // El useEffect lo que hace sera que se ejecutara dependiendo de la condiciones dadas en [] en caso de estar vacio se ejecutara una sola vez
    //Se utiliza para disparar efectos secundarios
    //No se puede colocar async y await porque debe retornar una funcion
    useEffect(() =>{
      //Forma 1 de obtener los gift
      // getsGift( category )
      //   .then( newImages => setImages(newImages) );
      
        //forma 2
      getImages();
    } , []);

    return{
        // images: images (porque son iguales sse puede escribir diferente),
        images,
        isLoading: isLoading
    }
}
