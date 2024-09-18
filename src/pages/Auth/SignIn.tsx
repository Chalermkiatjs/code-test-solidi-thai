import Button from "components/Button/Button";
import Card from "components/Card/Card";
import InputField from "components/InputField/InputField";
import InputLabel from "components/InputLabel/InputLabel";
import AuthLayout from "layouts/AuthLayout";
import{ FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const SignIn: FC = () => {
  const navigate = useNavigate()
  const handleSignIn = (e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    navigate("/")
    console.log(e)
  }
  return (
    <AuthLayout>
      <Card className="h-[400px] w-[450px] p-12">
        <p id="sign-in-title" className="text-3xl text-center font-bold text-slate-800">Welcome Back!</p>
        <p className="mt-2 text-center text-slate-600">Please sign in to your account.</p>
        <form id="sign-in-form" className="mt-4" onSubmit={handleSignIn}>
          <div className="flex flex-col">
            <InputLabel className="text-slate-800">Username</InputLabel>
            <InputField className="w-full" type="text" />
          </div>
          <div className="flex flex-col">
            <InputLabel className="text-slate-800">Password</InputLabel>
            <InputField className="w-full" type="password" />
          </div>
          <Button className="w-full mt-4" size="small" type="submit">Sign In</Button>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SignIn;
