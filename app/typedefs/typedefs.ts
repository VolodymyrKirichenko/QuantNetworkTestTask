export interface Data {
  id: string,
  image: string,
  title: string,
  author: string,
}

export interface Photo {
  id: string,
  urls: { regular: string },
  description: string,
  user: { name: string },
}

export interface PhotoState {
  photosArray: Photo[];
}

export interface DataState {
  photosArray: Data[];
}

export interface Action {
  type: string,
  payload: Photo[]
}
