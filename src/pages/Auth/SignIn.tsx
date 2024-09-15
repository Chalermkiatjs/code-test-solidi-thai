import Card from "components/Card/Card";
import InputField from "components/InputField/InputField";
import AuthLayout from "layouts/AuthLayout";
import React from "react";

const SignIn: React.FC = () => {
  return (
    <AuthLayout>
      <Card className="h-[80dvh] xl:w-[25dvw] lg:w-[35dvw] md:w-[45dvw] sm:w-full w-full">
        <div id="logo" className="p-5 my-4 mx-auto text-center text-5xl w-fit">
          Logo
        </div>
        <div>
          <label>Username</label>
          <InputField />
          <label>Username</label>
          <InputField />
        </div>
      </Card>
    </AuthLayout>
  );
};

export default SignIn;
