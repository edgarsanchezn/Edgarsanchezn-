import Graphs from "./Graphs.js";
import Metrics from "./Metrics.js";

export default {
  components: { Metrics, Graphs },
  template: `
<div class="container w-full mx-auto pt-20">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        
        <Metrics />

        <hr class="border-b-2 border-gray-600 my-8 mx-4">

        <Graphs />
                                  
    </div>
</div>`,
};
