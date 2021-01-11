import React,  {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addPosts} from '../../_action/posts_action';
import useInputs from '../hooks/useInputs';

function EditPage(props) {

    const userName = useSelector(state => state.user.userData.name);
    const post = useSelector(state => state.post)
    const nextId = post ? post.length : 0;

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR')

    const dispatch = useDispatch();

    const [{title, hashTag, content}, onChangeHandler] = useInputs({
        title: '',
        hashTag: '',
        content: ''
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const body = {
            id: nextId+1,
            name: userName,
            title,
            hashTag,
            content,
            date: dateString,
       }

        dispatch(addPosts(body));
        alert('성공적으로 포스트가 등록되었습니다.')
        props.history.push('/');
    }

    return (
        <div className="edit_wrap">
            <form action="" method="post"
            className="edit_from" onSubmit={onSubmitHandler}> 
                <input
                    name="title"
                    value={title}
                    onChange={onChangeHandler} 
                    className="form_control input_title" 
                    type="text" 
                    placeholder="Article Title" 
                    autoFocus >
                </input>
                <input
                    name="hashTag"
                    value={hashTag}
                    onChange={onChangeHandler}
                    className="form_control" 
                    type="text" 
                    placeholder="#해시태그를 입력하세요."> 
                </input>
                <textarea
                    name="content"
                    value={content}
                    onChange={onChangeHandler}
                    className="form_control form_textAarea" 
                    row="8" col="100" 
                    placeholder="내용을 입력하세요.">
                </textarea>
                <button type="submit" className="btn-lg btn-primary edit_submit">완료</button>
            </form>
    </div>

    );
}

export default withRouter(EditPage);