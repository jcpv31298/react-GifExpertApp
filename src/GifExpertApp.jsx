// React
import { useState } from 'react'
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input*/}
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {/* Gif's list */}
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                    )
                )
            }

        </>
    )
}
