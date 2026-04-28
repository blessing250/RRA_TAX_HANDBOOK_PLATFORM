import { rmSync } from "node:fs"
import { join, resolve } from "node:path"

const root = resolve(process.cwd())
const devCache = resolve(join(root, ".next", "dev"))

if (!devCache.startsWith(root)) {
  throw new Error(`Refusing to clean path outside project: ${devCache}`)
}

try {
  rmSync(devCache, {
    force: true,
    maxRetries: 10,
    recursive: true,
    retryDelay: 250,
  })
} catch (error) {
  if (error?.code !== "ENOENT") {
    console.warn(
      `Could not clean .next/dev because Windows is still holding a file lock. ` +
        `Close any existing dev server for this repo if Next fails to start.`
    )
  }
}
