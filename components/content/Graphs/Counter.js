export default {
    methods: {
        ...Vuex.mapMutations({increment: 'counter/increment'})
    },
computed: {
    ...Vuex.mapState('counter', ['count']),
},
    template: `<div><button  class="text-white" @click="increment">+</button>
<span class="text-white">
<div class="text-white">{{count}}</div>
</span></div>`}