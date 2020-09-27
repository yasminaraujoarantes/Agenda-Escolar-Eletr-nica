import firebase from 'firebase';

export const USER_LOGIN_SUCESSO = 'USER_LOGIN_SUCESSO';
const userLoginSucesso = user => ({
    type: USER_LOGIN_SUCESSO,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT
});

export const fazerLogin = ({email, senha}) => dispatch => {
    return firebase.auth().signInWithEmailAndPassword(email, senha).then(usuario => {
        const action = userLoginSucesso(usuario);
        dispatch(action);
    })
    .catch( error => {
        return new Promise.reject(error.code);
    })
};