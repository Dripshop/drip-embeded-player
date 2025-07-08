import { useAtom } from "jotai";
import { currentUserIdAtom } from "../state";
import { UserAccounts } from "../config";

const SwitchUserToggle = () => {
  const [currentUserId, setCurrentUserId] = useAtom(currentUserIdAtom);

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
          {UserAccounts.map((user) => (
            <button
              key={user.id}
              onClick={() => setCurrentUserId(user.id)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
                ${
                  currentUserId === user.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {user.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchUserToggle;
