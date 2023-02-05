import comments from "../../../assets/home/comments.png";
import reposts from "../../../assets/home/reposts.png";
import likes from "../../../assets/home/likes.png";
import views from "../../../assets/home/views.png";
import share from "../../../assets/home/share.png";

const Activity = ({activity}) => {
    console.log(activity)
  return (
    <div className="activities">
      <div className="activity">
        <img width="20" height="20" src={comments} />
        <p>{activity.comments}</p>
      </div>
      <div className="activity">
        <img width="20" height="20" src={reposts} />
        <p>{activity.reposts}</p>
      </div>
      <div className="activity">
        <img width="20" height="20" src={likes} />
        <p>{activity.likes}</p>
      </div>
      <div className="activity">
        <img width="20" height="20" src={views} />
        <p>{activity.views}</p>
      </div>
      <div className="activity">
        <img width="20" height="20" src={share} />
        <p>{activity.share}</p>
      </div>
    </div>
  );
};

export default Activity;
