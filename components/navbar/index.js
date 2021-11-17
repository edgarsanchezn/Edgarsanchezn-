import UserMenu from "./UserMenu.js";

let LiRouter = {
  data() {
    return {
      clase: "block py-1 md:py-3 pl-1 align-middle no-underline hover:text-gray-100 border-b-2"
    }
  },
  props: ["info"],
  computed: {
    activeStyle: function () {
      if (this.info.active) {
        return "text-blue-400 border-blue-400 hover:border-blue-400"
      } else {
        return "text-gray-500 border-gray-900 hover:border-" + this.info.color + "-400"
      }
    },

  },
  template: `
<router-link :to="info.to">
    <li class="mr-6 my-2 md:my-0">
        <a :class="[clase, activeStyle]">
          <i :class='"fas " + this.info.icon + " fa-fw mr-3"''></i><span class="pb-1 md:pb-0 text-sm">{{info.title}}</span>
        </a>
    </li>
</router-link>`,
};

let prefijo = "/system.html"

export default {
  data() {
    return {
      links: [
        { to: prefijo + "/",  title: "Home", icon: "fa-home", color: "blue", active: true,        },
        { to: prefijo + "/tasks", title: "Tasks", icon: "fa-tasks", color: "pink", active: false,        },
        { to: prefijo + "/users", title: "Users", icon: "fa-users", color: "purple", active: false,        },
        { to: prefijo + "/analytics", title: "Analytics", icon: "fa-chart-area", color: "green", active: false,        },
        { to: prefijo + "/payments", title: "Payments", icon: "fa-wallet", color: "red", active: false,        },
      ],
      menuNav: "hidden"
    };
  },
  methods: {
    toggle: function(){
      this.menuNav = this.menuNav == "" ? "hidden" : ""
    }
  },
  components: { UserMenu, LiRouter },
  template: `<nav id="header" class="bg-gray-900 fixed w-full z-10 top-0 shadow">

<div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
    
  <div class="w-1/2 pl-2 md:pl-0">
    <a class="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"  href="/system.html"> 
      <i class="fas fa-moon text-blue-400 pr-3"></i> Admin App Dark Mode
    </a>
  </div>

  <UserMenu v-on:toggle="toggle" />

  <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-900 z-20" :class="menuNav" id="nav-content">
    <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">

    <LiRouter v-for="link, key in links" :info="link" :key="key" />

    </ul>
    
    <div class="relative pull-right pl-4 pr-4 md:pr-0">
       <input type="search" placeholder="Search" class="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal">
       <div class="absolute search-icon" style="top: 0.375rem;left: 1.75rem;">
  <svg class="fill-current pointer-events-none text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
  </svg>
       </div>
   </div>
    
  </div>
  
</div>
</nav>`,
};
