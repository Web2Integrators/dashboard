import { serverAuth$ } from "@builder.io/qwik-auth";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import type { GoogleProfile } from "@auth/core/providers/google";
import type { Provider } from "@auth/core/providers";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    // session: {
    //   strategy: "database",
    //   maxAge: 60 * 60 * 24 * 7, // 1 week
    //   updateAge: 60 * 60 * 24, // 1 day
    // },
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      Google({
        clientId: env.get("GOOGLE_ID"),
        clientSecret: env.get("GOOGLE_SECRET"),
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            theme: "auto", // custom attribute
            language: profile.language,
            image: profile.picture,
            emailVerified: profile.email_verified,
            ...profile,
          };
        },
      }),
      GitHub({
        clientId: env.get("GITHUB_ID")!,
        clientSecret: env.get("GITHUB_SECRET")!,
      }),
    ] as Provider[],
  }));
  declare module "@auth/core/types" {
    interface Session {
      error?: "RefreshAccessTokenError";
      id?: string;
      theme?: string;
    }
  }
  
  declare module "@auth/core/adapters" {
    interface AdapterUser {
      theme?: string;
    }
  }