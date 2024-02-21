import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Index from './Routes/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Index />
      </BrowserRouter>
    </div>
  );
}

export default App;
