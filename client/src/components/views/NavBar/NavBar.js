import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";  


function NavBar(props) {

    const [authMenu, setAuthMenu] = useState(false);
    const [user, setUser] = useState('')

    useEffect(() => {
      axios.get('/api/users/auth')
      .then(response => {
        const _user = response.data.name;
        setUser(_user);   
        if(!response.data.isAuth){
            return setAuthMenu(true);
        }
        return setAuthMenu(false);
      })    
    }, [])
  
    const onClickHandler = () => {
          axios.get('/api/users/logout')
          .then(response => {
              if(response.data.success){
                window.location.replace("/login")
              }
              else{
                  alert('로그아웃 실패');
              }
          })
      }

    return (
        <div className="head_container">
            <header  style={{zIndex: '20'}}>
            <nav className="flex_container navbar-dark bg-primary">
            <Link to="/" className="flex-item logo">My-Blog</Link>

                <div className="flex-item" id="navbarSupportedContent">
                    <ul className="navbar_nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        {
                            authMenu ? (
                            <Link 
                            to='/login' 
                            className="nav-link">Login</Link>)  : (                    
                            <Link 
                            to=""
                            className="nav-link" 
                            onClick={onClickHandler}
                            >Logout</Link>
                            )
                        }
                        </li>
                        <li className="nav-item">
                            {
                                authMenu ? '':
                                (<Link to="/edit" className="nav-link">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>New Post</Link>) 
                            }
                        </li>
                        <li className="nav-item">
                        {
                            authMenu ? 
                            (
                            <a 
                            href='/register' 
                            className="nav-link">Sign up</a>
                            ) : 
                            (
                            <Link to={`/mypage?user=${user}`}className="nav-link myPage">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor" 
                            xmlns="http://www.w3.org/2000/svg">
                         <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
                        <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
                        </svg>    
                        My page</Link>)
                        }
                    </li>
                </ul>
            </div>
            </nav>
        </header>
    </div>
    );
}

export default withRouter(NavBar);