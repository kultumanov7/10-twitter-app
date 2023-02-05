const SideBarItem = ({item}) => {
  return (
    <div className="sidebar-item">
      <img width="30" height="30" src={item.img} />
      <div className="sidebar-item-name">{item.name}</div>
    </div>
  );
};

export default SideBarItem;
