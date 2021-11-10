let task = { props: ['item', 'key_'],
methods: {
  ...Vuex.mapActions({ update: "Tasks/update"})
}, template: `<div class="flex justify-between text-xs"><span>
<span>{{item.Id}}.</span>
<span>{{ item.Name }}</span> - <span>{{ item.Description }}</span>
</span>
<span class="">
<span class="border px-2 py-1 rounded-2xl hover:bg-white hover:text-black">{{item.Status ? 'Completed' : 'To-Do'}}</span>
<span @click="update(item)" class="border px-2 py-1 rounded-2xl hover:bg-blue-500">Editar</span>
<span class="border px-2 py-1 rounded-2xl hover:bg-red-500 ">Eliminar</span>
</span>
</div>`}

export default {
  components: { task },
  created() {
   // this.getTasks()
  },
    data() {
        return {
            newtask: {Name: '', Description: ''}
        }
    },
  methods: {
    ...Vuex.mapActions({ add_: "Tasks/add" }),
    add(){
        this.add_(this.newtask)
        this.newtask = {Name: '', Description: ''}
    }
  },
  computed: {
    ...Vuex.mapState("Tasks", ["tasks"]),
  },
  template: `<div class="container w-full mx-auto mt-20 pt-10 py-5 text-white">
<div class="px-5">
<span class="text-2xl">Tasks</span>
<input placeholder="Name" v-on:keyup.enter="add" class="mx-5 rounded text-black p-1" type="text" v-model="newtask.Name">
<input placeholder="Description" v-on:keyup.enter="add" class="mx-5 rounded text-black p-1" type="text" v-model="newtask.Description">

<button @click="add" class="bg-gray-700 px-3 hover:bg-blue-500 rounded ">Add</button>
</div>
<div>
<div class="mx-10 p-3 my-5 border border-white" v-for="item,key in tasks" :key="key">
<task :item="item" :key_="key" />
</div>

</div>
</div>`,
};



