import { UserRole } from "@prisma/client";
import { JwtPayload, verify } from "jsonwebtoken";

/**
 * Decode a token to get and return the logged-in user's email from it.
 *
 * @param {string} token - The token which can be used to login to the app.
 *
 * @returns {string} The logged-in user's email
 *
 * @throws {Error} Throws an error if SSO_SECRET and NEXTAUTH_SECRET is undefined
 */
export const decodeSSOToken = (token: string) => {
  if (
    process.env.SSO_SECRET === undefined ||
    process.env.NEXTAUTH_SECRET === undefined
  )
    throw new Error(
      "SSO_SECRET and NEXTAUTH_SECRET is not provided in the server!",
    );

  const decoded = verify(token, process.env.SSO_SECRET) as JwtPayload;

  return decoded as { id: string; role: UserRole; name: string; email: string };
};
