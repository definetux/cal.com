import type { AppMeta } from "@calcom/types/App";

import config from "./config.json";
import _package from "./package.json";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const metadata = {
  description: _package.description,
  category: "other",
  // FIXME: Currently for an app to be shown as installed, it must have this variable set. Either hardcoded or if it depends on some env variable, that should be checked here
  installed: true,
  rating: 0,
  reviews: 0,
  trending: true,
  verified: true,
  ...config,
} as AppMeta;

export default metadata;
