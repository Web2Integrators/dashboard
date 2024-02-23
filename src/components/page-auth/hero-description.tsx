import { component$ } from "@builder.io/qwik";

export const HeroDescription = component$(() => {
  return (
    <div class="mb-5 flex flex-col text-sm sm:text-base">
      <p>
        <span>Itanta analytics demo with modern web technologies </span>
        <span class="font-bold">
          <a href="https://qwik.builder.io/">Qwik</a>
        </span>
        .
      </p>
      <p>
        <span>Qwik,tailwind,auth,mongodb,modular forms </span>
        
      </p>
    </div>
  );
});
