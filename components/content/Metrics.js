let Metric = { props: ['info'],
    template: `<div class="w-full md:w-1/2 xl:w-1/3 p-3"><div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
    <div class="flex flex-row items-center">
    <div class="flex-shrink pr-4">
        <div class='rounded p-3' :class="['bg-' + info.color + '-600']"><i class="fas fa-2x fa-fw fa-inverse" :class="info.icon"></i></div>
    </div>
    <div class="flex-1 text-right md:text-center">
        <h5 class="font-bold uppercase text-gray-400">{{info.title}}</h5>
        <h3 class="font-bold text-3xl text-gray-600">{{info.subtitle}}<span :class="['text-' + info.color + '-500']"><i :class="info.icon2"></i></span></h3>
    </div>
</div>
</div>
</div>`}

export default {

    computed: {
        ...Vuex.mapGetters('Tasks', ['TasksCount']),
        ...Vuex.mapGetters('Users', ['usersCount']),
        cards (){
                return [
                    { title:"Total Revenue", subtitle:"$3249 ", color:"green", icon:"fa-wallet", icon2:"fas fa-caret-up"    },
                    { title:"Total Users", subtitle: this.usersCount + " ", color:"pink", icon:"fa-users", icon2:"fas fa-exchange-alt"    },
                    { title:"New Users", subtitle: "2 ", color:"yellow", icon:"fa-user-plus", icon2:"fas fa-caret-up"    },
                    { title:"Server Uptime", subtitle:"152 days", color:"blue", icon:"fa-server", icon2:""    },
                    { title:"To Do List", subtitle: this.TasksCount + " tasks", color:"indigo", icon:"fa-tasks", icon2:""    },
                    { title:"Issues", subtitle:"3 ", color:"red", icon:"fa-inbox", icon2:"fas fa-caret-down"    }
                ]
        }
    },
    components: { Metric },
    template: `<div class="flex flex-wrap">
    <Metric v-for="card, key in cards" :key="key" :info="card" />
</div>`}