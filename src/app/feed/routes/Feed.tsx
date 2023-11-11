import '../styles/Feed.css';
import Post from '../components/Post';
import { useEffect, useState } from 'react';
import TweetBox from '../components/TweetBox';
import { firestoreDb } from '../../../configs/firebase';
import { PostRequest } from '../models/requests/postRequest';
import { collection, getDocs } from 'firebase/firestore/lite';

const Feed = () => {
  const [posts, setPosts] = useState<PostRequest[]>([]);

  useEffect(() => {
    async function getPosts() {
      const postsCollection = collection(firestoreDb, 'posts');
      const snapshot = await getDocs(postsCollection);
      const postList = snapshot.docs.map((doc) => doc.data() as PostRequest);
      setPosts(postList);
    }

    getPosts();
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
