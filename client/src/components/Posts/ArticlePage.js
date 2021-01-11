import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';

function ArticlePage(props) {
    const [queryId, setQueryId] = useState('');
    const [detail, setDetail] = useState('');

    const post = useSelector(state => state.post.filter(post=> post.id.toString() === queryId));

    useEffect(()=> {
        const query = qs.parse(window.location.search, {
            ignoreQueryPrefix: true
        })
        setQueryId(query.id)
        setDetail(...post);

        return () => {
            setQueryId('')
        }
      }, [detail])

    return (
        <div style={
           {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
           }
            
        }>
            {
                detail &&
                <Fragment>
                <h3>{detail.name}</h3>
                <p>{detail.title}</p>
                <p>{detail.content}</p>
                <p>{detail.hashTag}</p>
                <p>{detail.date}</p>
                </Fragment>
            }
        </div>
    );
}

export default React.memo(ArticlePage);