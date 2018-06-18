import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component{

  renderField (field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : '' }`; 
    return (
      <div className={className}>
        <input 
        type="text"
        className="form-control"
        placeholder={field.placeholder}
        {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    // this ==== component
    console.log(values);
  }

  render(){

    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button className="btn bnt-primary">Submit</button>
      </form>
    );
  }
}

function validate_post(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title";
  }

  if(!values.categories){
    errors.categories = "Enter a category";
  }

  if(!values.content){
    errors.content = "Enter some content";
  }

  return errors;
}


export default reduxForm({
  validate: validate_post,
  form: 'PostsNewForm'
}) (PostsNew);