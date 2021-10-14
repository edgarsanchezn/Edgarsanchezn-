import BarV from "./BarV.js";
import BarVue from "./BarVue.js";
import doughnutV from "./doughnutV.js";
import LineV from "./LineV.js";
import TableGraph from "./TableGraph.js";
import TemplateGraph from "./TemplateGraph.js";

TableGraph
 
export default {
  components: { TemplateGraph, BarV, BarVue, LineV, doughnutV, TableGraph },
  template: ` <div class="flex flex-row flex-wrap flex-grow mt-2">

<TemplateGraph title="Graph Bar 1">
    <BarV />
</TemplateGraph>
<TemplateGraph title="Graph Line">
    <LineV />
</TemplateGraph>
<TemplateGraph title="Graph Bar 2" clase="xl:w-1/3">
    <BarVue />
</TemplateGraph>
<TemplateGraph title="Graph" clase="xl:w-1/3">
    <doughnutV />
</TemplateGraph>

<TemplateGraph title="Template"  clase="xl:w-1/3" />

<TableGraph />


</div>`,
};
