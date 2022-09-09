import React from 'react'
import User from './User'

const ListContainer = () => {
  return (
    <div className='container mx-auto mt-32 p-6 px-8 py-8 list_container'>
        <div className='new_user  py-3 px-6 absolute -mt-16 text-blue-600 border-2 border-primary'>New user</div>
        <div className='container_head  mx-auto p-5'>
            <div className='w-100 cols bg-bluePrimary p-4'>
              <ul className='flex space-x-6 justify-around'>
                <li >Username</li>
                <li>Email</li>
                <li>Gender</li>
                <li>Status</li>
                <li>Action</li>
              </ul>
            </div>
            <div className='p-2 px-0 bg-red-300 flex flex-col space-y-6 justify-around mt-10'>
                <div className='user text-sm flex justify-around p-5 bg-blue-400'>
                  <div className='name'>Username</div>
                  <div className='email'>Email@gmail.com</div>
                  <div className='gender'>Male</div>
                  <div className='status'>Active</div>
                  <div className='actions'>
                    actions
                  </div>
                </div>
              
                <div className='user text-sm flex justify-around p-5 bg-blue-400'>
                  <div className='name'>Username</div>
                  <div className='email'>Email@gmail.com</div>
                  <div className='gender'>Male</div>
                  <div className='status'>Active</div>
                  <div className='actions'>
                    actions
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListContainer