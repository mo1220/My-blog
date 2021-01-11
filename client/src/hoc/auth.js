import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_action/user_action';

export default function(SpecifiComponent, option, adminRoute=null){

    //null: 아무나 접근 가능
    //true: 로그인한 user만 접근 가능
    //false: 로그인한 유저는 접근할 수 없음

    function AuthenticationCheck(props){
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {

                //로그인하지 않은 상태
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login');
                    }

                }
                else{
                    //로그인한 상태
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/');
                    }
                    else{
                        if(option === false){
                            props.history.push('/');
                        }
                    }
                }
            });

        }, [])

 

        return (<SpecifiComponent></SpecifiComponent>)
    }
    return AuthenticationCheck
}