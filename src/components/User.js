import React from 'react'

const UserRow = ({username,id,gender,status}) => {
  return (
    <tr className='user'>
    <td>1</td>
    <td>username</td>
    <td>useremail@gmail.com</td>
    <td>Male</td>
    <td>Active</td>
    <td className='flex justify-center space-x-3'>
      <a className='p-3 px-4 cursor-pointer bg-primary rounded-sm text-center'>
        <i class="fas fa-pencil-alt"></i>
      </a>
      <a className='p-3 px-4 cursor-pointer bg-lightRed rounded-sm text-center'>
        <i className="fas fa-trash-alt"></i>
      </a>
    </td>
  </tr>
  )
}

export default UserRow