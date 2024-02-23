import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { HeroAuth } from "~/components/page-auth/hero-auth";
import { HeroDescription } from "~/components/page-auth/hero-description";
import { LoginButtons } from "~/components/page-auth/login-buttons-group";

export const useCheckSession = routeLoader$(async (event) => {
  const session = event.sharedMap.get("session");
  if (session && session.expires > new Date().toISOString()) {
    throw event.redirect(302, `/`);
  }
});

export default component$(() => {
  useCheckSession();
  return (
    <>
      <HeroAuth title="Welcome to Itanta">
        <HeroDescription q:slot="hero-description" />
        <LoginButtons q:slot="login-buttons" />
      </HeroAuth>
    </>
  );
});
