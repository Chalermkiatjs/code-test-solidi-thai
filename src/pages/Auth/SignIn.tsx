import Card from "components/Card/Card";
import InputField from "components/InputField/InputField";
import InputLabel from "components/InputLabel/InputLabel";
import AuthLayout from "layouts/AuthLayout";
import React from "react";

const SignIn: React.FC = () => {
  return (
    <AuthLayout>
      <Card className="h-[60dvh] w-[450px]">
        <div id="logo" className="p-5 my-4 mx-auto text-center text-5xl w-fit">
          Logo
        </div>
        <div className="flex flex-col">
          <InputLabel>Username</InputLabel>
          <InputField type="text" />
        </div>
        <div>
          <label>Password</label>
          <InputField type="password" />
        </div>
      </Card>
    </AuthLayout>
  );
};

export default SignIn;
