
import { Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";


export const onRequest: RequestHandler = (event) => {
  event.cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  }); // disable caching
  console.log("auth-guard");

 
  
};

export default component$(() => {
  return (
   
      <Slot />
   
  );
});
