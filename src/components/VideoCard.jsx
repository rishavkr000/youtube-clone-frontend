const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className="p-3 m-3 w-78 cursor-pointer">
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
