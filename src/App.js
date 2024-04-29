import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Ventas from './pages/Ventas';
import Clientes from './pages/Clientes';
import ColorSchemesExample from './components/NavBar';

function App() {
  return (
    <Router>
      <ColorSchemesExample />
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/ventas" exact={true} Component={Ventas} />
        <Route path="/clientes" exact={true} Component={Clientes} />
      </Routes>
    </Router>
    /*<Router className="App">
      <NavBar />
      <div className='flex'>
        <SideBar />
        <div className='content'>
          <Routes>
            <Route path="/" exact={true} Component={Home} />
            <Route path="/ventas" exact={true} Component={Ventas} />
            <Route path="/clientes" exact={true} Component={Clientes} />
          </Routes>
        </div>
      </div>
    </Router>*/
  );
}

export default App;
