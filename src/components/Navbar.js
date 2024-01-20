import { Link } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import avatar from "../assets/images/avatar.png";

const Navbar = () => {
  const user = "Viet Thang";
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLogout = () => {
    // logOut(dispatch, navigate);
    // setShowDropdown(false);
    // toast.success("Đăng xuất thành công");
  };
  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden px-4 lg:px-0 bg-white shadow-sm py-4 lg:block sticky top-0 z-50">
        {showDropdown && (
          <div
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-20"
            onClick={() => setShowDropdown(false)}
          ></div>
        )}
        <div className="container flex justify-between items-center">
          <div className="space-x-8 hidden lg:block">
            <Link to={"/"} className="font-bold text-xl">
              GIAODICHANTOAN
            </Link>
          </div>
          <div className="hidden lg:block">
            {user ? (
              <div className="space-x-4 flex items-center">
                <span className="bg-gray-50 hover:bg-gray-100 p-2 border rounded">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(1000000)}
                </span>
                <Link
                  to={"/tao-moi"}
                  className="bg-gray-50 hover:bg-gray-100 p-2 border rounded"
                >
                  Tạo giao dịch
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="bg-gray-50 hover:bg-gray-100 p-1 flex items-center border rounded"
                  >
                    {"Viet Thang"}{" "}
                    <img
                      className="ml-2 w-8 h-8 rounded-full"
                      src={user?.Avatar ? user.Avatar : avatar}
                    />
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full mt-2 w-full bg-white rounded shadow-lg z-50">
                      <Link
                        to={"/nap-tien"}
                        onClick={() => setShowDropdown(false)}
                        className="text-left w-full block p-2 hover:bg-gray-50"
                      >
                        Nạp tiền
                      </Link>
                      <Link
                        to={"/rut-tien"}
                        onClick={() => setShowDropdown(false)}
                        className="text-left w-full block p-2 hover:bg-gray-50"
                      >
                        Rút tiền
                      </Link>
                      <Link
                        to={"/ca-nhan"}
                        onClick={() => setShowDropdown(false)}
                        className="w-full block p-2 hover:bg-gray-50"
                      >
                        Trang cá nhân
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="text-left text-red-400 w-full block p-2 hover:bg-gray-50"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-x-8">
                <Link to={"/dang-nhap"}>Đăng nhập</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="lg:hidden w-full bg-white fixed bottom-0 z-50 border">
        <div className="px-4 py-2 shadow-sm flex justify-between items-center">
          <Link to="/tao-moi">
            <PencilSquareIcon className="w-8 text-blue-400" />
          </Link>
          <Link to="/">
            <HomeIcon className="w-8 text-blue-400" />
          </Link>
          <Link to={"/ca-nhan"}>
            <UserIcon className="w-8 text-blue-400" />
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar;
