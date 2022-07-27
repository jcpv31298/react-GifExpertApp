// React

// Components
import { GifItem } from './GifItem';

// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs';

//Others

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({isLoading});

    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <h3>{category}</h3>

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
