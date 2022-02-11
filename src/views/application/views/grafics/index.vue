<template lang="">
    <div>
        <div>Grafics</div>
        <div class="flex">

        <lineChartVue class="invisible md:visible" />
        <lineChartVue class="invisible md:visible" />
        <lineChartVue class="invisible md:visible" />


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