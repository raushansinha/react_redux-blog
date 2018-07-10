import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class ShowPost extends Component {

    componentDidMount() {
        if(!this.props.post) {
            const { id } = this.props.match.params;
            //console.log("ID: " + id);
            this.props.fetchPost(id);
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { post } = this.props;

        if(!post)
        {
            return <div>LOADING...</div>;   
        }
        
        return(
            <div>
                <Link className="btn btn-primary" to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

///ownProps is this.props

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);