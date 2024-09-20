export type UserDataType = {
  id: number;
  name: string;
  username: string;
  password: string;
  role: string;
};

export const UserData: UserDataType[] = [
  {
    id: 1,
    name: "Software Developer",
    username: "Developer",
    password: "$2a$10$z6xmGbjHKpj4dtSjbNLUn.ccPVhYDV3s8uOfZ2mULepG6/rQ90X3e",
    role: "Admin",
  },
];
