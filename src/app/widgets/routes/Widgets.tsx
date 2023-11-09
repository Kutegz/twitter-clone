import SearchIcon from '@mui/icons-material/Search';
import '../styles/Widgets.css';
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from 'react-twitter-embed';
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1709252792584729068'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kutegz"
          options={{ heigh: 400 }}
        />
        <TwitterShareButton
          url={'https://www.facebook.com/ClinicMasterINTERNATIONAL'}
          options={{ text: 'ClinicMaster is supa', via: 'kutegz' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
