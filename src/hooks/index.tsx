import initialDetails from '../api';

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

export function getItemTemplate(id: string) {
  const include = initialDetails.filter((item) => {
    if (item.id.includes(id)) {
      return item;
    }
  });

  return include;
}
