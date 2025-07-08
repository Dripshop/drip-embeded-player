import React, { useState } from "react";

const SwitchUserToggle = () => {
  const [activeUser, setActiveUser] = useState("User 47");

  const handleSwitch = (user: React.SetStateAction<string>) => {
    setActiveUser(user);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" />
          </svg>
          Switch User:
        </span>
        <div className="flex gap-2">
          {["User 47", "User 46"].map((user) => (
            <button
              key={user}
              onClick={() => handleSwitch(user)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
                ${activeUser === user
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
              `}
            >
              {user}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchUserToggle;
