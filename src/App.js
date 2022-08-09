import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './pages/bookDetail';
import StudentDetails from './pages/studentDetail';

function App() {
  return (
    <div className="App">
      <Typography variant="h3"
        style={{
          margin: '20px auto'
        }}
      >
        Library App
      </Typography>

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} >
          </Route>
          <Route path='/book/:id' element={<BookDetails />}></Route>
          <Route path='/student/:id' element={<StudentDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
