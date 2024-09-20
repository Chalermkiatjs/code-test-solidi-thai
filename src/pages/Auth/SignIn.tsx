import Button from "components/Button/Button";
import Card from "components/Card/Card";
import InputField from "components/InputField/InputField";
import InputLabel from "components/InputLabel/InputLabel";
import AuthLayout from "layouts/AuthLayout";
import React, { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import { UserResponseType } from "shared/types/UserResponseType";
import { useAuth } from "hooks/useAuth";
import { setAuthStorage } from "helpers/authStorage";
import { setProfileStorage } from "helpers/profileStorage";

const SignIn: FC = () => {
  const [username, setUsername] = useState<string>("Developer");
  const [password, setPassword] = useState<string>("Dev1234");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { saveToken, saveProfile } = useAuth();
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/user-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(async (data) => {
        const matchedData = data.find(
          (item: UserResponseType) => item.username === username
        );
        if (matchedData) {
          const isValidPassword = await bcrypt.compare(
            password,
            matchedData.password
          );
          if (isValidPassword) {
            const mockupToken =
              "eyJ1c2VybmFtZSI6IkRldmVsb3BlciIsInBhc3N3b3JkIjoiJDJhJDEwJHo2eG1HYmpIS3BqNGR0U2piTkxVbi5jY1BWaFlEVjNzOHVPZloybVVMZXBHNi9yUTkwWDNlIn0";
            saveToken(mockupToken);
            setAuthStorage(mockupToken);
            saveProfile({
              name: matchedData.name,
              username: matchedData.username,
              role: matchedData.role,
            });
            setProfileStorage(
              JSON.stringify({
                name: matchedData.name,
                username: matchedData.username,
                role: matchedData.role,
              })
            );
            setLoading(true);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            setErrors({
              password: "Incorrect password please try again.",
            });
          }
        } else {
          setErrors({
            username: "Incorrect username please try again.",
          });
        }
      });
  };
  return (
    <AuthLayout>
      <Card className="h-[400px] w-[450px] p-12">
        <p
          id="sign-in-title"
          className="text-3xl text-center font-bold text-slate-800 mt-4"
        >
          Welcome Back!
        </p>
        <p className="mt-2 text-center text-slate-600">
          Please sign in to your account.
        </p>
        <form id="sign-in-form" className="mt-6 mx-2" onSubmit={handleSignIn}>
          <div className="flex flex-col">
            <InputLabel className="text-slate-800">Username</InputLabel>
            <InputField
              required
              onChange={handleChangeUsername}
              value={username}
              className="w-full"
              type="text"
              error={errors["username"] !== undefined}
              helperText={errors["username"] ? errors["username"] : ""}
            />
          </div>
          <div className="flex flex-col">
            <InputLabel className="text-slate-800">Password</InputLabel>
            <InputField
              required
              onChange={handleChangePassword}
              value={password}
              className="w-full"
              type="password"
              error={errors["password"] !== undefined}
              helperText={errors["password"] ? errors["password"] : ""}
            />
          </div>
          <Button
            disabled={loading}
            className="w-full mt-8"
            size="small"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SignIn;
