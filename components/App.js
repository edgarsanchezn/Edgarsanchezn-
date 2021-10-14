import Admin from "./Admin/index.js"
import NavBar from "./NavBar.js"
import footerV from "./Footer-v.js";


export default {
template: `<div>
<div class="bg-black-alt font-sans leading-normal tracking-normal">

<NavBar />
<router-view></router-view>
<footerV />
</div>
</div>`,
components:{Admin, NavBar, footerV}
}
