import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  
    const [ categories, setCategories ] = useState([ 'WorldCup' ]);

    const handleAddCategory = ( newCategory ) => {
        const lowcase = categories.map( cate => cate.toLocaleLowerCase())
        // console.log(newCategory);
       
        if (lowcase.includes(newCategory.toLowerCase())) return ;
        setCategories( [newCategory, ...categories] );
    }

    return (
        <>
            {/* título */}
            <h1>Gif Expert App</h1>
            
            {/* Buscador input */}
            <AddCategory
                onNewCategory={ (valor)=> handleAddCategory(valor) } /> 
            
            {/* Listado de Gifs */}
            {
                categories.map( (category) => (
                    <GifGrid
                        key={ category }
                        category={ category} />
                ))
            }


            {/* Gif item card */}

        </>
  )
}
