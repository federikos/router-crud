import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const PostView = ({post, handleClick}) => {
  if (post) {
    return (
      <div class="container" onClick={handleClick || null}>
              <div class="col-md-5 panel panel-default">
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
                              <div class="col-md-1">
                                  <a href="#"><i class="glyphicon glyphicon-chevron-down"></i></a>
                              </div>
                          </div>             
                    </section>
                    <section class="post-body">
                        <p>{post.content}</p>
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