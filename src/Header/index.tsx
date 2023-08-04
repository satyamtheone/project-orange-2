import {
  BuildingStorefrontIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Drawer from "../Common/Drawer";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-primary p-2 flex justify-between items-center text-white">
      <div>
        <Drawer />
      </div>
      <div className=" flex justify-center items-center gap-2 lg:gap-4">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <BuildingStorefrontIcon
            className="h-6 w-6"
            onClick={() => navigate("/store")}
          />
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <MegaphoneIcon
            className="h-6 w-6"
            onClick={() => navigate("/promotion")}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
