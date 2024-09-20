export const setAuthStorage = (token: string) => {
  if (token) return localStorage.setItem("token", token);
};

export const getAuthStorage = ():string | null => {
  return localStorage.getItem("token");
};

export const removeAuthStorage = () => {
  return localStorage.removeItem("token");
};
