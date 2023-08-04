import { useState } from "react";
import PrimaryButton from "../../Common/PrimaryButton";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otpElement, setOtpElement] = useState(false);
  return (
    <div className="flex max-lg:flex-col h-screen lg:container mx-auto ">
      <div
        className="max-lg:hidden
       lg:w-1/2 flex justify-center h-full items-center "
      >
        jhgsjskhds
      </div>
      <div className="w-full lg:w-1/2 lg:border-l-2 border-primary h-full">
        <div className="flex flex-col gap-10 justify-center items-center w-full lg:pt-10 ">
          <h1 className=" font-inter  text-primary ">Login With Otp</h1>
          <input
            type="number"
            placeholder="Type Number here.."
            className="input input-primary input-ghost w-full max-w-xs"
          />
          <PrimaryButton
            text={"Get Otp"}
            onClick={() => setOtpElement(true)}
            className="px-10"
          />
          {otpElement && (
            <div className="flex flex-col gap-10 justify-center items-center w-full  ">
              <input
                type="number"
                placeholder="Enter otp here..."
                className="input input-primary input-ghost w-full max-w-xs"
              />
              <PrimaryButton
                text={"Submit"}
                onClick={() => navigate("/home")}
                className="px-10"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
