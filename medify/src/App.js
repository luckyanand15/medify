import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
