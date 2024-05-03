import { useEffect, useState } from 'react';
import axios from 'axios'; // Importa Axios

export const AxiosMine = () => {
    const [imageURL, setImageURL] = useState(null);

    // Usa useEffect para realizar la solicitud HTTP utilizando Axios
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setImageURL(response.data[0].url);
        }
        fetchData();
    }, []);

    // Renderiza el componente y muestra la imagen si la URL está disponible
    return (
        <div className="App">
            <h1>An image</h1>
            {imageURL && <img src={imageURL} alt="random" />}
        </div>
    );
};
