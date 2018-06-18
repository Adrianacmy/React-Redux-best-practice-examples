import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsDetail extends Component {

  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      // console.log( id);
      this.props.featchPost(id);
    }
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => this.props.history.push("/"));
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>
        <Link className="btn btn-success" to="/posts/">Back to Post Index</Link>
        Loading...
        </div>
    }

    if (!post.title | !post.content | post.categories) {
      return <div>
        <Link className="btn btn-success" to="/posts/">Back to Post Index</Link>
        Not enough information
      </div>
    }

    return (
      <div>
        <Link className="btn btn-success" to="/posts/">Back to Post Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delet Post</button>
        <h3>{post.title}</h3>
        <h6>categories: {post.categories}</h6>
        <h3>{post.content}</h3>
      </div>
    );
  }
}


function mapStateToProps({ posts }, ownProps) { //2nd arg is the component props
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { featchPost, deletePost })(PostsDetail);