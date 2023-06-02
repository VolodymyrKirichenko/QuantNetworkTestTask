import { Navigation } from './navigate/Navigation';
import { useFonts } from './app/hooks/useFonts';

export default function App() {
  const { fontLoaded } = useFonts();

  if (fontLoaded) {
    return (
      <Navigation />
    )
  }
}
