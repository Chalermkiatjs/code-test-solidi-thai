import Button from "components/Button/Button";
import Card from "components/Card/Card";
import InputField from "components/InputField/InputField";
import InputLabel from "components/InputLabel/InputLabel";
import AuthLayout from "layouts/AuthLayout";
import{ FC, FormEvent } from "react";

const SignIn: FC = () => {
  const handleSignIn = (e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <AuthLayout>
      <Card className="h-[400px] w-[450px] p-12">
        <p id="sign-in-title" className="text-3xl text-center font-bold">Sign In</p>
        <form id="sign-in-form" className="mt-4" onSubmit={handleSignIn}>
          <div className="flex flex-col">
            <InputLabel>Username</InputLabel>
            <InputField className="w-full" type="text" />
          </div>
          <div className="flex flex-col">
            <InputLabel>Password</InputLabel>
            <InputField className="w-full" type="password" />
          </div>
          <Button className="w-full mt-4" size="small" type="submit">Sign In</Button>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SignIn;
