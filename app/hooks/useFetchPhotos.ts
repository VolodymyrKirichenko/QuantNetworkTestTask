import { useEffect, useState } from 'react';
import { Data, Photo } from '../typedefs/typedefs';

const useFetchPhotos = () => {
  const [photosArray, setPhotosArray] = useState<Data[]>([]);

  const accessKey = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
  const count = 20;

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`);
      const data = await response.json();
      const photos = data.map((photo: Photo) => ({
        id: photo.id,
        image: photo.urls.regular,
        title: photo.description || '',
        author: photo.user.name || ''
      }));

      setPhotosArray(photos);
    } catch (error) {
      console.log('Error receiving photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return {
    photosArray
  };
};

export default useFetchPhotos;
