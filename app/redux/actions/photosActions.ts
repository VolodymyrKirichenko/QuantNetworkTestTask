import { Dispatch } from 'redux';
import { Photo } from '../../typedefs/typedefs';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { consts } from '../../consts/consts'

export const setPhotos = (photos: Photo[]) => ({
  type: 'SET_PHOTOS',
  payload: photos,
});

const { count, accessKey } = consts;

export const fetchPhotos = createAsyncThunk('FETCH_PHOTOS', async (_, { dispatch }: { dispatch: Dispatch }) => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`);
    const data = await response.json();

    const photos: Photo[] = data.map((photo: Photo) => ({
      id: photo.id,
      image: photo.urls.regular,
      title: photo.description || '',
      author: photo.user.name || '',
    }));

    dispatch(setPhotos(photos));
  } catch (error) {
    console.log('Error receiving photos:', error);
  }
}) as any;
