import Content from "./content/index.js";
import footerV from "./footer-v.js";
import NavBar from "./NavBar.js";
footerV

export default {
  template: `
    <div class="bg-black-alt font-sans leading-normal tracking-normal">
    <NavBar />
    <Content />
    <footerV />
    </div>`,
  components: { NavBar, Content, footerV },
};
