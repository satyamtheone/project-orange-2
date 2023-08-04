import image from "../assets/veg.jpeg";
const StoreCard = () => {
  return (
    <div className="card card-side card-compact shadow-sm rounded-lg hover:border-orange-500 border cursor-pointer">
      <figure className="w-1/3 p-1 ">
        <img
          src={image}
          alt="Movie"
          className="h-full w-full rounded-lg border object-cover"
        />
      </figure>
      <div className="card-body max-sm:w-2/3">
        <div className="card-title font-bold max-md:text-sm">
          New movie is released!
        </div>
        <p className=" font-medium  line-clamp-3 overflow-clip  max-md:text-xs">
          this is the description of the product this is the description of the
          product this is the description of the product this is the description
          of the product
        </p>
      </div>
    </div>
  );
};

export default StoreCard;
