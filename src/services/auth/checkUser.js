import DB from '../../firebase/config';

let user = null;

async function checkUser() {

    await DB.auth().onAuthStateChanged((resp) => {
        if (resp) {
            user = resp;
        }
    })

    return user;
}

export default checkUser();