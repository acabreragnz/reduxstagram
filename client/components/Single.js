import React from 'react';
import Photo from './Photo';
import Comments from "./Comments";

function Single(props) {
    const {posts, comments, params: { postId } } = props;

    const i  = posts.findIndex(post => post.code === postId);
    const post = posts[i];
    const postComments = comments[postId] || [];

    return (
        <div className="single-photo">
            <Photo i={i} post={post} comments={comments} {...props} />
            <Comments postComments={postComments} {...props} />
        </div>
    );
}

export default Single;