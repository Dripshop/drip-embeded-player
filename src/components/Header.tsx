import {
  ChevronDown,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React, { useEffect } from "react";
import WallMartLogo from "../assets/wallmart-icon.svg";
import WallmartLiveIcon from "../assets/wallmart-live.png";
import Container from "./Container";
import SwitchUserToggle from "./SwicthUserToggle";
import { GoLiveUrl } from "../config";
import { useCart } from "../useCart";

const Header: React.FC = () => {
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "addToCart" && event.data.data?.item) {
        const item = event.data.data.item;
        addToCart({
          id: item?.id.toString() || "",
          name: item?.name || "",
          price: item?.price || 0,
          image: item?.image || "",
          quantity: 1,
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <Container className="bg-blue-600 text-white">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center space-x-4 w-4/5">
            <div className="text-2xl font-bold rounded-full hover:bg-[#001e60] cursor-pointer p-2">
              <img src={WallMartLogo} alt="Walmart Logo" className="h-8" />
            </div>
            <div className="w-full ml-8">
              <div className="relative bg-white rounded-full shadow-sm focus:border-blue-500">
                <input
                  type="text"
                  placeholder="Search everything at Walmart online and in store"
                  className="w-full py-3 px-4 pr-12 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-2 top-1.5 w-8 h-8 text-gray-500 cursor-pointer bg-[#002e99] rounded-full flex items-center justify-center">
                  <Search size={20} color="white" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 w-1/5 justify-end">
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
                  {cart.length}
                </span>
              </div>
              <div className="hidden md:inline text-sm font-thin">
                ${cartTotal.toFixed(2)}
              </div>
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
      <Container className="bg-white py-6 flex items-center justify-center relative">
        <div className="absolute left-4">
          <img
            src={WallmartLiveIcon}
            alt="Walmart Live"
            className="max-w-[120px]"
          />
        </div>
        <div className="flex gap-2 items-center">
          <SwitchUserToggle />
          <a
            href={GoLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#8A2BE2] text-white font-semibold shadow-md hover:brightness-110 transition text-xs cursor-pointer">
              <span>⚡</span>
              <span>Go Live Direct</span>
            </button>
          </a>
        </div>
      </Container>
    </>
  );
};

export default Header;
