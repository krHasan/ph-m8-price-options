import './App.css'
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineChart from './components/LineChart/LineChart';
import Phones from './components/Phones/Phones';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App
