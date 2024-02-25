import { component$ } from "@builder.io/qwik";


import Logo from "./logo";
export const TitleOnToolBar = component$(() => {
  return (
    <div class="mx-2 flex flex-1 gap-2">
      {/* <SiTailwindcss class="text-6xl"></SiTailwindcss> */}
      <Logo />  
    
    </div>
  );
});
