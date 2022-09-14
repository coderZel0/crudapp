import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import ListContainer from './components/ListContainer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {data} from './data';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';


function App() {
  const [users,setUsers] = useState([]);
  const [index,setIndex] = useState(0);

  
  useEffect(()=>{
    setUsers(data);
  },[])

  return (
    <div className="App">
      <Header/>
     
        <Routes>
          <Route path='/' element={<ListContainer data={data} users={users} setUsers={setUsers}/> } />
          <Route path='/add' element={<CreateUser users={users} setUsers={setUsers} index={index} setIndex={setIndex} />}   exact />
          <Route path="/update" element={<UpdateUser setUsers={setUsers}/>} />
        </Routes>
      
      
     
    </div>
  );
}

export default App;
