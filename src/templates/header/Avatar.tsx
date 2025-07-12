import { useState, useRef, useEffect } from "react";
import { getLocalStorage, clearLocalStorage } from "../../utils/localStorage";
import UserDeafaute from "../../assets/images/user_deafaute.jpg";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

function Avarta() {
  const [isOpen, setIsOpen] = useState(true);
  const user = getLocalStorage("user");
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => prev);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    clearLocalStorage("user");
    navigate("/login");
  };

  return (
    <div className="relative flex items-center gap-2" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className="flex items-center gap-1 focus:outline-none"
      >
        <img
          className="w-16 h-16 rounded-full object-cover cursor-pointer"
          src={UserDeafaute}
          alt="avatar"
        />
        <span className="font-medium text-lg text-gray-800">Huy Hoàng</span>
        <FaCaretDown className="text-gray-600 text-xl" />
      </button>

      {/* {user && isOpen && ( */}
      <div className="absolute top-16 left-5 w-40 bg-slate-100 shadow-md rounded z-50">
        <a
          href="/profile"
          className="block font-semibold px-4 py-2 text-sm text-gray-800 hover:bg-slate-200 rounded-t-md"
        >
          Profile
        </a>
        <a
          href="/whishList"
          className="block font-semibold px-4 py-2 text-sm text-gray-800 hover:bg-slate-200"
        >
          Wishlist
        </a>
        <button
          onClick={handleLogout}
          className="w-full font-semibold text-left px-4 py-2 text-sm  hover:bg-slate-200 rounded-b-md"
        >
          Sign out
        </button>
      </div>
      {/* )} */}
    </div>
  );
}

export default Avarta;
