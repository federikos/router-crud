import React, {useContext} from 'react';
import CurrentPostContext from './PostContext';
import {useHistory} from 'react-router-dom';

const NewPost = props => {
  const [currentPost, setCurrentPost] = useContext(CurrentPostContext);
  const history = useHistory();
  
  const handleSubmit = e => {
    e.preventDefault();
    if (props.match && props.match.path === '/posts/new') {
      console.log(props.match)
    }
    history.push('/posts/new');
  }
  return (
    <div className="container">
      <div className="well col-md-5"> 
        <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
          <h4>What's New</h4>
            <div className="form-group" style={{padding: 14}}>
              <textarea className="form-control" placeholder="Create new post" value={currentPost} onChange={e => setCurrentPost(e.target.value)} />
            </div>
          <button className="btn btn-primary pull-right" type="submit">Create post</button>
          <ul className="list-inline">
            <li><a href=""><i className="glyphicon glyphicon-upload"></i></a></li>
            <li><a href=""><i className="glyphicon glyphicon-camera"></i></a></li>
            <li><a href=""><i className="glyphicon glyphicon-map-marker"></i></a></li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default NewPost;