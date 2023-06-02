import { Navigation } from './navigate/Navigation';
import { useFonts } from './app/hooks/useFonts';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

export default function App() {
  const { fontLoaded } = useFonts();

  if (fontLoaded) {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
