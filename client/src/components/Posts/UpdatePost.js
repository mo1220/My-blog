import React,  {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updatePosts} from '../../_action/posts_action';
import qs from 'qs';

function EditPage(props) {
    const query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    })

    const getPost = useSelector(state => state.post.filter(item => item.id.toString() === query.id));

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR')

    const dispatch = useDispatch();


    // state
    const [post, setPost] = useState({
        title: '',
        hashTag:'',
        content: ''
    });
    const {title, hashTag, content}  = post;  


    useState(() => {
        setPost(getPost[0])
    }, [])

    const onChangeHandler = (e) => {
        const {value, name} = e.target;
        setPost({
            ...post,
            [name] : value
        });
    };
    
    const onUpdateHandler = (e) => {
        e.preventDefault();

        const body = {
            id: post.id,
            name: post.name,
            ...post,
            date: dateString,
       }
       console.log(body);

        dispatch(updatePosts(body));
        alert('성공적으로 포스트가 등록되었습니다.')
        props.history.push('/');
    }

    return (
        <div className="edit_wrap">
            <form action="" method="post"
            className="edit_from" onSubmit={onUpdateHandler}> 
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