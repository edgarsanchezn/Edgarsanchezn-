import Tasks from "./API/Tasks.js";

export default {
  namespaced: true,
  state: {
    tasks: [],
    connection: new Tasks(),
  },
  getters: {
    TasksCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async all({ state }) {
      state.tasks = await state.connection.read();
    },
    add({ state, dispatch }, newtask) {
      state.connection.create(newtask);
      dispatch("all");
    },
    async update({ state }, taskToUpdate) {
      state.connection.update(taskToUpdate)
      dispatch("all");
    },
    async delete({ state }, taskToDelete){
      state.connection.delete(taskToDelete)
      dispatch("all");
    }
  },
};
