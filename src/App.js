import './App.css';
import Contacts from './components/Contacts';
import Edit from './components/Edit';
import {  BrowserRouter,Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Contacts/>} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>   
      </BrowserRouter>   
    </div>
  );
}

export default App;
