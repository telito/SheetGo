export function setStarLocalStorage(key: string, value: number) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStarLocalStorage(key: string) {
  const json = localStorage.getItem(key);

  if (!json) {
    return null;
  }

  const starValue = JSON.parse(json);

  return starValue ?? null;
}
