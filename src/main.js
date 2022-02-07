import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/MyInput.vue';
import MyTextarea from '@/components/ui/MyTextarea.vue';
import MySubmit from '@/components/ui/MySubmit.vue';
import MyButton from '@/components/ui/MyButton.vue';
import MyDialog from '@/components/ui/MyDialog.vue';
import MyRadiobutton from '@/components/ui/MyRadiobutton.vue';
import MySelect from '@/components/ui/MySelect.vue';
import MyCheckbox from '@/components/ui/MyCheckbox.vue';
import MyButtonPost from '@/components/ui/MyButtonPost.vue';

import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvkyJU2PzZop8drW8EtM4PzGJtA21d_HA",
  authDomain: "top-teacher-6dee7.firebaseapp.com",
  databaseURL: "https://top-teacher-6dee7-default-rtdb.firebaseio.com/",
  projectId: "top-teacher-6dee7",
  storageBucket: "top-teacher-6dee7.appspot.com",
  messagingSenderId: "240075215380",
  appId: "1:240075215380:web:c3064343df3eb408434d01"
};

initializeApp(firebaseConfig);

const db = getDatabase();

const path = '/posts';
onValue(ref(db, path), (snapshot) => {
  store.commit('posts/clear');
  const postsObject = snapshot.val();
  for (const [key, value] of Object.entries(postsObject)) {
    store.commit('posts/addPost', value);
    console.log(key);
  }
});

const app = createApp(App);
app.use(router);
app.use(store);
app.component('MyInput', MyInput)
app.component('MyTextarea', MyTextarea)
app.component('MySubmit', MySubmit)
app.component('MyButton', MyButton)
app.component('MyDialog', MyDialog)
app.component('MyRadiobutton', MyRadiobutton)
app.component('MySelect', MySelect)
app.component('MyCheckbox', MyCheckbox)
app.component('MyButtonPost', MyButtonPost)



const auth = getAuth();
let mounted = false;
onAuthStateChanged(auth, (user) => {
  store.commit('user/setAuthUser', user);
  if (!mounted) {
    app.mount('#app');
    mounted = true;
  }
});





