import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const Query = () => {

    async function fetchPhotos() {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' });
        return response.json();
      }

    const {isPending, isError, data} = useQuery({queryKey: ['photos'], queryFn: fetchPhotos})

    if (isPending) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Failed to load data</div>;
      }

      console.log(data[0].url);
      
  return (
    <>
    <h1>An image</h1>
    <img src={data[0].url} alt="" />
    </>

  )
}
