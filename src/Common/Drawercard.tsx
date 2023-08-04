import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const DrawerCard = () => {
  return (
    <div className="flex gap-5 items-center bg-white text-black-800 rounded-lg p-2 shadow-md text-primary">
      <div>
        <WrenchScrewdriverIcon className="h-6 w-6 " />
      </div>
      <div>
        <div className="font-bold"> Help center</div>
        <div className=" font-medium text-xs">Reach the Support</div>
      </div>
    </div>
  );
};
export default DrawerCard;
