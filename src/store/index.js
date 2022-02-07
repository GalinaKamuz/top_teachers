import { createStore } from 'vuex'
import userStore from './user';
import postsStore from './posts';
import materialsStore from './materials';

export default createStore({
  modules: {
    user: userStore,
    posts: postsStore,
    materials: materialsStore,
  },
});