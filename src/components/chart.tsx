import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import * as echarts from "echarts";
import { xaxis, yaxis } from "../dashboard_data/charts_data";

export const Chart = component$(() => {
  const cmpBoxes = useSignal<string[]>();
  useTask$(() => {
    cmpBoxes.value = Array.from({ length: 2 * 2 }, () => {
      const chart = echarts.init(null, null, {
        renderer: "svg", // must use SVG rendering mode
        ssr: true, // enable SSR
        width: 300, // need to specify height and width
        height: 300,
      });

      chart.setOption({
        title: {
          text: "",
        },
        tooltip: {},
        xAxis: {
          data: xaxis,
        },
        yAxis: {},
        series: [
          {
            name: "sales",
            type: "bar",
            data: yaxis,
          },
        ],
      });

      return chart.renderToSVGString() as string;
    });
  });
  return (
    <>
      <div
        class={` grid min-h-screen w-full  grid-cols-2  grid-rows-2 gap-1  `}
      >
        {cmpBoxes.value?.map((chart, index) => {
          return (
            <div
              class="border"
              key={index}
              dangerouslySetInnerHTML={chart}
            ></div>
          );
        })}
      </div>
    </>
  );
});
