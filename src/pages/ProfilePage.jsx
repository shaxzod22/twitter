import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const navigate = useNavigate()
  function logOut(){
    localStorage.clear()
navigate('/register')
  }
  return (
    <div>
      Profile
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default React.memo(ProfilePage)
