export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item === null) return null;
  const value = JSON.parse(item);
  return value;
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
