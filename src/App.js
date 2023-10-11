import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Film from './components/Film';
import DetailsFilms from './components/DetailsFilms';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Film />}/>
        <Route path="/details/:filmId" element={<DetailsFilms/>} />
    </Routes>
    </div>
  );
}

export default App;
