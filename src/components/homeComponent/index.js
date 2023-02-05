import PostTweet from './postTweet';
import HomeHeader from './homeHeader';
import Tweets from './tweets';


const HomeComponent = () => {
  return (
    <div className="home">
      <HomeHeader/>
      <PostTweet/>
      <Tweets/>
    </div>
  );
};

export default HomeComponent;
