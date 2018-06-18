import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component{

  renderField (field){
    return (
      <div className="form-group">
        <input 
        type="text"
        className="form-control"
        placeholder={field.placeholder}
        {...field.input}
        />
      </div>
    );
  }

  render(){
    return (
      <form>
        <Field 
          placeholder="Title"
          name="title"
          component={this.renderField}
        />
        <Field 
          placeholder="Categories"
          name="categories"
          component={this.renderField}
        />
         <Field 
          placeholder="Content"
          name="content"
          component={this.renderField}
        />
      
      </form>
    );
  }
}


export default reduxForm({
  form: 'PostsNewForm'
}) (PostsNew);