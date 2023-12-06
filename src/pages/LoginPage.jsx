import React from 'react'
import {Link} from 'react-router-dom'
import useLogin from '../components/useLogin'
import Logo from './../assets/images/twitterLogo.svg'
import './../components/Login.scss'
const LoginPage = () => {
  const {phone,password,error,handleSubmit,handlePhoneChange,handlePasswordChange} = useLogin()
  
  return (
    <div className='login'>
<div className="login__container">
    <img src={Logo} alt="logo" className="login__img__logo" width='50' height='41' />
    <h2 className="login__heading">Log in to Twitter</h2>
    <form onSubmit={handleSubmit} className="login__form">
        <input onChange={handlePhoneChange} type="text" value={phone} placeholder='Phone number' className="login__tel__input login__input" />
        {error.phone && <p className="register__error__text">{error.phone}</p>}
        <input onChange={handlePasswordChange} type="password" value={password} placeholder='Password' className="login__password__input login__input" />
        {error.password && <p className="register__error__text">{error.password}</p>}
        <button className="login__btn">Log In</button>
    </form>
    <div className="login__direction__box">
        <Link className='login__link' to='/mmkmkm'>Forgot password?</Link>
        <Link className='login__link' to='/register'>Sign up to Twitter</Link>
    </div>
</div>
    </div>
  )
}

export default React.memo(LoginPage)
