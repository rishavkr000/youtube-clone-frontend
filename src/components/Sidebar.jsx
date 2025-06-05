import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const toggleMenu = useSelector((store) => store.sidebar.isSideBarOpen);
  return (
    toggleMenu && (
      <div className="p-5 shadow-xl w-48 scroll-auto">
        <div className="m-2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>YouTube Music</li>
          </ul>
        </div>
        <div className="m-2">
          <h1 className="font-bold">You ▶️</h1>
          <ul>
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>Your Courses</li>
            <li>Watched Later</li>
            <li>Liked Videos</li>
            <li>Downloads</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
