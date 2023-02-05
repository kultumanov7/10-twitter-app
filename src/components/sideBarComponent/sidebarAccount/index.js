import threePoints from '../../../assets/sidebar/dots.svg';
import avatar from '../../../assets/sidebar/avatar.png';

const SidebarAccount = () => {
  return (
    <div className="sidebar-account-info">
      <img src={avatar} />
      <div>
        <p style={{ fontWeight: "bold" }}>Cristiano Ronaldo</p>
        <p>@cristiano</p>
      </div>
      <button style={{ border: "none", background: "white" }}>
        <img width="20" height="20" src={threePoints} />
      </button>
    </div>
  );
};

export default SidebarAccount;
