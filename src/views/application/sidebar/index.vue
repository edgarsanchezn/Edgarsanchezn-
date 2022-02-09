<template>
        <div class="bg-gray-700 rounded-xl text-white m-4 py-2">
        <div class="px-5 py-3">
            <div class="px-4">Aplicacion</div>
            
            </div>
        <hr class="my-2" />
        <div class="px-5 py-3">
            
            <div class="bg-green-500 py-3 px-4 rounded-xl">Dashboard</div>

        </div>
            
            <buttonVue title="Users" />
            <buttonVue title="Products" />
            <buttonVue title="Clients" />

    </div>
</template>
<script>
import buttonVue from './button.vue'

export default {
    components: {buttonVue}
}
</script>