export const setPageLoadStorage = (profile: string) => {
  if (profile) return localStorage.setItem("page_load", profile);
};

export const getPageLoadStorage = (): string | null => {
  return localStorage.getItem("page_load");
};

export const removePageLoadStorage = () => {
  return localStorage.removeItem("page_load");
};
