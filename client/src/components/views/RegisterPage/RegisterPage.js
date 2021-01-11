import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {registerUser} from '../../../_action/user_action';
import {withRouter} from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    
    

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호가 일치하지 않습니다.')
        }

        let body={
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                window.location.replace("/login")
            }
            else{
                alert('Fail to SignUp');
            }
        })
    }
        
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <form style={{
                display: "flex", 
                flexDirection: "column"
            }}
            onSubmit={onSubmitHandler}>
                <label htmlFor="user_email">E-mail</label>
                <input 
                    type="email" 
                    id="user_email" 
                    value={Email} 
                    onChange={onEmailHandler}>
                </input>

                <label htmlFor="user_name">Name</label>
                <input 
                    type="text" 
                    id="user_name" 
                    value={Name} 
                    onChange={onNameHandler}>
                </input>

                <label htmlFor="user_pw">Password</label>
                <input 
                    type="password" 
                    id="user_pw" 
                    value={Password} 
                    onChange={onPasswordHandler}>
                </input>

                <label htmlFor="confirm_pw">Confirm Password</label>
                <input 
                    type="password" 
                    id="confirm_pw" 
                    value={ConfirmPassword} 
                    onChange={onConfirmPasswordHandler}>
                </input>

                <br></br>
                <button className="btn-lg btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default withRouter(RegisterPage);