import StoreCard from "../../Common/StoreCard";
import CategoryViewBox from "../Home/CategoryViewBox";

const Store = () => {
  return (
    <div className="flex max-lg:flex-col lg:gap-6 lg:mt-8 justify-center max-lg:gap-5 lg:container lg:mx-auto relative ">
      <div className="w-1/3 max-lg:w-full h-full max-lg:bg-gray-50 max-lg:p-4  lg:pt-0 sticky max-lg:top-10 top-20 z-40">
        <CategoryViewBox />
      </div>
      <div className="lg:w-2/3 w-full flex flex-col gap-2 max-lg:px-4">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </div>
  );
};
export default Store;
