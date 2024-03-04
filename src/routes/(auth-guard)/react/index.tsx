import { component$,  } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {  TableApp } from "~/integrations/react/mui";

export default component$(() => {


  return (
    <>
      <h1 class="m-2">hands On table Demo</h1>
      

      <TableApp client:visible></TableApp>

     

    
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};
