import React, {useState, useEffect} from 'react';
import '../../styles/style.css';
import likeImg from '../../Images/like_icon2.png';
import profileImg from '../../Images/profile.png';
import { useDispatch } from 'react-redux';
import {removePosts} from '../../_action/posts_action';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

const profileImgStyle = {
    width: '35px',
    height: '35px'
}
const profileInfoStyle= {
    float: 'left',
    marginRight: '10px',
    verticalAlign: 'middle',
    textAlign: 'center'
}

const unlikeBtnBg = {
    background: '#fff',

}
const likeBtnBg = {
    background: '#007bff',
    color: '#fff'
}

const trashIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>

const updateIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>


function PostItem(props){
    const [user, setUser] = useState('')
    const [confirmUser, setConfirmUser] = useState(false);

    useEffect(() => {
        axios.get('/api/users/auth')
        .then(response => {
            const _user = response.data.name
            setUser(_user);
            if(props.post.name === _user) setConfirmUser(true);

        })

        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
          };
          
      }, [])


    const dispatch = useDispatch();

    const [likeChange, setLikeChange] = useState({
        count : 0,
        clickCheck: false
    });
    
    
    const {count, clickCheck} = likeChange;
    
    
    const onToggleHandler = (e) => {
        e.preventDefault();
        setLikeChange({
        ...likeChange,
        count: count+1,
        clickCheck: !clickCheck
        });
        if(clickCheck){
            setLikeChange({
                count: 0
            })
        }
        console.log(likeChange.clickCheck);
    }

    const onRemove = () => {
        dispatch(removePosts(props.post));
    }

    const onUpdate = () => {
        props.history.push(`/update?id=${props.post.id}`);
    }

    return (
        <li className="list_item">
            <div className="profile_wrap">
                <Link to={`/mypage?user=${user}`} style={profileInfoStyle}>
                    <img src={profileImg} style={profileImgStyle} alt="profile icon"></img>
                </Link>
                <div className="info">
                    <Link to={`/mypage?user=${user}`} className="list_link"><span>{props.post.name}</span></Link> 
                    <span>{props.post.date}</span>
                </div>
            </div>
            <Link to={`/article?id=${props.post.id}`} className="list_link">
                <h3>{props.post.title}</h3>
                <p>{props.post.content}</p>
            </Link>
            <div className="like_btn_wrap">
                <button
                    type="button" 
                    onClick={onToggleHandler}
                    className="like_btn"
                    style={likeChange.clickCheck ? likeBtnBg : unlikeBtnBg}
                    >
                    <img src={`${likeImg}`}></img>
                    <span>{likeChange.count}</span>
                </button>
            </div>
            {
                confirmUser &&
                <div className="btn_wrap">
                    <button onClick={onUpdate} className="btn btn-outline-primary _btn">{updateIcon}</button>
                    <button onClick={onRemove} className="btn btn-outline-primary _btn">{trashIcon}</button>
                </div>
            }
        </li>
    );
}

export default withRouter(PostItem);