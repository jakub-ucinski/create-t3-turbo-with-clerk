import { getAuth } from "@clerk/nextjs/server";
import {
  createNextApiHandler,
  CreateNextContextOptions,
} from "@trpc/server/adapters/next";

import { appRouter, createContextInner } from "@acme/api";

export default createNextApiHandler({
  router: appRouter,
  createContext: (opts: CreateNextContextOptions) =>
    createContextInner({ auth: getAuth(opts.req) }),
});
