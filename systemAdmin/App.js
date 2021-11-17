import NavBar from "../components/navbar/index.js"
import footerV from "../components/Footer-v.js";


export default {
    created() {
        this.allUsers()
        this.allTasks()
    },
    methods: {
        ...Vuex.mapActions({ allTasks: "Tasks/all" }),
        ...Vuex.mapActions({ allUsers: "Users/all" }),
    },
template: `
<div class="bg-black-alt font-sans leading-normal tracking-normal">
            <NavBar />
            <router-view></router-view>
            <footerV />
</div>`,
components:{NavBar, footerV}
}