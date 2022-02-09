export default {
    count (state) {
        return state.materials.length;
    },
    all (state) {
        return state.materials;
    },
    materialById (state) {
        return (id) => state.materials.find(item => item.id === id);
    },
}