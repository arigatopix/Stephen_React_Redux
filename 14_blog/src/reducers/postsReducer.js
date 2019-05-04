export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

/**
 * NOTE :
 * - ใช้ switch case แทน if...else เพราะว่า  code จะ clean กว่า
 */
