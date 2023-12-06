import React from "react"
import useRegister from "../components/useRegister"
import Logo from './../assets/images/twitterLogo.svg'
import './../components/Register.scss'
const RegisterPage = () => {

const {firstName,phone,error,handleSubmit,handleNameChange,handlePhoneChange} = useRegister()

  return (
    <div className="register">
      <div className="register__container">
      <img src={Logo} alt="twitter logo" className="register__img__logo" />
        <h2 className="register__heading">Create an account</h2>
      <form onSubmit={handleSubmit} className="register__form">
        <input onChange={handleNameChange} value={firstName} type="text" placeholder="Name" className='register__name__input register__input'/>
        {error.firstName && <p className="register__error__text">{error.firstName}</p>}
        <input onChange={handlePhoneChange} value={phone} type="text" placeholder="Phone number" className="register__input register__name__input" />
        {error.phone && <p className="register__error__text">{error.phone}</p>}
        <p className="register__useEmail">Use email</p>

        <h3 className="register__birth__heading">Date of birth</h3>

        <p className="register__birth__title">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>

        <div className="register__birth__info__box">
            <input type="text" placeholder="Month" className="register__month register__birth__input" />
            <input type="number" placeholder="Day" className="register__birth__input register__day" />
            <input type="number" placeholder="Year" className="register__birth__input register__year" />
        </div>

        <button className="register__btn">Next</button>
      </form>
      </div>
    </div>
  )
}

export default React.memo(RegisterPage)
