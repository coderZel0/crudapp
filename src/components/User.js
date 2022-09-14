import React from 'react'
import {Link} from 'react-router-dom';

const UserRow = ({data,setUsers}) => {
  
  const deleteUser = (id)=>{
    setUsers((users)=>users.filter((user)=>user.email !==id));
  }
  //const {id,email,username,gender,status} = data;
  //console.log(data.username)
 
  return <>
    {data && 
      (<tr className='user'>  
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td className="capitalize">{data.gender}</td>
        <td className="capitalize">{data.status}</td>
        <td className='flex justify-center items-center space-x-3'>
          <Link to="/update" state={{userState:data}}>
            <div className='p-3 px-4 cursor-pointer bg-primary rounded-sm text-center'>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </Link>
          
          <a onClick={()=>deleteUser(data.email)} className='p-3 px-4 cursor-pointer bg-lightRed rounded-sm text-center'>
            <i className="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>)
    }
  </>
}

export default UserRow