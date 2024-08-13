import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { sessionStorage } from "~/services/session.server";
import * as jwt from 'jsonwebtoken';

export const authenticator = new Authenticator<{}>(sessionStorage);

const domain = process.env.REMIX_APP_AUTH0_DOMAIN;
const clientId = process.env.REMIX_APP_AUTH0_CLIENT_ID;
const clientSecret = process.env.REMIX_APP_AUTH0_CLIENT_SECRET;

if (!domain || !clientId || !clientSecret) {
  throw new Error("Auth0 configuration is missing environment variables.");
}

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: "http://localhost:3000/auth/auth0/callback",
    clientID: clientId, 
    clientSecret: clientSecret, 
    domain: domain,
    scope: "openid profile email offline_access",
    audience: 'coolness-api',
  },
  async ({ accessToken, extraParams, profile, refreshToken }) => {
    console.log(`verify=${JSON.stringify({ accessToken, extraParams, profile, refreshToken }, null, 2)}`);
    
    const payload: any = jwt.decode( accessToken, { json: true } );
    
    return {
      id: profile.id,
      name: profile.displayName,
      avatar: profile.photos?.[0]?.value,
      accessToken,
      accessTokenExpiration: payload.exp,
      refreshToken,
      idToken: extraParams.id_token,
    };
  }
);


authenticator.use(auth0Strategy);
