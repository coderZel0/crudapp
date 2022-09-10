import React, { useEffect, useState } from 'react'
import UserRow from './User'
import './listcontainer.css'

const ListContainer = ({data}) => {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    setUsers(data);
  },[data])

  return (
    <div className='container mx-auto mt-32 p-6 px-8 py-8 list_container'>
        <div className='new_user py-2 px-3 absolute mx-16 -mt-16 text-blue-600 border-2 border-primary'>
          New user
          <i className="fas fa-user-plus mx-2"></i>
          </div>
        <div className='container_head  mx-auto p-5'>
            <table className='mx-auto'>
              <tr className='p-6 bg-bluePrimary'>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

              <tr className='user'>
                <td>1</td>
                <td>username</td>
                <td>useremail@gmail.com</td>
                <td>Male</td>
                <td>Active</td>
                <td className='flex justify-center space-x-3'>
                  <a className='p-3 px-4 cursor-pointer bg-primary rounded-sm text-center'>
                    <i className="fas fa-pencil-alt"></i>
                  </a>
                  <a className='p-3 px-4 cursor-pointer bg-lightRed rounded-sm text-center'>
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
              {users && users.map((user)=><UserRow key={user.id} data={user} setUsers={setUsers} />)}
              
            </table>
        </div>
    </div>
  )
}

export default ListContainer