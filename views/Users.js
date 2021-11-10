
let RegisterUser = {
    data() {
        return {
            newUser: {
                FirstName: '',
                LastName: '',
                Email: '',
                Company: '',    
            }
        }
    },
    methods: {    ...Vuex.mapActions('Users', ['add']), add_(){
        this.add(this.newUser)
        this.newUser= {
            FirstName: '',
            LastName: '',
            Email: '',
            Company: '',    
        }

    } },
    template: `<div class="py-10 flex align-middle">
            <div class="bg-gray-700 p-5 py-5 text-white w-72 rounded">

                        <div class="mx-1 font-bold">User Create</div>
                        <hr class="my-2 "/>
                                <div class="m-1"><div>First Name: </div><input class="w-full p-1 my-1 text-black rounded" type="text" v-model="newUser.FirstName" /></div>
                                <div class="m-1"><div>Last Name: </div><input class="w-full p-1 my-1 text-black rounded" type="text" v-model="newUser.LastName" /></div>
                                <div class="m-1"><div>Email: </div><input class="w-full p-1 my-1 text-black rounded" type="text" v-model="newUser.Email" /></div>
                                <div class="m-1"><div>Company: </div><input class="w-full p-1 my-1 text-black rounded" type="text" v-model="newUser.Company" /></div>
                       
                        <div @click="add_" class="mt-3 m py-2"><span class="p-3 bg-gray-900 text-white hover:bg-gray-800 rounded">Agregar</span></div>
            </div>
</div>`}

let CardUser = {props: ['user'], template: `<div class="p-2 rounded-3xl shadow-xl bg-gradient-to-tr from-gray-400 via-gray-500 to-gray-200 " >
<span class="inline-block h-20 w-20 rounded-full bg-blue-500 "></span>
<div class="my-2 text-gray-800 text-xs">{{user.Id}}. {{user.FirstName}} {{user.LastName}}</div>
<div class="rounded-full m-1 px-3 py-1 text-black bg-white text-xs">{{user.Company}}</div> 
</div>`}


let UsersList = { components: {CardUser},
    computed: {    ...Vuex.mapState('Users', ['users']) },
 template: `<div class="grid grid-cols-4 gap-4 py-10">
        <div class="bg-gray-100 m-2 h-1/2 text-center  rounded-lg p-4 " v-for="user in users">
<CardUser :user="user" />
        </div>
</div>`}


export default {
    components: {RegisterUser, UsersList},
    template: `<div class="mx-20 my-24 text-white grid grid-cols-3">
<div>
<RegisterUser />
</div>

<div class="flex col-span-2 mx-1">
    <UsersList />
</div>

</div>`}