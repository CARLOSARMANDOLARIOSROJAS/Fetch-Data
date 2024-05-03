
    import { useEffect, useState } from 'react'

    export const Fetch = () => {

        const [imageURL, setImageURL] = useState(null);
        
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
        .then(response => response.json())
        .then(response => {
            setImageURL(response[0].url);
        });
    }, []);
    return (
        <div className="App">
        <h1>An image</h1>
        {imageURL && (
            <img src={imageURL} alt="random" />
        )}
        </div>
    )
    }
