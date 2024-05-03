import useSWR from "swr";

const fetcher = url  => fetch(url, { mode: 'cors' }).then(response => response.json());

export const SWR = () => {
  // Utilizamos useSWR para realizar la solicitud de datos a la API
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/photos', fetcher);

  // Verificamos si hay un error
  if (error) {
    return <div>Failed to load data</div>;
  }

  // Verificamos si los datos aún están cargando
  if (!data) {
    return <div>Loading...</div>;
  }

  // Extraemos la URL de la imagen del primer elemento de los datos
  const imageURL = data[0]?.url;

  // Mostramos la imagen si la URL está disponible
  return (
    <div>
      <h1>An image</h1>
      {imageURL && <img src={imageURL} alt="random" />}
    </div>
  );
};
