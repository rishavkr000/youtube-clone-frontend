import { useSelector } from "react-redux"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  const toggleMenu = useSelector(store => store.sidebar.isSideBarOpen)
  return (
    <div className={`${toggleMenu ? "w-330" : "w-12/12"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer