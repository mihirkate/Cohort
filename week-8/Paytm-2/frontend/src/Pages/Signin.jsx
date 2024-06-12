import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { SubHeading } from "../Components/SubHeading";
import { useState } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Implement sign-in functionality here
    // For example, you can send a request to your server to authenticate the user
    console.log("Email:", email);
    console.log("Password:", password);
    // Redirect to dashboard after successful sign-in
    navigate("/dashboard");
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="harkirat@gmail.com"
            label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            type="password"
            placeholder="123456"
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignIn} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
