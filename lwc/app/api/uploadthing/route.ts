import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // config: {...},
  // config: {callbackUrl:"http://localhost:3000/components/file-upload.tsx"},
});

// export const runtime = "nodejs";