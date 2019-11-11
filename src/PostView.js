import React, {useState, useContext, useEffect} from 'react';
import clsx from 'clsx';
import PostContext from './PostContext';
import moment from 'moment';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const EditBtns = ({showEditBtns, editMode, setEditMode, post}) => {
  const history = useHistory();
  const [currentPost, setCurrentPost , updatePosts] = useContext(PostContext);

  const handleDelete = e => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/${post.id}`, {
      method: "DELETE"
    })
    .then(() => {
      updatePosts();
      history.push('/');
    })
  }

  const handleEdit = e => {
    setEditMode(prevEditMode => {
      if (!prevEditMode) {
        setCurrentPost(post.content);
      } else {
        setCurrentPost('');
      }
      return true;
    });
  }

  const handleSave = e => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        id: post.id, //id === 0 сервер обрабатывает как новый пост, сам присваивает новый id
        content: currentPost
      })
    })
    .then(() => {
      setCurrentPost('');
      setEditMode(false);
      updatePosts();
      history.push(`/posts/${post.id}`);
    });
  }


  if (showEditBtns) {
    if (editMode) {
      return (
        <div>
          <button className="btn btn-primary pull-right" onClick={handleSave}>Сохранить</button>
        </div>
      )
    }
    return (
        <div>
          <button className="btn btn-primary pull-right" onClick={handleEdit}>Изменить</button>
          <button className="btn btn-primary pull-right" onClick={handleDelete}>Удалить</button>
        </div>
      )
  }
  return null;
}

const PostContent = ({post, editMode}) => {
  const [currentPost, setCurrentPost] = useContext(PostContext);

  if (editMode) {
    return (
      <input value={currentPost} onChange={e => setCurrentPost(e.target.value)} />
    )
  }
  return <p>{post.content}</p>
}

const PostView = ({post, handleClick, showEditBtns}) => {
  const history = useHistory();
  const [editMode, setEditMode] = useState(false);
  const close = editMode 
  ? <button type="button" class="close" data-dismiss="modal" aria-hidden="true" onClick={() => setEditMode(false)}>
      ×
    </button> 
  : null;

  if (post) {
    return (
      <div className="container">
        <div className={clsx('col-md-5', 'panel', 'panel-default', !showEditBtns && 'clickable' )} onClick={handleClick || null}>
          {close}
            <div class="panel-body">
              <section class="post-heading">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="media">
                              <div class="media-left">
                                <a href="#">
                                  <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="40" height="40" alt="..." />
                                </a>
                              </div>
                              <div class="media-body">
                                <a href="#" class="anchor-username"><h4 class="media-heading">Bayu Darmantra</h4></a> 
                                <a href="#" class="anchor-time">{moment(post.created).fromNow(true)}</a>
                              </div>
                            </div>
                        </div>
                    </div>             
              </section>
              <section class="post-body">
                  <PostContent editMode={editMode} post={post} />
              </section>
              <section class="post-footer">
                  <hr />
                  <div class="post-footer-option container">
                        <ul class="list-unstyled">
                            <li><a href="#"><i class="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-comment"></i> Comment</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-share-alt"></i> Share</a></li>
                        </ul>
                  </div>
                  <EditBtns showEditBtns={showEditBtns} post={post} editMode={editMode} setEditMode={setEditMode} />
              </section>
            </div>
        </div>   
      </div>
    );
  }
  return null;
};

PostView.propTypes = {
  
};

export default PostView;