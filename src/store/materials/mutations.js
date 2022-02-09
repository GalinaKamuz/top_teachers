export default {
    addMaterial(state, data) {
        state.materials.push(data);
    },
    clear(state) {
        state.materials = [];
    }
}