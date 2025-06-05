import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/slice/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col p-2 shadow-xl">
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
      <div className="col-span-10 text-center">
        <input type="text" placeholder="Search" className="border border-gray-500 w-1/2 rounded-l-full py-2 px-4"/>
        <button className="border border-gray-500 w-18 py-2 rounded-r-full cursor-pointer bg-gray-200">🔍</button>
      </div>
      <div className="col-span-1 flex justify-end px-2">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg" alt="notification" className="h-8 mt-1 mx-2"/>
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
