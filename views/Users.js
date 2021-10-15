export default {
    computed: {
        ...Vuex.mapState('Users', ['users']),
    },
    template: `<div class="mx-20 my-24 text-white">

<div>
<span >Users</span>
</div>
<div class="grid grid-cols-5 gap-4">
        <div class="m-2 text-center border rounded-lg p-4" v-for="user in users">
                                <span class="inline-block h-20 w-20 rounded-full bg-red-500 "></span>
                                <div class="my-2">{{user.id}}. {{user.name}}</div>
                                <span class="rounded-full m-1 px-3 py-1 text-black bg-white">{{user.website}}</span>      
        </div>
</div>

</div>`}