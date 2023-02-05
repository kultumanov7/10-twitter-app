import { dataTweet } from "./data-tweet";
import Tweet from "./tweet";
import '../styles.css';

const Tweets = () => {
  return (
    <div className="tweets">
      {dataTweet.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />;
      })}
    </div>
  );
};

export default Tweets;
