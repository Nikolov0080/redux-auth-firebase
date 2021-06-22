import DB from '../../firebase/config';

const register = (email, password) => {
    return DB.auth().createUserWithEmailAndPassword(email, password)
        .then(resp => {
            console.log(resp);
        })
        .catch();
}
export default register;