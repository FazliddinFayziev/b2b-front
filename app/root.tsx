import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import React from "react";
import { AuthBindings, Refine } from "@refinedev/core";
import { notificationProvider, RefineSnackbarProvider } from "@refinedev/mui";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, { UnsavedChangesNotifier } from "@refinedev/remix-router";
import { withEmotionCache } from "@emotion/react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";
import dataProvider from "@refinedev/nestjsx-crud";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { ClientStyleContext } from "~/contexts";
import { authenticator } from "~/utils/auth.server";

const API_URL = "https://api.nestjsx-crud.refine.dev";

export const meta: MetaFunction = () => ([{
  title: "Coolness.ai",
}]);

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);

    useEnhancedEffect(() => {
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      clientStyleData.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap" rel="stylesheet"/>
          <meta name="emotion-insertion-point" content="emotion-insertion-point" />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  const { profile, to } = useLoaderData<typeof loader>();
  const authProvider: AuthBindings = {
    login: async ({ providerName }) => {
      if (providerName) {
        window.location.href = `/auth/${providerName}?to=${to}`;
        return { success: true };
      }
      return { success: true, redirectTo: "/" };
    },
    logout: async () => {
      window.location.href = "/auth/logout";
      return { success: true };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      return { authenticated: !!profile };
    },
    getPermissions: async () => null,
    getIdentity: async () => profile || null,
  };

  return (
    <Document>
      <RefineKbarProvider>
        <RefineSnackbarProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            notificationProvider={notificationProvider}
            authProvider={authProvider}
            resources={[
              {
                name: "home",
                list: "/home",
              },
              {
                name: "storage",
                list: "/storage",
              },
              {
                name: "usage",
                list: "/usage",
              },
              {
                name: "apikeys",
                list: "/apikeys",
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
            }}
          >
            <Outlet />
            <UnsavedChangesNotifier />
            <RefineKbar />
          </Refine>
        </RefineSnackbarProvider>
      </RefineKbarProvider>
    </Document>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const profile = await authenticator.isAuthenticated(request);
  const to = new URL(request.url).searchParams.get("to");
  return json({ profile, to });
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
  ];
}
