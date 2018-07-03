import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'; //reduxForm is similar to connect
import { fetchPosts } from '../actions';
import { bindActionCreator, bindActionCreators } from 'redux';
import _ from 'lodash';

class NewPost extends Component {

    // renderTitleField(field) {
    //     return(
    //         <div className="form-group"> 
    //             <label>Title</label>
    //             {/* <input 
    //                 type="text"
    //                 onChange={field.input.onChange}
    //                 onFocus={field.input.onFocus}
    //                 onBlur={field.input.onBlur}
    //             />  
                
    //             Below is same as above*/}
    //             <input 
    //                 className="form-control"
    //                 type="text"
    //                 {...field.input}
    //             />
    //         </div>
    //     );
    // }


    renderField(field) {
        return(
            <div className="form-group"> 
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {
        //this === component
        console.log(values);
    }

    render() {

        const { handleSubmit } = this.props; // handleSubmit is added by redux=form to our component

        return(

            //forms states are - pristine (initial), touched (user did somthing), invalid (if any error)
            //show only error after touched
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title" //field in the state
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories" //field in the state
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content" //field in the state
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    //values -> {title: 'entered value', categories:'entered value', content:'entered value'}
    const errors = {};

    //validate input from values object
    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is atleast 3 characters!";
    }

    if(!values.categories) {
        errors.categories = "Enter some category";
    }
    if(!values.content) {
        errors.content = "Enter some content please";
    }


    // If error is empty, the form is fine to submit
    // If error has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'NewPostsForm' // this is name of the form on the page
})(NewPost);


//For example we can add one more form to this component s as belwo
// export default reduxForm({
//     form: 'EditPostsForm' // Name should be unique
// })(NewPost);