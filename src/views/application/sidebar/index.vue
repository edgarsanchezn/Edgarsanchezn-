<template>
        <div class="bg-gray-700 rounded-xl text-white m-4 py-2">
        <div class="px-5 py-3">
            <div class="px-4">Aplicacion</div>
            
            </div>
        <hr class="my-2" />

            <buttonVue title="Dashboard" to="/application"/>
            <buttonVue title="Users" to="/application/users"/>
            <buttonVue title="Products" to="/application/products" />
            <buttonVue title="Clients" to="/application/clients" />

    </div>
</template>
<script>
import buttonVue from './button.vue'

export default {
    components: {buttonVue}
}
</script>