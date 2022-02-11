<template>
  <div class="flex  bg-gray-400">
    <sidebarVue class="w-0 md:w-2/12 block invisible md:visible" />
    <div class="">
      <navbarVue />
      <contentBodyVue />
    </div>
  </div>
</template>
<script>
import sidebarVue from "./sidebar/";
import navbarVue from "./navbar/";
import contentBodyVue from "./content-body/";

export default {
  components: { sidebarVue, navbarVue, contentBodyVue },
  created() {},
  computed: {
    styles() {
      return {
        height: (window.screen.height / 100) * 84 + "px",
      };
    },
  },
};
</script>