import React from 'react';
import Post from './Post';
import NewPost from './NewPost';

const Posts = ({posts}) => {
  return (
    <div>
      <NewPost />
      {
        posts.map(post => {
          return (
            <Post key={post.id} post={post} />
          )
        })
      }
    </div>
  );
};

export default Posts;