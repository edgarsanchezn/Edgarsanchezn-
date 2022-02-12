<template>
  <div class="flex bg-gray-400 w-full">
    <sidebarVue class="w-0 transition-all duration-300" :class="styleMenu" />
    <div class="w-full">
      <navbarVue @MenuToggle="MenuToggle" />
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
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    MenuToggle() {
      this.menu = !this.menu;
    },
  },
  computed: {
    styleMenu() {
      return {
        "invisible block": !this.menu,
        "md:w-2/12 w-full visible": this.menu,
      };
    },
  },
};
</script>