export default {
    props: ["title", "clase"],
    template: `
  <div class="w-full md:w-1/2 p-3" :class="clase">
  
  <div class="bg-gray-900 border border-gray-800 rounded shadow">
      <div class="border-b border-gray-800 p-3">
          <h5 class="font-bold uppercase text-gray-600">{{title}}</h5>
      </div>
      <div class="p-5">
      <slot />
      </div>
  </div>
  
  </div>`,
  };