import './App.css'
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App
