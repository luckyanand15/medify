import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Header/>
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
