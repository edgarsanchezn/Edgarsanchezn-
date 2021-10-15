export default {
    data() {
        return {
            newtask: ''
        }
    },
  methods: {
    ...Vuex.mapMutations({ add: "Tasks/add" }),
    add_(){
        this.add(this.newtask)
        this.newtask = ""
    }
  },
  computed: {
    ...Vuex.mapState("Tasks", ["tasks"]),
  },
  template: `<div class="container w-full mx-auto mt-20 pt-10 py-5 text-white">
<div class="px-5">
<span class="text-2xl">Tasks</span>
<input v-on:keyup.enter="add" class="mx-5 rounded text-black p-1" type="text" v-model="newtask">
<button @click="add_" class="bg-gray-700 px-3 hover:bg-blue-500 rounded ">Add</button>
</div>
<div>
<div class="mx-10 my-5 border border-white" v-for="item,key in tasks" :key="key">
  {{key +  1}}.  {{ item }}
</div>

</div>
</div>`,
};
