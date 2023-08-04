import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Avatar from "./Avatar";
import image from "../assets/image1.jpeg";
import DrawerCard from "./Drawercard";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="drawer z-50 transition-all duration-500">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={handleDrawerToggle}
      />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
          <Bars4Icon className="h-6 w-6" />
        </label>
      </div>
      {isDrawerOpen && (
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay"
            onClick={handleDrawerToggle}
          ></label>

          <div className="menu w-80 h-full bg-white p-0">
            <div className=" bg-orange-400 relative top-0 h-44 w-full flex justify-center items-center rounded-b-xl">
              <div className="w-full flex justify-end absolute top-2 right-3">
                <XMarkIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                />
              </div>
              <div className="mt-10">
                <div className="flex flex-col justify-center items-center">
                  <Avatar image={image} />
                  <div className=" text-xl">Satyam Singh Chauhan</div>
                  <div className=" text-sm">+919999999999</div>
                </div>
                <DrawerCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
