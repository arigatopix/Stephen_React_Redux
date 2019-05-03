import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  // fetch data from json placeholder / posts
  //! bad approch !!! break the rule  ของ redux ตอนตอบเป็น plain object
  const response = await jsonPlaceholder.get('/posts');

  return {
    type : 'FETCH_POSTS',
    payload : response
  };
};