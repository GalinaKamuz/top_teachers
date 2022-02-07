import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
} from "firebase/auth";


function isValidToken (token) {
    return token;
}

export default {
    namespaced: true,
    state: {
        token: '',
        name: '',
        user: {

        },
    },
    getters: {
        isAuth (state) {
            return isValidToken (state.user.accessToken);
        },
        userEmail (state) {
            return state.user.email;
        },
        userName (state) {
            return state.user.displayName;
        },
        userFoto (state) {
            console.log(state.user.photoURL);
            return state.user.photoURL;
        }
    },
    mutations: {
        setAuthUser(state, data) {
            state.user = data || {};
        }
    },
    actions: {
        doAuth (context, data) {
            const auth = getAuth();

            return signInWithEmailAndPassword(auth, data.login, data.password)
            .then((userCredential) => {
                context.state.user = userCredential.user;
                return 'Ok';
            })
            .catch((error) => {
                const errorMessage = error.message;
                return `error: ${errorMessage}`
            });         
        },

        logOut(context) {
            context.state.user = {};
            const auth = getAuth();
            return signOut(auth).then(() => 'Ok');
        },
        doCreate(context, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.login, data.password)
            .then((userCredential) => {
                context.state.user = userCredential.user;
                return 'Ok';
            })
            .catch((error) => {
                const errorMessage = error.message;
                return `error: ${errorMessage}`
            });
        },
    },
}