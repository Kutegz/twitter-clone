import '../styles/Feed.css';
import Post from '../components/Post';
import { useEffect, useState } from 'react';
import TweetBox from '../components/TweetBox';
import { firebaseApp } from '../../../configs/firebase';
import { PostRequest } from '../models/requests/postRequest';
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from 'firebase/firestore/lite';

const Feed = () => {
  const [posts, setPosts] = useState<PostRequest[]>([]);

  useEffect(() => {
    const db = getFirestore(firebaseApp);

    async function getPosts(db: Firestore) {
      const postsCollection = collection(db, 'posts');
      const snapshot = await getDocs(postsCollection);
      const postList = snapshot.docs.map((doc) => doc.data() as PostRequest);
      setPosts(postList);
    }

    getPosts(db);
  }, []);

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <TweetBox />
        {posts.map(
          (
            { avatarUrl, displayName, username, verified, text, imageUrl },
            index
          ) => (
            <Post
              key={index}
              avatarUrl={avatarUrl}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              imageUrl={imageUrl}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
