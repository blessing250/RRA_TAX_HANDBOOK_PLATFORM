import { rmSync } from "node:fs";
import { join } from "node:path";

const devCachePath = join(process.cwd(), ".next", "dev");

try {
  rmSync(devCachePath, { recursive: true, force: true });
  console.log(`Removed ${devCachePath}`);
} catch (error) {
  if (error && error.code === "EPERM") {
    console.error(`Could not remove ${devCachePath} because files are locked.`);
    console.error("Stop the public frontend dev server, then run pnpm run clean:dev again.");
  }
  throw error;
}
