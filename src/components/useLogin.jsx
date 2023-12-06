import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
    const navigate = useNavigate()
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({
        phone:'',
        password:'',
    })
    
    
    const checkPhoneNumb = (phone)=>{
        return phone.length >=9
    }
    const checkPassword = (password)=>{
        return password.length >=6
    }
    
    
    function handleSubmit(e){
        e.preventDefault()
        let formValid = true
        
        const updateError ={
            phone: checkPhoneNumb(phone)?'':'Enter valid phone number',
            password:checkPassword(password)?'':'Password should be more than 6 signs'
        }
        
        Object.keys(updateError).forEach((key)=>{
            if(updateError[key]){
                formValid = false
            }
        })
       
        if(!formValid){
            setError(updateError)
            return
        }
        let userLogin = {
            password,
            phone,
        }
        localStorage.setItem('userLogin',JSON.stringify(userLogin))
        e.target.reset()
        navigate('/profile')
    }
    
    return{
       phone,password,error,handleSubmit,handlePhoneChange:(event)=>{
            setPhone(event.target.value.trim())
        }, handlePasswordChange:(event)=>{
            setPassword(event.target.value.trim())
        }
    }
}

export default useLogin
