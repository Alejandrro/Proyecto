import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Ventas from './pages/Ventas';
import Clientes from './pages/Clientes';
import Contactos from './pages/Contactos';
import ColorSchemesExample from './components/NavBar';

function App() {
  return (
    <Router className="App">
      <ColorSchemesExample />
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/persianas" exact={true} Component={Ventas} />
        <Route path="/alfombras" exact={true} Component={Clientes} />
        <Route path="/contactos" exact={true} Component={Contactos} />
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