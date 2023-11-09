import '../styles/Post.css';
import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { PostRequest } from '../models/requests/postRequest';

const Post = ({
  avatarUrl,
  displayName,
  username,
  verified,
  text,
  imageUrl,
}: PostRequest) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatarUrl} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{' '}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}@
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          {imageUrl && (
            <img className="post__bodyImage" src={imageUrl} alt="Post One" />
          )}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
