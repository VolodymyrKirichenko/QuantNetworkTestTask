import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/actions/photosActions';
import { DataState } from '../typedefs/typedefs';

export const useFetchPhotos = () => {
  const dispatch = useDispatch();
  const photosArray = useSelector((state: DataState) => state.photosArray);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return {
    photosArray,
  };
};
