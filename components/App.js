import NavBar from "./navbar/index.js"
import footerV from "./Footer-v.js";


export default {
template: `
<div class="bg-black-alt font-sans leading-normal tracking-normal">

<NavBar />
<router-view></router-view>
<footerV />

</div>`,
components:{NavBar, footerV}
}
