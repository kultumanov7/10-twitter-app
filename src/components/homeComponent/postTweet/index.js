import avatar from '../../../assets/sidebar/avatar.png';
import media from '../../../assets/home/media.png';
import gif from '../../../assets/home/gif.png';
import list from '../../../assets/home/list.png';
import smile from '../../../assets/home/smile.png';
import calendar from '../../../assets/home/calendar.png';
import location from '../../../assets/home/location.png';

const PostTweet = () => {
  return (
    <div className="post-tweet">
      <img width="60" height="60" src={avatar} />
      <div className="post-tweet-toolbar">
        <input
          className="post-tweet-input"
          type="text"
          placeholder="What's happening?"
        />
        <div className="post-tweet-tools">
          <img src={media} />
          <img src={gif} />
          <img src={list} />
          <img src={smile} />
          <img src={calendar} />
          <img src={location} />
        </div>
      </div>
      <button className="post-tweet-btn">Tweet</button>
    </div>
  );
};

export default PostTweet;
