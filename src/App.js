import { BrowserRouter } from 'react-router-dom';
import NavigationRoutes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationRoutes />
    </BrowserRouter>
    </div>
  );
}

export default App;
