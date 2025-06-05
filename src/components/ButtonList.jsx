import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "IPL",
    "News",
    "Bangalore",
    "Live",
    "Music",
    "Songs",
    "India's Got Talent",
    "Movies",
    "Bihar",
    "India",
    "POK",
    // "Mixes",
    "Web Series"
  ];

  return (
    <div className="flex">
      {list.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
