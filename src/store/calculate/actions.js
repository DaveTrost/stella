export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = payload => {
  console.log(payload);
  
  return ({
    type: SET_USER_DATA,
    payload: payload,
  });
}