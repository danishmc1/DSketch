export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) {
    return clean;
  }
  if (clean.startsWith(`${basePath}/`)) {
    return clean;
  }
  return `${basePath}${clean}`;
}
