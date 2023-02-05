import star from '../../../assets/home/galochka.png';
import Activity from './activity';

const Tweet = ({tweet}) => {
    return (
        <div className='tweet'>
            <div>
                <img src={tweet.photo}/>
            </div>
            <div style={{paddingLeft: 10}}>
                <div className="tweet-info">
                    <span style={{color: 'black', fontWeight: 'bold'}}>{tweet.name}</span>
                    <img src={tweet.star ? star : ""}/>
                    <span>{tweet.nickname} · </span>
                    <span>{tweet.posted}</span>
                </div>
                <div>{tweet.content}</div>
                <Activity activity={tweet}/>
            </div>
        </div>
    )
} 

export default Tweet; 