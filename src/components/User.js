import React from 'react'

const UserRow = ({data,setUsers}) => {
  
  const deleteUser = (id)=>{
    setUsers((users)=>users.filter((user)=>user.id !==id));
  }
  //const {id,email,username,gender,status} = data;
  //console.log(data.username)
  console.log(data)
  return <>
    {data && 
      (<tr className='user'>  
        <td>{data.id}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td className="capitalize">{data.gender}</td>
        <td className="capitalize">{data.status}</td>
        <td className='flex justify-center space-x-3'>
          <a className='p-3 px-4 cursor-pointer bg-primary rounded-sm text-center'>
            <i className="fas fa-pencil-alt"></i>
          </a>
          <a onClick={()=>deleteUser(data.id)} className='p-3 px-4 cursor-pointer bg-lightRed rounded-sm text-center'>
            <i className="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>)
    }
  </>
}

export default UserRow