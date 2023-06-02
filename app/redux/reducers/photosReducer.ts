import { Action, PhotoState } from '../../typedefs/typedefs';

const initialState: PhotoState = {
  photosArray: [],
};

export const photosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return {
        ...state,
        photosArray: action.payload,
      };
    default:
      return state;
  }
};
