// Resolves public asset paths against the configured base path so that
// absolute "/..." references work both locally and on GitHub Pages.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
