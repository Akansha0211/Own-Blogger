import * as api from '../api';

// Actions creators
const getPosts = () => async(dispatch) => {
    const action = {type:'FETCH_ALL', payload:[]}

    dipatch(action);
}