import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import * as echarts from 'echarts';


export default component$(() => {

  const cmpBoxes = useSignal<string[]>();
   useTask$(() => { 

    cmpBoxes.value = Array.from({ length: 2 * 2 }, () => {
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
  

  {cmpBoxes.value?.map((chart,index) =>  {
   
    return <div key={index} dangerouslySetInnerHTML={chart}></div>
  }  )}
    
  </>
 )
});