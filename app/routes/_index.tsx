import { redirect } from "@remix-run/node";
import { LoaderFunctionArgs } from "react-router";
import { authenticator } from "~/utils/auth.server";

export const loader = async (args: LoaderFunctionArgs) => {
  const { request } = args;

  const session = await authenticator.isAuthenticated(request);
  const pathname = new URL(request.url).pathname;
  console.log(`Session: {
    ${session}
  }`)

  if ( !session ) {
    let to = ``;
    // ignore only `/` routes
    if (pathname !== "/") {
      to = `?to=${pathname}`;
    }

    return redirect(`/login${to}`);
  } 
  
  if (pathname === "/") {
    return redirect("/home");
  }

  return {};
};
