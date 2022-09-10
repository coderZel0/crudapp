import React from 'react'

const UpdateUser = () => {
  return <>
 
    <div className='container p-6 space-y-6 mx-auto mt-15'>
        <div className='flex '>
            <div className='px-6 py-3 border-2 border-primary rounded-sm text-blue-700'>
                <i className='fas fa-chevron-left p-1'></i>
                All users
            </div>
        </div>
    </div>
    <div className='py-3 flex justify-center'>
            <form className='flex flex-col items-end space-y-6'>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input className='p-2 px-8 mx-4 rounded-lg bg-gray-200 border-none focus:outline-none' type="text" name='username'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input className='p-2 px-8 mx-4 rounded-lg bg-gray-200 border-none focus:outline-none' type="email" name='email'></input>
                </div>
                <div className='flex items-center justify-around w-full space-x-6'>
                    <span>Gender</span>
                    <div className='p-2 mx-2'>
                        <label htmlFor='male'>Male</label>
                        <input id="male" className='mx-3 px-4' type="radio" value="Male" name='gender'></input>
                        <label htmlFor='female'>Female</label>
                        <input id='female' className='mx-3 px-4' type="radio" value="Female" name='gender'></input>
                    </div>
                </div>
                <div className='flex items-center justify-around w-full space-x-6'>
                    <span>Status</span>
                    <div className='p-2 mx-2'>
                        <label htmlFor='male'>Active</label>
                        <input id="male" className='mx-3 px-4' type="radio" value="active" name='status'></input>
                        <label htmlFor='female'>In Active</label>
                        <input id='female' className='mx-3 px-4' type="radio" value="inactive" name='status'></input>
                    </div>
                </div>
            </form>
    </div>
    </>
}

export default UpdateUser