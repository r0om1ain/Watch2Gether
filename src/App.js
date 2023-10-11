import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Film from './components/Film';
import DetailsFilms from './components/DetailsFilms';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Film />}/>
        <Route path="/details/:filmId" element={<DetailsFilms/>} />
    </Routes>
    </div>
  );
}

export default App;
