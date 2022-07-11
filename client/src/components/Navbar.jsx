import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { FaBirthdayCake } from 'react-icons/fa'
import decode from 'jwt-decode'


const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }

      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const handleLogout = () => {
      localStorage.clear();
      navigate('/')
      setUser(null)
    }
    

  return (
    <div className='absolute flex items-center justify-between p-4 z-[100] w-full'>
    <Link to='/'>
    <div className='flex'>
        <h1 className='text-indigo-600 text-4xl font-bold cursor-pointer'><span className='text-sky-600'>Birthday</span>Tracker</h1>
        <FaBirthdayCake className='text-indigo-600 text-4xl font-bold cursor-pointer ml-2'/>
    </div>
    </Link>
        <div>
        {user?.result.email ? (
          <>
          <div className='flex items-center'>
            <p className='hidden md:block mr-4'>Logged in as: <span className='font-bold'> {user?.result.name}</span></p>
            <button onClick={handleLogout} className='bg-indigo-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
          </div>
          </>
        ):(
          <>
          <Link to='/signin'>
              <button className='text-black cursor-pointer py-2 px-6 rounded bg-indigo-200 mr-2'>Sign In </button>
          </Link>
          <Link to='/signup'>
              <button className='bg-indigo-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
          </Link>
          </>
        )}
        </div>
    </div>
  )
}

export default Navbar