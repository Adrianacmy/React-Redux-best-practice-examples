import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featchPost } from '../actions';

class PostsDetail extends Component{

  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log( id);
    this.props.featchPost(id);  
  }
  

  render(){
    const { post } = this.props;

    if (!post){
      return <div>Loading...</div>
    }
    
    if(!post.title | !post.content | post.categories){
      return <div>Not enough information</div>
    }

    return (
      <div>
        <h3>{ post.title}</h3>
        <h6>categories: { post.categories}</h6>
        <h3>{ post.content}</h3>
      </div>
    );
  }
}


function mapStateToProps({ posts }, ownProps){ //2nd arg is the component props
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { featchPost })(PostsDetail);