<template>
<div class="flex  border">

<sidebarVue class="w-2/12 h-screen" v-bind:style="{ height: screen }"/>
<div class="w-screen" >


<navbarVue />
<contentBodyVue />
</div>


</div>
</template>
<script>
import sidebarVue from './sidebar/'
import navbarVue from './navbar/'
import contentBodyVue from './content-body/'

export default {
    components: {sidebarVue, navbarVue, contentBodyVue},
computed:{
    screen(){
return (window.screen.height / 100 * 87.5) + 'px'
    }   

}
}
</script>