import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaLanguageSolid } from "react-icons/lia";

function Navbar() {
  return (
    <header className="d-flex justify-content-between  p-4 bg-white custom-box shadow ">
      <div className="d-flex">
        <img className="px-5" src="unknown" />
        <button
          style={{ border: "none" }}
          className="mx-5 ml-5 bg-transparent fs-5"
        >
          <RxHamburgerMenu />
        </button>
      </div>
      <div className="">
        <button
          style={{ border: "none" }}
          className="mx-2   bg-transparent fs-5"
        >
          <IoMoonOutline />
        </button>
        <button
          style={{ border: "none" }}
          className="mx-2  bg-transparent fs-5"
        >
          <IoIosNotificationsOutline />
        </button>
        <button
          style={{ border: "none" }}
          className="mx-2  bg-transparent fs-5"
        >
          <LiaLanguageSolid />
        </button>
        <img src="unknown" />
      </div>
    </header>
  );
}

export default Navbar;
