import React, {Fragment, useEffect, useState} from 'react';
import '../../styles/style.css';
// import {useSelector} from 'react-redux';
import PostItem from './PostItem';

function PostsList(props) {
    // const postData = useSelector(state =>state.post);
    const [postList, setPostList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setPostList(props.postData);
    },[props.postData])

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    //검색 버튼 이벤트
    const onClickHandler = (e) => {
        e.preventDefault();
        const postName = postList.map(post => post.name);
        if(postName.indexOf(searchValue) > -1){
            setPostList(postList.filter(post => post.name === searchValue));
        }
        setSearchValue('');
    }

    // 포스트 목록 전체보기
    const allPostList = () => {
        setPostList(props.postData);
    }
    return (
        <Fragment>
            <div className="search_wrap">
                <form className="search_form">
                    <span style ={ {marginRight: '10px', cursor: 'pointer'}} className="allList" href="#" onClick={allPostList}>전체 목록</span>
                    <input
                        className="title_input"
                        type="text"
                        value={searchValue}
                        onChange={onChangeHandler}
                        placeholder="이름을 검색하세요.">
                    
                    </input>
                    <button
                        className="btn-lg btn-primary search_btn"
                        onClick={onClickHandler}>검색
                    </button>
                </form>
            </div>
            <div className="list_wrap">
            <ul className="list" id="item_template">
                { postList && 
                    postList.map((_list, index) => 
                        <PostItem 
                        post={_list} 
                        key={index}
                    />
                ).reverse()
                }
             </ul>
        </div>

        </Fragment>

    );
}

export default React.memo(PostsList);