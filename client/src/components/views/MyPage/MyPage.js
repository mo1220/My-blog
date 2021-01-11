import React, { Fragment, useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';

function MyPage(props) {
    const [userInfo, setUserInfo] = useState({});
    const query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
      });

    useEffect(()=> {
        
        axios.get('/api/users/auth')
        .then(response => {
            console.log(response.data.name)
          if(response.data.name === query.user){
              console.log('ok');
              return setUserInfo(response.data);
          }
        })

        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
          };
      }, [])

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
               userInfo&&
               <Fragment>
                   <h2>{userInfo.name}</h2>
                   <p>{userInfo.email}</p>
               </Fragment>
           }
        </div>
    );
}

export default MyPage;