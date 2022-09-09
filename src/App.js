
import './App.css';
import Header from './components/Header';
import ListContainer from './components/ListContainer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {data} from './data';

function App() {
  return (
    <div className="App">
      <Header/>
      {data && <ListContainer data={data}/>}
     
    </div>
  );
}

export default App;
