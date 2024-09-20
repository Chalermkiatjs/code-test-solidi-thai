export const setProfileStorage = (profile: string) => {
    if (profile) return localStorage.setItem("profile", profile);
  };
  
  export const getProfileStorage = ():string | null => {
    return localStorage.getItem("profile");
  };
  
  export const removeProfileStorage = () => {
    return localStorage.removeItem("profile");
  };
  