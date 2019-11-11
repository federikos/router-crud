import React from 'react';
import PostView from './PostView';

const PostPreview = props => {
  const {id} = props.match.params;
  let post = props.posts.find(post => parseInt(post.id) === parseInt(id));

  return <PostView post={post} showEditBtns/>
};

export default PostPreview;