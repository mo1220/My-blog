import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginUser} from '../../../_action/user_action';
import {withRouter} from 'react-router-dom';
import '../../../styles/style.css';

function LoginPage(props) {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (e) =>{
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body={
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){
                window.location.replace("/")
            }else{
                alert('등록된 아이디나 비밀번호가 없습니다. 다시 확인해 주세요.');
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
                <h1 className="login_title">Login</h1>
                {/* <label htmlFor="user_email">E-mail</label> */}
                <input
                    placeholder="E-mail" 
                    type="email" 
                    id="user_email" 
                    value={Email} 
                    onChange={onEmailHandler}>
                </input>
               
                {/* <label htmlFor="user_pw">Password</label> */}
                <input 
                    placeholder="Password"
                    type="password" 
                    id="user_pw" 
                    value={Password} 
                    onChange={onPasswordHandler}>
                </input>
                <br></br>
                <button className="btn-lg btn-primary">Login</button>
            </form>
        </div>
    );
}

export default withRouter(LoginPage);