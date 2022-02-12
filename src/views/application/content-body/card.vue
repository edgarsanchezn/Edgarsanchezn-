<template lang="">
<div class="relative px-2 py-5 ">
    <div class="border px-4 py-4 rounded-xl shadow-xl bg-gray-100">
        <div>{{text}}</div>
        <div class="font-bold text-2xl">$53k</div>

        <hr class="m-0 md:my-4" />
        <div class="hidden md:block md:visible">+55% than lask week</div>

    </div>
        <div class="border rounded-xl bg-gray-700 text-white p-2 absolute  top-0 right-3"><slot></slot></div>
</div>
</template>
<script>
export default {
  props: ["text"],
};
</script>
<style lang="">
</style>