function Page404() {
  return (
    <div className="mt-0  bg-no-repeat bg-right bg-[url('assets/Group.png')]">
      <div className="h-screen  flex flex-col justify-center text-center">
        <div className="flex flex-row  place-content-center ">
          <div className="max-sm:text-2xl font-bold text-4xl mr-1">Ooops! </div>
          <div className="max-sm:text-2xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-900">
            404 Not found
          </div>
        </div>
        <div className="m-3  ">
          <p className="text-xl max-sm:text-base text-gray-500 font-inter">
            The page you are looking for
          </p>
          <p className="text-xl max-sm:text-base text-gray-500 font-inter">
            does not exist or was removed.
          </p>
        </div>
        {/* <div>
          <PrimaryButton
            variant="contained"
            text="Back home"
            className="btn place-content-center button-Shadow-blue"
            onClick={() => navigate("/")}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Page404;
