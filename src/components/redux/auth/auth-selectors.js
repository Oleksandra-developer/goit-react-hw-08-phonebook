const getIsAuthenticatad = (state) => state.auth.isLogIn;
const getUserEmail = (state) => state.auth.user.email;
export default { getIsAuthenticatad, getUserEmail };
