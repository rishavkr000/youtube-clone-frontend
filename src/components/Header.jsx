import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slice/sidebarSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/slice/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchValue(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchValue(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1]
      })
    );
  };

  const handleSidebarToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col grid-cols-12 p-2 shadow-xl">
      <div className="flex col-span-1">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          alt="menu"
          className="h-10 cursor-pointer hover:bg-gray-200 rounded-full mx-3 p-1"
          onClick={() => handleSidebarToggle()}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWAHLE_HOsD6iFbpqtYy9hRMTwP9fYi3zEQ&s"
          alt="youtube-logo"
          className="h-14 -mt-2"
        />
      </div>
      <div className="col-span-10 flex justify-center relative">
        <div className="flex w-full justify-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
            className="border border-gray-500 w-1/2 rounded-l-full py-2 px-4"
          />
          <button className="border border-gray-500 w-18 py-2 rounded-r-full cursor-pointer bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute top-[3.5rem] bg-white px-5 shadow-lg rounded-lg w-[43rem]">
            <ul>
              {searchValue.map((value) => (
                <li key={value} className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end px-2">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg"
          alt="notification"
          className="h-8 mt-1 mx-2"
        />
        <img
          alt="user"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          className="h-10"
        />
      </div>
    </div>
  );
};

export default Header;
