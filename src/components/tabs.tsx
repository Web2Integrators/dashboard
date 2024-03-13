import { component$ } from "@builder.io/qwik";
import { Tab, TabList, TabPanel, Tabs } from "@qwik-ui/headless";
import { Chart } from "./chart";

import { Table } from "./table";
//import { Table } from "~/integrations/react/mui";


//import { Tableapp } from "./table";

export default component$(() => {
  return (
    <>
      <div class="m-12">
        <h3>Dash Board demo with Echarts and Handsontable</h3>
        <div class="p-5">
          <h4>Charts are rendered Server side using Echarts library(No react)</h4>
          <h4>Handsontable is rendered Server side but using @handsontable/react</h4>
        </div>

        <Tabs class="m-4" behavior="automatic">
          <TabList class="mb-4 flex gap-3 border border-cyan-300">
            <Tab><span class="capitalize font-bold">Chart</span></Tab>
            <Tab><span class="capitalize font-bold">Table</span></Tab>
          </TabList>
          <TabPanel>
            <Chart />
          </TabPanel>
          <TabPanel>
           <Table client:visible ></Table>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
});
