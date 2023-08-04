import Footer from "../Footer";
import Header from "../Header";

const NonLogin = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="relative  ">
      <div className="flex flex-col min-h-screen">
        <div className=" sticky top-0 z-50">
          <Header />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NonLogin;
