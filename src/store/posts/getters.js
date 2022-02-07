export default {
    count (state) {
        return state.posts.length;
    },
    all (state) {
        return state.posts;
    },
    postById (state) {
        return (id) => state.posts.find(item => item.id === id);
    },
}