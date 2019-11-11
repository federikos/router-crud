import React from 'react';
import PostView from './PostView';

const PostPreview = props => {
  const {id} = props.match.params;
  let post = props.posts.find(post => post.id === id);

  return <PostView post={post} />
};

export default PostPreview;