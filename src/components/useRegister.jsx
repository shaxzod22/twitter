import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
    const navigate = useNavigate()
    const [firstName,setFirstName] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({
        firstName:'',
        phone:'',
    })
    
    
    const checkPhoneNumb = (phone)=>{
        return phone.length >=9
    }
    
    
    function handleSubmit(e){
        e.preventDefault()
        let formValid = true
        
        const updateError ={
            firstName : firstName?'':'Name should be entered!',
            phone: checkPhoneNumb(phone)?'':'Enter valid phone number',
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
        let userRegister = {
            firstName,
            phone,
        }
        localStorage.setItem('userRegister',JSON.stringify(userRegister))
        e.target.reset()
        navigate('/login')
    }
    
    return{
        firstName,phone,password,error,handleSubmit,handleNameChange:(event)=>{
            setFirstName(event.target.value.trim())
        },handlePhoneChange:(event)=>{
            setPhone(event.target.value.trim())
        }, handlePasswordChange:(event)=>{
            setPassword(event.target.value.trim())
        }
    }
}

export default useRegister
