import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () =>  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    // เรียก dispatch เมื่อ data ถูก fetch
    dispatch({ type: 'FETCH_POSTS', payload : response });
    console.log(response.data);
};