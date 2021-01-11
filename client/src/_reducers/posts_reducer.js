import {ADD_POST, REMOVOE_POST, UPDATE_POST} from '../_action/types';

    const list = [
    {
        id: 1,
        name: "Kim",
        title: '강남역 맛집',   
        content:'강남역에 있는 맛집 ...',
        date: "2020. 11. 01" 
    },
    {
        id: 2,
        name: 'Lee',
        title: '이태원 맛집',
        content:'분위기 좋은 맛집 ...',
        date: "2020. 11. 01"
    },
    {
        id: 3,
        name: 'Park',
        title: '홍대 맛집',
        content:'홍대에 있는 맛집 ...',
        date: "2020. 11. 01"
    }
];

export default function (state=list, action) {
    switch (action.type) {
     
        case ADD_POST:
            return state.concat(action.payload);

        case REMOVOE_POST:
            console.log(action.id)
            return state.filter(post => post.id !== action.id);
    
        case UPDATE_POST:
            state.splice(action.id-1, 1, action.payload);
            return state

        default:
            return state;
    }
}   