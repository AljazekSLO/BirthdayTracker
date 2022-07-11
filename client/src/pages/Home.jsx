import React, {useState} from 'react'

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  return (
    <>
      {user ? (
        <h1>Welcome {user.result.name}</h1>
      ) : 
      (
        <h1>No user</h1>
      )}
    </>
  )
}

export default Home