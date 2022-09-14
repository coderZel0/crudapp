import React, {useState, useEffect } from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'


const UpdateUser = ({setUsers}) => {

    const [formdata,setData] = useState({username:"",id:'',email:'',gender:'',status:''});
    const [userEmail,setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(()=>{
        const {userState} = location.state
        console.log(userState)
        setData(userState);
        setEmail(userState.email)
    },[])

    const handleChange =(e,type)=>{
        if(type === 'username'){
            
            setData({...formdata,username:e.target.value})
        }
        else if(type === 'email'){
            
            setData({...formdata,email:e.target.value})
        }
        else if(type === 'gender'){
           
            setData({...formdata,gender:e.target.value})
        }
        else if(type === 'status'){
            
            setData({...formdata,status:e.target.value})
        }
    }

    const updateUser = (e)=>{
        e.preventDefault();
        setUsers((users)=>users.map((user)=>{
            if(user.email === userEmail){
                user = formdata
                return user;
            }
            return user;
        }))
        navigate('/')
    }

  return <>
 
  <div className='container p-6 space-y-6 mx-auto mt-15'>
      <div className='flex '>
          <div className='px-6 py-3 border-2 border-primary rounded-sm text-blue-700'>
              <Link to='/'>
                  <i className='fas fa-chevron-left p-1'></i>
                  All users
              </Link>
              
          </div>
      </div>
  </div>
  {formdata && (
       <div className='py-3 flex justify-center'>
       <form onSubmit={(e)=>updateUser(e)} className='flex flex-col items-end space-y-6'>
           <div className='form-group'>
               <label htmlFor='username'>Username</label>
               <input onChange={(e)=>handleChange(e,'username')} value={formdata.username} className='p-2 px-8 mx-4 rounded-lg bg-gray-200 border-none focus:outline-none' type="text" name='username'></input>
           </div>
           <div className='form-group'>
               <label htmlFor='email'>Email</label>
               <input onChange={(e)=>handleChange(e,'email')} value={formdata.email} className='p-2 px-8 mx-4 rounded-lg bg-gray-200 border-none focus:outline-none' type="email" name='email'></input>
           </div>
           <div className='flex items-center justify-around w-full space-x-6'>
               <span>Gender</span>
               <div className='p-2 mx-2'>
                   <label htmlFor='male'>Male</label>
                   <input id="male" onChange={(e)=>handleChange(e,'gender')} className='mx-3 px-4' type="radio" checked={(formdata.gender ==="Male")?true:null} value="Male" name='gender'></input>
                   <label htmlFor='female'>Female</label>
                   <input id='female' onChange={(e)=>handleChange(e,'gender')} className='mx-3 px-4' type="radio" checked={(formdata.gender ==="Female")?true:null} value="Female" name='gender'></input>
               </div>
           </div>
           <div className='flex items-center justify-around w-full space-x-6'>
               <span>Status</span>
               <div className='p-2 mx-2'>
                   <label htmlFor='male'>Active</label>
                   <input id="male" onChange={(e)=>handleChange(e,'status')} className='mx-3 px-4' type="radio" checked={(formdata.status ==="active")?true:false} value="active" name='status'></input>
                   <label htmlFor='female'>In Active</label>
                   <input id='female' onChange={(e)=>handleChange(e,'status')} className='mx-3 px-4' type="radio" checked={(formdata.status ==="inactive")?true:false} value="inactive" name='status'></input>
               </div>
           </div>
           <div className='mx-auto'>
               <button type="submit" className='p-2 px-6 rounded-full bg-primary text-gray-900 hover:scale-105'>Update</button>
           </div>
       </form>
</div>
  )}
 
  </>
}

export default UpdateUser;