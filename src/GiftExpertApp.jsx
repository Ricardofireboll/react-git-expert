import { useState } from "react"
import { AddCategory, GitGrid } from "./components";
 



export const GiftExpertApp = () => {
// Atajo crear useState (usestateSnippet)
const [categories, setCategories] = useState([ 'Naruto' ])
// console.log(categories);


const addCategory = ( newCategory ) =>{
    //Si ya existe el nombre, entonces no lo agregara a la lista de las categorias
    //includes(Elimina los espacion en blanco al principio y al final de la cadena de texto)
    if(categories.includes(newCategory)) return; 
    console.log(newCategory)
    
    setCategories( [newCategory, ...categories ] )
}

return (
    <>
    {/* Titulo */}
        <h1>GiftExpertApp</h1>
        <h2>Holis</h2>
    {/* Input */}
    
        <AddCategory
            // setCaterory = { setCategories }
            // Esta emitiendo algo (Evento) colocamos el on para identificar
            //aqui enviamos una funcio como prop para utilizarla en otro componente
            onNewCategory = { (newValor) => addCategory(newValor)}
         />
    {/* Listado de gift */}
    
        { 
        // categories.map( category =>{
        //     return (
        //         <div key={ category }>
        //             <h3>{ category }</h3>
        //             <li>{ category }</li>
        //         </div>
        //     ) 
        // })Otra manera de escribirlo ya qeu solo retorna un elemento en este caso el return
        // Aqui utilizamos otro componente  
        
        categories.map( category => (
            <GitGrid 
                key={category} 
                category={ category }/>
        )) 
        }
    
        {/* Gift Items */}
    </>
)
}
