import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const toggleMenu = useSelector((store) => store.sidebar.isSideBarOpen);
  return (
    toggleMenu && (
      <div className="p-5 shadow-xl w-48 scroll-auto">
        <div className="m-2">
          <ul>
            <li className="hover:bg-gray-200 rounded-lg p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Shorts</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Subscriptions</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">YouTube Music</li>
          </ul>
        </div>
        <hr />
        <div className="m-2">
          <h1 className="font-bold p-2">You ▶️</h1>
          <ul>
            <li className="hover:bg-gray-200 rounded-lg p-2">History</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Playlists</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Your Videos</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Your Courses</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Watched Later</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Liked Videos</li>
            <li className="hover:bg-gray-200 rounded-lg p-2">Downloads</li>
          </ul>
        </div>
        <hr />
      </div>
    )
  );
};

export default Sidebar;
