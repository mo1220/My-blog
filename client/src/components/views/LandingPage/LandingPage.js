import '../../../styles/style.css';
import {withRouter} from 'react-router-dom';
import React from "react";
import PostsList from '../../Posts/PostsList';
import {useSelector} from 'react-redux';

// let nextId = 3;

function LandingPage(props) {

    const postData = useSelector(state =>state.post);

    const style = {
        backgroundColor:  '#F2F2F2',
        height: '300px',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: '59.6px'
      }
    
     const flex_item = {
        lineHeight: '20px',
      }
    

    
     return (
        <div className="wrap">
        <section>
            <div className="main_banner" style={style}>
                <h1 stlye={flex_item}>Hello World!</h1>
                <p stlye={flex_item}>Nice to meet you</p>
            </div>
            <div className="main_container">
                   <PostsList postData={postData}/>
            </div>   
        </section>
        </div>
    );
}


export default withRouter(LandingPage);