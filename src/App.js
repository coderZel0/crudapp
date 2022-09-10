
import './App.css';
import Header from './components/Header';
import ListContainer from './components/ListContainer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {data} from './data';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={data && <ListContainer data={data}/> } />
          <Route path='/edit' element={<UpdateUser/>} exact />
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
