import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
       ...formData,
    [e.target.id]: e.target.value
    })
   
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post('api/auth/signup', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res.data); // Axios automatically parses JSON!

     if(res.data.success){
      setError(res.data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
  } catch (error) {
    setLoading(false);
    setError(error.message);
     // Handle error appropriately
console.error('Signup failed:', error.response?.data || error.message);
  }
};
  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" onChange={handleChange}/>
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" onChange={handleChange}/>
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 cursor-pointer'>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      <div className= "flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
