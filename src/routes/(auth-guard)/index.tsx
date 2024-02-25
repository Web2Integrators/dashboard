import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useAppState } from "~/_state/use-app-state";

export default component$(() => {
  const rootStore = useAppState();
  const noOfColumns = useSignal<string>("5");
  const noOfRows = useSignal<string>("5");

  const hintBoxes = useSignal<Array<number>>();
  const cmpBoxes = useSignal<string[]>();

  useTask$(() => {
    noOfColumns.value = `grid-cols-5`;
    noOfRows.value = "grid-rows-5";
    hintBoxes.value = Array.from({ length: 5 * 5 }, (x, i) => i + 1);
    cmpBoxes.value = Array.from({ length: 5 * 5 }, (x, i) => {
      if (i % 2 === 0) {
        return " Chart";
      } else {
        return "Table";
      }
    });
  });

  return (
    <>
      <div class="relative min-h-screen w-full overflow-auto ">
        {rootStore?.designMode ? (
          <div
            class={`grid min-h-screen w-full ${noOfColumns.value}  ${noOfRows.value} absolute z-0 gap-1`}
          >
            {hintBoxes.value?.map((item, index) => (
              <div key={index} class="border "></div>
            ))}
          </div>
        ) : null}

        <div
          class={`grid min-h-screen w-full ${noOfColumns.value}  ${noOfRows.value} absolute z-10 gap-1 bg-transparent `}
        >
          {cmpBoxes.value?.map((item, index) => (
            <div key={index} class="border border-dotted border-fuchsia-800">
              {item}
            </div>
          ))}
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
