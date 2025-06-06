import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const {channelTitle, title, thumbnails} = snippet;
  const toggleMenu = useSelector(store => store.sidebar.isSideBarOpen)
  return (
    <div className={`p-3 m-3 cursor-pointer ${toggleMenu ? "w-76" : "w-70"}`}>
      <img
        src={thumbnails.medium.url}
        alt="thumbnails"
        className="rounded-2xl"
      />
      <ul>
        <li className="font-bold mb-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
