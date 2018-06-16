import React from 'react';
import { connect } from 'react-redux';


import _ from 'lodash';

import { featchPosts } from '../actions';


class PostIndex extends React.Component{

  componentDidMount(){
    this.props.featchPosts();
  }


  renderPosts(){
    return _.map(this.props.posts, post => {
      <li key={ post.id }>
        { post.title }
      </li>
    });
  }

  render(){
    console.log(this.props.posts);
    return (
    <div>
      <h3>Posts</h3>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
    </div>);
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default connect (mapStateToProps, {featchPosts})(PostIndex);