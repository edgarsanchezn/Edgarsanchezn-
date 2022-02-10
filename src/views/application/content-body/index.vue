<template>
    <div class=" mt-2">


        <div class="p-1 flex">
<card class="w-1/3"/>
<card class="w-1/3"/>
<card class="w-1/3"/>




        </div>
    <router-view></router-view>
    </div>
</template>
<script>
import card from './card.vue'
export default {
  components: { card },

    
}
</script>