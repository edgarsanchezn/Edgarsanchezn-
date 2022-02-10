<template lang="">
    <div>
        <div>Grafics</div>
        <div class="flex">

        <lineChartVue />
        <lineChartVue />
        <lineChartVue />


        </div>
    </div>
</template>
<script>
import lineChartVue from "./lineChartVue.vue";

export default {
  components: { lineChartVue },
};
</script>
<style lang="">
</style>