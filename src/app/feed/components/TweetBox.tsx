import '../styles/TweetBox.css';
import { MouseEvent, useState } from 'react';
import { Avatar, Button } from '@mui/material';
import Logo from '../../../assets/CILLogo.jpg';
import { firebaseApp } from '../../../configs/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('src/assets/PostTwo.jpeg');

  const sendTweet = async (e: MouseEvent) => {
    e.preventDefault();

    const db = getFirestore(firebaseApp);
    const postsCollection = collection(db, 'posts');

    const tweet = {
      avatarUrl: 'src/assets/CILLogo.jpg',
      displayName: 'Wilson Kutegeka',
      username: 'kutegz',
      verified: true,
      text: tweetMessage,
      imageUrl: tweetImage,
    };

    // Add the document to the collection
    const postedTweet = await addDoc(postsCollection, tweet);

    setTweetMessage('');
    setTweetImage('src/assets/PostTwo.jpeg');

    // Log the document ID
    console.log('Post tweeted has Id:', postedTweet.id);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src={Logo} alt="Logo" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="tweetBox-imageInput"
          placeholder="Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button className="tweetBox-tweetButton" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
