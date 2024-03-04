import { component$, useSignal, useTask$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import * as echarts from 'echarts';



export interface MyState {
  charts: Array<echarts.ECharts>;
}

export default component$(() => {
 

  const cols = 12;
  const rows = 12;
 

  const noOfColumns = useSignal<string>("");
  const noOfRows = useSignal<string>("");


  const hintBoxes = useSignal<Array<number>>();
  const cmpBoxes = useSignal<string[]>();

 




  useTask$(() => {
   

    noOfColumns.value = `grid-cols-12`;
    noOfRows.value = "grid-rows-12";
    hintBoxes.value = Array.from({ length: cols * rows }, (x, i) => i + 1);
    cmpBoxes.value = Array.from({ length: cols * rows }, () => {
      const chart = echarts.init(null, null, {
        renderer: 'svg', // must use SVG rendering mode
        ssr: true, // enable SSR
        width: 300, // need to specify height and width
        height: 300
      });
    
    
      chart.setOption({
        title: {
          text: 'Bar charts'
        },
        tooltip: {},
        xAxis: {
          data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
        },
        yAxis: {},
        series: [
          {
            name: 'sales',
            type: 'bar',  
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
      
   
    
     return chart.renderToSVGString() as string
    });
  
  });

  return (
    <>
      <div class="relative min-h-screen w-full overflow-auto ">
        <div
          class={`grid min-h-screen w-full ${noOfColumns.value}  ${noOfRows.value} absolute z-0 gap-1`}
        >
          {hintBoxes.value?.map((item, index) => (
            <div key={index} class=" "></div>
          ))}
        </div>
        

        <div
          class={`grid min-h-screen w-full ${noOfColumns.value}  ${noOfRows.value} absolute z-10 gap-1 bg-transparent `}
        >
         {cmpBoxes.value?.map((chart,index) =>  {
   
   return <div key={index} dangerouslySetInnerHTML={chart}></div>
 }  )}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
