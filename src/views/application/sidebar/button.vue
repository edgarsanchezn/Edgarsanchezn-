<template>
            <div class="px-5 py-3">
            <router-link :to="to">
            <div class="py-3 px-4 rounded-xl" v-bind:class="{'bg-green-500' : isActive, 'hover:bg-gray-600': !isActive}">{{title}}</div>
            </router-link>
        </div>

</template>
<script>
export default {
//hover:bg-gray-600
    props: ['title', "to"],
    computed: {
        isActive(){
            return this.$route.path == this.to
        }
    }
}
</script>