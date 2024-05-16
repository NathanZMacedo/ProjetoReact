import React from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../Redux/Slice/UserSlice'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css"
import { useState } from 'react'

function LoginPage() {
    const [user, setUser] = useState({ name:"", password:"" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(userActions.setName(user.name));
        dispatch(userActions.toggleLogged());
        navigate("/");
    }

  return (
    <div className='loginPage'>
        <form action="" id='formUser' onSubmit={loginUser}>
            <label htmlFor="nameUser"> {""} Nome </label>
            <input type="text" value={user.name} onChange={(e => setUser({...user,name: e.target.value}))}></input>

            <label htmlFor="passwordUser"> {""} Senha </label>
            <input type="password" value={user.password} onChange={(e => setUser({...user,password: e.target.value}))}></input>

            <button type='submit' id='buttonForm' className='margin-form'> Logar </button>
        </form>
    </div>
  )
}

export default LoginPage