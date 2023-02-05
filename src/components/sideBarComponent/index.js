import "./styles.css";
import { sidebarContent } from "./sidebar-content";
import twitterLogo from '../../assets/sidebar/twitter.png';
import SideBarItem from "./sidebarItem/sidebar-item";
import SidebarAccount from "./sidebarAccount";

const SideBarComponent = () => {
  return (
    <div className="sidebar">
      <img className="twitter-logo" src={twitterLogo} />
      <div className="sidebar-items">
        {sidebarContent.map((item, index) => (
        <SideBarItem key={index} item={item}/>
      ))}
      </div>
      <button className="sidebar-tweet-btn">Tweet</button>
      <SidebarAccount/>
    </div>
  );
};

export default SideBarComponent;
