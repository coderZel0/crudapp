import React, { useEffect, useState } from 'react'
import UserRow from './User'
import './listcontainer.css'
import {Link} from 'react-router-dom';

const ListContainer = ({data,users,setUsers}) => {
  

  return (
    <div className='container mx-auto mt-32 p-6 px-8 py-8 list_container'>
        <div className='new_user py-2 px-3 absolute mx-16 -mt-16 text-blue-600 border-2 border-primary'>
          
          <Link to='/add'>
            <i className="fas fa-user-plus mx-2"></i>
            New user
          </Link>
          
          </div>
        <div className='container_head  mx-auto p-5'>
            <table className='mx-auto'>
              <tbody>
              <tr className='p-6 bg-bluePrimary'>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

              {users && users.map((user)=><UserRow key={user.email} data={user} setUsers={setUsers} />)}
              </tbody>  
            </table>
        </div>
    </div>
  )
}

export default ListContainer