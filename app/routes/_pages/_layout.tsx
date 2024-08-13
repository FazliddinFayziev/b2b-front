import { Box } from "@mui/material";
import { Outlet } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { AppProvider } from "~/contexts/context";
import { authenticator } from "~/utils/auth.server";
import { Drawer, Logo, TopBar } from "~/components";
import type { LoaderFunctionArgs } from "@remix-run/node";

export default function BaseLayout() {
  return (
    <>
      <AppProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <TopBar />
          <Box sx={{ overflow: 'hidden', height: '100%' }}>
            <Drawer>
              <Outlet />
            </Drawer>
          </Box>
        </Box>
      </AppProvider>
    </>
  );
}


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await authenticator.isAuthenticated(request);
  const pathname = new URL(request.url).pathname;

  let to = ``;
  if (pathname !== "/") {
    to = `?to=${pathname}`;
  }

  if (!session) {
    return redirect(`/login${to}`);
  }

  return {};
};
