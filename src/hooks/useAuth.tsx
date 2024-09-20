import { getAuthStorage } from "helpers/authStorage";
import { getProfileStorage } from "helpers/profileStorage";
import React, { createContext, useContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface Profile {
  name: string | null;
  username: string | null;
  role: string | null;
}

interface AuthContextProps {
  profile: Profile;
  token: string | null;
  saveProfile: (profile: Profile) => void;
  saveToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextProps>({
  profile: {
    name: "",
    username: "",
    role: "",
  },
  token: "",
  saveProfile: () => null,
  saveToken: () => null,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<Profile>(() => {
    const savedProfile = getProfileStorage();
    return savedProfile
      ? JSON.parse(savedProfile)
      : { name: null, username: null, role: null };
  });
  const [token, setToken] = useState<string | null>(getAuthStorage());

  const saveProfile = (profile: AuthContextProps["profile"]) => {
    setProfile(profile);
  };

  const saveToken = (token: string) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ profile, token, saveProfile, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
