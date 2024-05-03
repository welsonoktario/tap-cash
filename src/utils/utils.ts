// Source: https://youmightnotneed.com/lodash/#chunk
export const chunk = <T>(arr: T[], chunkSize = 1, cache: T[][] = []) => {
  const tmp = [...arr];

  if (chunkSize <= 0) return cache;

  while (tmp.length) cache.push(tmp.splice(0, chunkSize));

  return cache;
};
