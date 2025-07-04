import {
  ChevronDown,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
import WallMartLogo from "../assets/wallmart-icon.svg";
import WallmartLiveIcon from "../assets/wallmart-live.png";
import Container from "./Container";

const Header: React.FC = () => {
  return (
    <>
      <Container className="bg-blue-600 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              <img src={WallMartLogo} alt="Walmart Logo" className="h-8" />
            </div>
            <div className="flex-1 max-w-2xl">
              <div className="relative bg-white rounded-full shadow-sm focus:border-blue-500">
                <input
                  type="text"
                  placeholder="Search everything at Walmart online and in store"
                  className="w-full py-2 px-4 pr-12 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-4 top-2 w-5 h-5 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 gap-x-1">
              <Heart className="w-5 h-5" />
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm">Reorder</span>
                <span className="text-sm font-bold">My Items</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 gap-x-1">
              <User className="w-5 h-5" />
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm">Sign In</span>
                <span className="text-sm font-bold">Account</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-x-1 gap-x-1">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="bg-yellow-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold absolute top-[-6px] right-[-15px]">
                  1
                </span>
              </div>
              <div className="hidden md:inline text-sm font-thin">$0.00</div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="hidden md:flex items-center space-x-6 bg-[#f0f5ff] py-3">
        <div className="flex items-center space-x-1 cursor-pointer">
          <LayoutGrid size={16} />
          <span className="text-sm">Departments</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <LayoutGrid size={16} />
          <span className="text-sm">Services</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </Container>
      <Container className="bg-white border-b py-6">
        <img
          src={WallmartLiveIcon}
          alt="Walmart Live"
          className="max-w-[120px]"
        />
      </Container>
    </>
  );
};

export default Header;
