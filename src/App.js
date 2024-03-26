import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Ventas from './pages/Ventas';
import Clientes from './pages/Clientes';

function App() {
  return (
    <Router className="App">
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
    </Router>
  );
}

export default App;
