import { defaultTheme, Provider } from '@adobe/react-spectrum';
import LandingHome from './components/home/Home';


function App() {
  return (
    <Provider theme={defaultTheme}>
      <LandingHome />
    </Provider>
  );
}

export default App;
