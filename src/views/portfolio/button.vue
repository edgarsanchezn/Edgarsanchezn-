<template lang="">
            <router-link :to="'/' + to" 
              ><div class="border p-2 rounded">{{title}}</div></router-link
            >
</template>
<script>
export default {
props: ['to', 'title']
}
</script>
<style lang="">
    
</style>